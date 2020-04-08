import { LanguageDecorator } from '../language-decorators/language_decorator'

export interface Receiver {
	forceSameLine: boolean
	isNullable: boolean
	isStatic: boolean
	toReceiverString(languageDecorator: LanguageDecorator): string;
}