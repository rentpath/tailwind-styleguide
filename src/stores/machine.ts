import { RuleWalker } from '../css/RuleWalker';

import { BackgroundColorCollector } from '../sections/backgroundColor/Collector';
import { TextColorCollector } from "../sections/textColor/Collector";

import { Machine, interpret, assign } from 'xstate';

const ruleWalker = new RuleWalker([
	new BackgroundColorCollector(),
	new TextColorCollector()
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

const windsockMachine = Machine<WindsockContext, Event>({
    id: 'windsock',
    initial: 'greeting',
    context: {},
    states: {
		greeting: {
			on: {
				PARSE: 'parsing'
			}
		},
		parsing: {
			entry: [
				assign({
					raw: (_ctx, event) => (event as ParseEvent).raw,
				})
			],
			invoke: {
				src: function (ctx) {
					return Promise.resolve(ruleWalker.parseAndCollect(ctx.raw!));
				},
				onDone: {
					target: 'display',
					actions: assign({
						rules: (_ctx, event) => event.data
					})
				},
				onError: 'greeting'
			}
		},
		display: {
			on: {
				RESET: 'greeting'
			}
		}
    }
});

export const windsock = interpret(windsockMachine).start();
