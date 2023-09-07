import { Snippet } from "../interfaces/snippet";

export const snippets: Snippet[] = [
	{
		prefix: "tode-broadcast",
		snippet: "(tode-broadcast\n\t${0}\n\)",
		detail: "Block:tode-broadcast",
		doc: [
			"Inserts a tode-broadcast block statement",
			"```todelovers\n(tode-broadcast\n\t...\n)\n```"
		],
	},
	{
		prefix: "main-frank",
		snippet: "(main-frank\n\t${0}\n\)",
		detail: "Block:main-frank",
		doc: [
			"Inserts a main block statement",
			"```todelovers\n(main-frank\n\t...\n)\n```"
		],
	},
	{
		prefix: "def-todelovers",
		snippet: "(def-todelovers\n\t${0}\n\)",
		detail: "Block:def-todelovers",
		doc: [
			"Inserts a def-todelovers block",
			"```todelovers\n(def-todelovers\n\t...\n)\n```"
		],
	},
	{
		prefix: "type",
		snippet: "(type[${1}]\n\t${0}\n\)",
		detail: "Block:type",
		doc: [
			"Inserts a type block",
			"```todelovers\n(type[example]\n\t(public\n\t\tstring::hello\n\t)\n)\n```"
		],
	},
	{
		prefix: "functions",
		snippet: "(functions\n\t${0}\n\)",
		detail: "Block:functions",
		doc: [
			"Inserts a function block",
			"```todelovers\n(functions\n\t...\n)\n```"
		],
	},
	{
		prefix: "def-func",
		snippet: "(def-func ${1}()\n\t${0}\n\)",
		detail: "Block:def-func",
		doc: [
			"Inserts a function block",
			"```todelovers\n(def-func hello()\n\t...\n)\n```"
		],
	},
	{
		prefix: "public",
		snippet: "(public\n\t${0}\n\)",
		detail: "Block:public",
		doc: [
			"Inserts a public block",
			"```todelovers\n(public\n\t...\n)\n```"
		],
	},
	{
		prefix: "private",
		snippet: "(private\n\t${0}\n\)",
		detail: "Block:private",
		doc: [
			"Inserts a private block",
			"```todelovers\n(private\n\t...\n)\n```"
		],
	},
	{
		prefix: "nando-talk",
		snippet: "(nando-talk ${0})",
		detail: "Block:nando-talk",
		doc: [
			"Inserts a nando-talk block",
			"```todelovers\n(nando-talk \"hello\")\n```"
		],
	},
	{
		prefix: "add",
		snippet: "(add ${0})",
		detail: "Block:add",
		doc: [
			"Inserts a add block",
			"```todelovers\n(add 10 2)\n```"
		],
	}
];