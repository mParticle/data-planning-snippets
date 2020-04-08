import { LanguageDecorator } from '../language-decorators/language_decorator'
import { Expression } from './element'
import { Argument } from './argument'

export class ValueExpression extends Expression implements Argument {
	private value: any;
	private isString: boolean;

	constructor(value: any, isString = true) {
		super();
		this.value = value;
		this.isString = isString
		
	}

	toSnippet(languageDecorator: LanguageDecorator): string {
		return this.toArgumentSnippet(languageDecorator);
	}
	
	toArgumentSnippet(language: LanguageDecorator): string {
		if (this.isString && typeof this.value == 'string') {
			return language.stringDenoter + this.value + language.stringDenoter
		} else if (this.value == null){
			return language.nullValue;
		} else {
			return this.value?.toString()
		};
	}
}