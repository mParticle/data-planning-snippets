import { Expression } from './expressions'
import { LanguageDecorator } from '../language-decorators/language_decorator'

export class Statement {
	comment?: string;
	
	expressions: Expression[];
	
	constructor(...expressions: Expression[]) {
		this.expressions = expressions;
	}

	addComment(comment: string): Statement {
		this.comment = comment;
		return this;
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
