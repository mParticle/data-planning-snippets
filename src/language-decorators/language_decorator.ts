import { Class } from '../expressions/class'
import { Argument } from '../expressions/argument'
import { MethodCall} from '../expressions/call_expression'
import { Variable } from '../expressions/variable';
import { Dictionary } from '..';

export interface LanguageDecorator {
	// This is a big fragile, it will only occure directly before the "." on nullable method calls.
	// if your language uses nullablility, it's probably "?", if no nullability, and empty string
	nullabilityOperator: string
	// I think all languages will use "="
	assignmentOperator: string
	// usually ";", some languages just an empty string
	statementTerminator: string
	// if set to false, each method call chained to a CallExpression will be broken out into seperate lines, each MethodCall
	// occuring directly on the Receiver itself
	canChainMethodCalls: boolean
	// most languages will be 4 spaces, some might be 2?
	tab: string
	// usually either "new" or an empty string
	constructorKeyword: string
	// probably just "
	stringDenoter: string
	// This value will determin whether you "getGenericClassDeclaration()"" method is called
	// Generics do need to be implemented in "variableDeclarationSnippet()" method even if this is 'true'
	usesGenerics: boolean
	// probably '//' pr '#'
	commentDenoter: string
	// probably 'null' or 'nil' or 'undefined'
	nullValue: string

	//just the actual declaration, no assignemnt. i.e `MPEvent event`
	variableDeclarationSnippet(type: Class, name: string): string

	//just constructor statment, no terminator. i.e new `MPEvent("foo", "bar")`
	constructorSnippet(type: Class, args: Argument[], argsFormatted: boolean): string

	//if your language uses generics, you'll probably have to override this implementation. This is like the Java 6 way of doing it, and not widely applicable
	getGenericClassDeclaration(className: string, ...generics: string[]): string

	//how arguments are layed out in relation to each other. For most languauges this means what goes between the parenthesis 
	//in the future, we probably want to support named parameters, but don't at this time
	argumentStringSnippet(args: Argument[], formatted?: boolean): string

	//should utilize the argumentStringSnippet to process methodCall.args
	methodCallSnippet(receiverString: string|null, methodCall: MethodCall, isNullable?: boolean, isStatic?: boolean): string

	staticCallSnippet(receiver: Class, methodCall: MethodCall): string

	//should implement a dictionary constructor, add the dictionary values, and call variable.initializer(constructor);
	//this method is the only one that directly works with the AST API in Language Decorator, since Dictionary/Map create is very
	//specific to the Languages own APIs. For example, Java uses "HashMap", whereas Kotlin uses "mapOf()". Language specific APIs
	//is something we can't abstract
	dictionaryInitializer(variable: Variable, dictionary: Dictionary, wrapKeysInQuotes?: boolean): Variable
}

//Default Langauge Decorator implementation using the most common values. Best bet is to extend this class and change only what is 
//needed
export abstract class AbstractLanguageDecorator implements LanguageDecorator {
	abstract nullabilityOperator = '';
	assignmentOperator = '='
	statementTerminator = ';'
	canChainMethodCalls = true;
	tab = '    '
	abstract constructorKeyword = 'new'
	stringDenoter = '"'
	commentDenoter = '//'
	usesGenerics = false;
	nullValue = 'null'
	
	abstract dictionaryInitializer(variable: Variable, dictionary: Dictionary, wrapKeysInQuotes?: boolean): Variable

	abstract variableDeclarationSnippet(type: Class, name: string): string

	constructorSnippet(type: Class, args: Argument[], argsFormatted: boolean): string {
		let constructorKeyword = this.constructorKeyword ? this.constructorKeyword + ' ' : ''
		return constructorKeyword + type.className + '(' + this.argumentStringSnippet(args, argsFormatted) + ')'
	}

	getGenericClassDeclaration(className: string, ...generics: string[]): string {
		return className + '<' + generics.join(', ') + '>'
	}

	argumentStringSnippet(args: Argument[], formatted: boolean): string {
		let argsSnippet = formatted ? '\n' + this.tab : ''
		argsSnippet += args
            	.map(x => x.toArgumentSnippet(this))
				.join(',' + (formatted ? '\n' + this.tab:' '));
		argsSnippet += formatted ? '\n' : ''
		return argsSnippet
	}

	methodCallSnippet(receiverString: string|null, methodCall: MethodCall, isNullable = false, isStatic: boolean): string {
		let nullableString = isNullable && receiverString != null ? this.nullabilityOperator : ''
		let receiverSnippet = receiverString != null ? receiverString + nullableString + '.' : ''
		return receiverSnippet + methodCall.methodName + '(' + this.argumentStringSnippet(methodCall.args, methodCall.argsFormatted) + ')'
	}

	staticCallSnippet(receiver: Class, methodCall: MethodCall): string {
		return receiver.className + '.' + methodCall.methodName + '(' + this.argumentStringSnippet(methodCall.args, methodCall.argsFormatted) + ')'
	}

}