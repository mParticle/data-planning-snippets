import { Expression } from './element'
import { LanguageDecorator } from '../language-decorators/language_decorator';

export interface Argument {
	toArgumentSnippet(language: LanguageDecorator): string
}