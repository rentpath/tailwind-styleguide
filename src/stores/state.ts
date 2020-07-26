import {
	merge,
	Subject,
	BehaviorSubject,
	Observable,
	ConnectableObservable,
	empty
} from "rxjs";
import {
	map,
	mergeMap,
	multicast
} from "rxjs/operators";
import { tailwind } from "../temp";

import { ruleWalker } from "./rules";
import { CollectPayload, Parsed } from "../css/RuleWalker";

interface SplashState {
	view: "splash";
}

interface LoadingState {
	view: "loading";
	progress: number;
}

interface DisplayState {
	view: "display";
	parsed: Parsed;
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

function transformParsePayload(payload: CollectPayload): State {
	if (payload.type === "progress") {
		return {
			view: "loading",
			progress: payload.percentage
		};
	} else {
		return {
			view: "display",
			parsed: payload.parsed
		};
	}
}

const parse$: Observable<State> = parser$.pipe(
	mergeMap(raw => {
		return ruleWalker.parseAndCollect(raw).pipe(
			map(transformParsePayload)
		);
	})
);

export const state$ = new BehaviorSubject<State>(initialState);

const _state$ = merge(
	parse$
).pipe(
	multicast(() => state$)
) as ConnectableObservable<State>;

_state$.connect();

// ---

export function parseWithTailwind() {
	parseWithString(tailwind);
}

export function parseWithString(raw: string) {
	parser$.next(raw);
}
