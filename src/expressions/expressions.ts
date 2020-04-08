import { LanguageDecorator } from '../language-decorators/language_decorator'
import { Argument } from './argument'
import { Receiver } from './receiver'
import { Utils } from '../utils';

export abstract class Expression implements Receiver {
	comment?: string
	chainedMethodCall: MethodCall|null = null;
	abstract forceSameLine: boolean
	abstract isNullable: boolean
	abstract isStatic: boolean

	abstract toSnippet(language: LanguageDecorator): string

	addComment(comment: string): Expression {
		this.comment = comment;
		return this;
	}

	getExpressions(): Expression[] {
		return [this];
	}

	addMethodCall(methodName: string, args: Argument[]|any[] = [], isNullable = false, forceSameLine = false): Expression {
		if (this.chainedMethodCall != null) {
			this.chainedMethodCall.addMethodCall(methodName, args, isNullable, forceSameLine)
		} else {
			this.chainedMethodCall = new MethodCall(this, methodName, args, isNullable, forceSameLine)
		}
		return this;
	}

	addMethodCallSameLine(methodName: string, args: Argument[]|any[] = [], isNullable = false): Expression {
		return this.addMethodCall(methodName, args, isNullable, true);
	}

	abstract toReceiverString(langaugeDecorator: LanguageDecorator): string
}

export abstract class CallExpression extends Expression {
	receiver: Receiver|null = null;
	args: Argument[] = [];
	isNullable: boolean = false;
	abstract forceSameLine: boolean;
	argsFormatted: boolean = false;
	isStatic = false;

	constructor(receiver: Receiver|string|null, args: Argument[]|any[] = [], isNullable = false) {
		super();
		if (typeof receiver == 'string') {
			this.receiver = new Class(receiver);
		} else if (receiver) {
			this.receiver = receiver as Receiver;
		}
		args.forEach(i => {
			if (typeof i == 'object' && i != null && 'toArgumentSnippet' in i) {
				this.args.push(i)
			} else {
				this.args.push(new ValueExpression(i));
			}
		});
		let nullableReceiver = this.receiver ? this.receiver.isNullable : false;
		this.isNullable = isNullable || nullableReceiver;
	}

	setArgsFormatted(argsFormatted: boolean): CallExpression {
		this.argsFormatted = argsFormatted;
		return this;
	}

	protected toChainedSnippet(snippet: string, languageDecorator: LanguageDecorator): string {
		if (!this.chainedMethodCall || this.chainedMethodCall == null) {
			return snippet
		}
		if (this.chainedMethodCall.forceSameLine) {
			snippet += languageDecorator.methodCallSnippet('', this.chainedMethodCall, this.isNullable, this.receiver?.isStatic)
			return this.chainedMethodCall.toChainedSnippet(snippet, languageDecorator);
		}
		if (languageDecorator.canChainMethodCalls) {
			snippet += '\n' + languageDecorator.tab + languageDecorator.methodCallSnippet('', this.chainedMethodCall, this.isNullable, this.receiver?.isStatic);
		} else {
			let receiverString = '';
			if (this.receiver != null) {
				receiverString = this.receiver.toReceiverString(languageDecorator);
			}
			snippet += '\n' + languageDecorator.methodCallSnippet(receiverString, this.chainedMethodCall, this.isNullable, this.receiver?.isStatic)
		}
		return this.chainedMethodCall.toChainedSnippet(snippet, languageDecorator);
	}

	abstract toSnippet(languageDecorator: LanguageDecorator): string
}

export class MethodCall extends CallExpression implements Receiver, Argument {
	methodName: String = '';
	forceSameLine: boolean;
	binaryOperation: boolean = false;

	constructor(receiver: Receiver|string|null, methodName: string, args: any[]|Argument[] = [], nullable: boolean = false, forceSameLine: boolean = false) {
		super(receiver, args, nullable);
		this.methodName = methodName;
		this.forceSameLine = forceSameLine;
	}
	toArgumentSnippet(langaugeDecorator: LanguageDecorator): string {
		return this.toSnippet(langaugeDecorator)
	}

	toSnippet(languageDecorator: LanguageDecorator) {
		let receiverString = null;
		let nullableReceiver = false
		if (this.receiver != null) {
			receiverString = this.receiver.toReceiverString(languageDecorator);
			nullableReceiver = this.receiver.isNullable
		}
		return this.toChainedSnippet(languageDecorator.methodCallSnippet(receiverString, this, nullableReceiver, this.receiver?.isStatic), languageDecorator);
	}

	toReceiverString(languageDecorator: LanguageDecorator): string {
		return this.toSnippet(languageDecorator);
	}

	//this might just be a kotlin thing
	setBinaryOperationIfPossible(binaryOperation: boolean): MethodCall {
		this.binaryOperation = binaryOperation;
		return this;
	}
}

export class Constructor extends CallExpression implements Receiver, Argument {
	type: Class;
	forceSameLine: boolean

	constructor(type: string, args: Argument[]|any[] = [], forceSameLine = false) {
		super(new Class(type), args, false)
		this.type = new Class(type);
		this.forceSameLine = forceSameLine;
	}
	toArgumentSnippet(language: LanguageDecorator): string {
		return this.toSnippet(language)
	}

	setGenerics(...generics: string[]): Constructor {
		this.type.setGenerics(...generics)
		return this;
	}

	toSnippet(languageDecorator: LanguageDecorator) {
		return this.toChainedSnippet(languageDecorator.constructorSnippet(this.type, this.args, this.argsFormatted), languageDecorator);
	}

	toReceiverString(languageDecorator: LanguageDecorator) {
		return this.toSnippet(languageDecorator);
	}
}

export class ValueExpression extends Expression implements Argument {
	private value: any;
	private isString: boolean
	isStatic = false;
	forceSameLine = false;
	isNullable = this.value == null

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

	toReceiverString(langaugeDecorator: LanguageDecorator): string {
		return this.toArgumentSnippet(langaugeDecorator)
	}
}

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

	//adds a no-arg constructor invokation for Class this.type.className
	addDefaultInitializer(constructorFunction?: (constructor: Constructor) => void): Variable {
		let constructor = new Constructor(this.type.className)
		constructorFunction?.(constructor)
		this.initialization = constructor
		return this;
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
		let initializationSnippet = languageDecorator.variableDeclarationSnippet(this.type, this.variableName, this.initialization == null)
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