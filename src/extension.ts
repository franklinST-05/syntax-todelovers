import * as vscode from "vscode";
import { snippets } from "./snippets";

export function activate(context: vscode.ExtensionContext) {

	const providerCompletions = vscode.languages.registerCompletionItemProvider("todelovers", {

		provideCompletionItems(context: vscode.TextDocument) {
			const completers = snippets.map((cm) => {
				const completion = new vscode.CompletionItem(cm.prefix);
				completion.insertText = new vscode.SnippetString(cm.snippet);
				completion.detail = cm.detail;
				completion.documentation = new vscode.MarkdownString(cm.doc.join("\n"));

				return completion;
			});

			return completers;
		}
	});

	context.subscriptions.push(providerCompletions);
}