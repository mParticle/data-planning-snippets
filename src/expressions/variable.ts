import { Utils } from '../utils'
import { LanguageDecorator } from '../language-decorators/language_decorator'
import { CallExpression, MethodCall } from './call_expression'
import { Class } from './class'
import { Argument } from './argument'
import { Receiver } from './receiver'
import { Expression } from './element'
import { ValueExpression } from './value_expression'

export class Variable extends Expression implements Receiver, Argument {
	type: Class;
	generics: string[] = []
	variableName: string;
	initialization?: Expression;
	methodCalls: MethodCall[] = []
	forceSameLine: boolean
	forceExplicitType: boolean = false
	isNullable: boolean = false
	isStatic = false;

	private explicitlySetNullability = false;

	private utils = new Utils();

	constructor(type: string|Class, variableName?: string, forceSameLine = true, isNullable?: boolean) {
		super();
		if (typeof type == 'string') {
			this.type = new Class(type);
		} else {
			this.type = type as Class
		}
		this.variableName = variableName != null ? variableName : this.utils.camelCase(this.type.className);
		this.forceSameLine = forceSameLine
		if (isNullable) {
			// this.explicitlySetNullability = true;
			this.isNullable = isNullable
		}
	}

	setGenerics(...generics: string[]): Variable {
		this.type.setGenerics(...generics);
		return this;
	}

	setForceExplicitType(forceExplicitType: boolean): Variable {
		this.forceExplicitType = forceExplicitType;
		return this;
	}
	
	public initializer(initializer?: CallExpression|any): Variable {
		if (!(initializer instanceof CallExpression)) {
			this.initialization = new ValueExpression(this.initialization)
		} else {
			this.initialization = initializer;
		}
		if (!this.explicitlySetNullability) {
			this.isNullable = initializer.isNullable
		}
		return this
	}

	public addMethodCall(methodName: string, args: Argument[]|any[] = [], nullable = false): Variable {
		this.methodCalls.push(new MethodCall(this, methodName, args, nullable));
		return this
	} 

	public createMethodCall(methodName: string, args: Argument[]|any[] = [], nullable = false): MethodCall {
		return new MethodCall(this, methodName, args, nullable);
	}

	public toSnippet(languageDecorator: LanguageDecorator): string {
		let initializationSnippet = languageDecorator.variableDeclarationSnippet(this.type, this.variableName)
		if (this.initialization != null) {
			initializationSnippet += ' ' + languageDecorator.assignmentOperator + ' ' + this.initialization.toSnippet(languageDecorator);
		}
		return initializationSnippet
	}

	toReceiverString(languageDecorator: LanguageDecorator): string {
		return this.variableName;
	}

	toArgumentSnippet(languageDecorator: LanguageDecorator): string {
		return this.variableName;
	}

	getExpressions(): Expression[] {
		return [this as Expression].concat(this.methodCalls as Expression[])
	}
}