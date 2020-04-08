import { Expression } from './element'
import { LanguageDecorator } from '../language-decorators/language_decorator'
import { Statement } from './statement'

export class CodeBlock {
	statements: Statement[] = [];

	addStatement(expression?: Expression): CodeBlock {
		if (expression) {
			this.statements.push(new Statement(...expression.getExpressions()))
		}
		return this;
	}

	toSnippet(languageDecorator: LanguageDecorator): string {
		return this.statements
			.map(x => x.toSnippet(languageDecorator))
			.join('\n');
	}
}