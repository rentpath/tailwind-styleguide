import { 
	merge,
	Subject,
	BehaviorSubject,
	Observable,
	ConnectableObservable
} from "rxjs";
import { 
	map,
	mergeMap,
	multicast
} from "rxjs/operators";
import { tailwind } from "../temp";

import { ruleWalker } from "./rules";

interface SplashState {
	view: "splash";
}

interface LoadingState {
	view: "loading";
	progress: number;
}

interface DisplayState {
	view: "display";
	rules: string;
}

type State =
	| SplashState
	| LoadingState
	| DisplayState

// ---

const initialState: State = (() => {
	return {
		view: "splash" as const
	};
})();

const parser$ = new Subject<string>();

const parse$: Observable<State> = parser$.pipe(
	mergeMap(function (raw) {
		return ruleWalker.parseAndCollect(raw).pipe(
			map(function (res) {
				if (res.type === "progress") {
					return {
						view: "loading",
						progress: res.percentage
					} as LoadingState;
				} else {
					return {
						view: "display",
						rules: res.parsed
					} as DisplayState;
				}
			})
		);
	})
)

export const state$ = new BehaviorSubject<State>(initialState);

const _state$ = merge(parse$).pipe(
	multicast(() => state$)
) as ConnectableObservable<State>;

_state$.connect();

// ---

export function parseWithTailwind() {
	parser$.next(tailwind);
}
