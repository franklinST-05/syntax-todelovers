import * as vscode from "vscode";
let terminal: vscode.Terminal | undefined;

vscode.commands.registerCommand("run-project", async () => {
	const editor = vscode.window.activeTextEditor;
	const workspaceConfig = vscode.workspace.getConfiguration("todelovers")

	if (editor) {
		const terminalName = "run:todelovers";
		const { fileName } = editor.document;

		if (!terminal) {
			terminal = vscode.window.createTerminal(terminalName);
		}

		terminal.show()

		const defaultCommand = `todelovers build --target ${fileName} && todelovers run --bin ./todbin`;
		const workspaceCommand = workspaceConfig.get<string>("runCommand")
		terminal.sendText(workspaceCommand ?? defaultCommand, true);

	}
});



vscode.languages.registerCodeLensProvider("todelovers", {
	provideCodeLenses(document) {
		const codeLenses = [];
		const text = document.getText();
		const wordRegex = /\b(tode-broadcast)\b/g;
		let match;

		while ((match = wordRegex.exec(text))) {
			const range = new vscode.Range(
				document.positionAt(match.index),
				document.positionAt(match.index + match[0].length)
			);

			const codeLens = new vscode.CodeLens(range);
			codeLens.command = {
				title: "$(run) Run",
				command: "run-project",
				arguments: [document.uri],
				tooltip: "Run todelover file"
			};

			codeLenses.push(codeLens);
		}

		return codeLenses;
	}
});
