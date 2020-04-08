import { Expression } from './expressions'
import { LanguageDecorator } from '../language-decorators/language_decorator'
import { Statement } from './statement'

export class CodeBlock {
	statements: Statement[] = [];

	addStatement(expression?: Expression, index?: number): CodeBlock {
		if (expression) {
			let statement = new Statement(...expression.getExpressions())
			if (index) {
				this.statements.splice(index, 0, statement).join()
			} else {
				this.statements.push(statement)
			}
		}
		return this;
	}

	addStatements(expression: Expression[]): CodeBlock {
		expression.forEach(x => this.addStatement(x))
		return this;
	}

	toSnippet(languageDecorator: LanguageDecorator): string {
		return this.statements
			.map(x => x.toSnippet(languageDecorator))
			.join('\n');
	}
}