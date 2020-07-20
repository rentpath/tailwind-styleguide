import { RuleWalker } from '../css/RuleWalker';

import { BackgroundColorCollector } from '../sections/backgroundColor/Collector';
import { TextColorCollector } from "../sections/textColor/Collector";

import { Machine, interpret, assign } from 'xstate';
import { tailwind } from '../temp';
// import { PaddingCollector } from '../sections/padding/Collector';
import { BoxShadowCollector } from '../sections/boxShadow/Collector';
import { BorderRadiusCollector } from '../sections/borderRadius/Collector';

const LOCALSTORAGE_KEY = "parsed_rules";

const ruleWalker = new RuleWalker([
	new BackgroundColorCollector(),
	new TextColorCollector(),
	// new PaddingCollector(),
	new BoxShadowCollector(),
	new BorderRadiusCollector(),
]);

interface WindsockContext {
	raw?: string;
	rules?: string;
}

type ParseEvent = { type: "PARSE"; raw: string }
type ParsedEvent = { type: "PARSED"; rules: string }
type ErrorEvent = { type: "ERROR"; error: string }
type ResetEvent = { type: "RESET" }

type Event =
	| ParseEvent
	| ParsedEvent
	| ErrorEvent
	| ResetEvent

const initialState = (() => {
	const cache = localStorage.getItem(LOCALSTORAGE_KEY);

	if (import.meta.env.MODE === 'development') {
		return {
			initial: 'display',
			context: {
				rules: ruleWalker.parseAndCollect(tailwind)
			}
		}
	} else if (cache) {
		return {
			initial: 'display',
			context: {
				rules: JSON.parse(cache)
			}
		};
	} else {
		return {
			initial: 'greeting',
			context: {}
		};
	}
})();

const windsockMachine = Machine<WindsockContext, Event>({
	...initialState,
	// Identifier (Unique)
	id: 'windsock',
	// Define the states:
    states: {
		// The greeting page is the home page, it shows the uploader
		greeting: {
			on: {
				// When we get a parse event, move to the parsing state
				PARSE: 'parsing'
			}
		},
		// The parsing state is where we're processing the Tailwind file
		parsing: {
			// When we enter the state, update the context to store the "raw" string of CSS uploaded
			entry: [
				assign({
					raw: (_ctx, event) => (event as ParseEvent).raw,
				})
			],
			// Invoke the RuleWalker to parse the CSS
			invoke: {
				src: function (ctx) {
					return Promise.resolve(ruleWalker.parseAndCollect(ctx.raw!));
				},
				// When complete, move to the "display" state, where we show the style guide
				onDone: {
					target: 'display',
					// Store the parsed rules in the context
					actions: [
						assign({
							rules: (_ctx, event) => event.data
						}),
						ctx => {
							localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(ctx.rules));
						}
					]
				},
				// If something happens with the parsing, boot back to the homepage
				// TODO: Add error messaging here
				onError: 'greeting'
			}
		},
		// The display page is where we show the style guide
		display: {
			on: {
				RESET: 'greeting'
			}
		}
    }
});

export const windsock = interpret(windsockMachine).start();
