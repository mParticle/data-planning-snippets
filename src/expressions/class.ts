import { Expression } from './element'
import { Receiver } from './receiver'
import { LanguageDecorator } from '../language-decorators/language_decorator'

export class Class extends Expression implements Receiver {
	className: string;
	generics: string[] = [];
	forceSameLine = true;
	isNullable = false
	isStatic = true

	constructor(className: string) {
		super();
		this.className = className;
	}

	setGenerics(...generics: string[]): Class {
		this.generics = generics
		return this;
	}

	toSnippet(languageDecorator: LanguageDecorator): string {
		if (languageDecorator.usesGenerics) {
			return languageDecorator.getGenericClassDeclaration(this.className, ...this.generics);
		} else {
			return this.className;
		}
	}

	toReceiverString(languageDecorator: LanguageDecorator) {
		return this.toSnippet(languageDecorator);
	}
}