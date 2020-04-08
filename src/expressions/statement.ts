import { Expression } from './element'
import { LanguageDecorator } from '../language-decorators/language_decorator'

export class Statement extends Expression {
	comment?: string;
	
	expressions: Expression[];
	
	constructor(...expressions: Expression[]) {
		super();
		this.expressions = expressions;
	}

	toSnippet(languageDecorator: LanguageDecorator): string {
		let expressionSnippet =  this.expressions
				.map(x => [
					x.toSnippet(languageDecorator),
					languageDecorator.statementTerminator,
					(x.comment ? languageDecorator.tab + languageDecorator.commentDenoter + x.comment : '')
				].join('')
				)
				.join('\n');
		if (this.comment) {
			expressionSnippet += [
			    languageDecorator.tab,
			    languageDecorator.commentDenoter,
			    this.comment,
			 ].join('');
		}
		return expressionSnippet
	}

	getExpressions(): Expression[] {
		return this.expressions
	}
}
