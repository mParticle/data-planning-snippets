import { LanguageDecorator } from '../language-decorators/language_decorator'

export abstract class Expression {
	comment?: string

	abstract toSnippet(language: LanguageDecorator): string

	addComment(comment: string): Expression {
		this.comment = comment;
		return this;
	}

	getExpressions(): Expression[] {
		return [this];
	}
}