import { Expression } from './element'
import { ValueExpression } from './value_expression'
import { LanguageDecorator } from '../language-decorators/language_decorator'
import { Argument } from './argument'
import { Receiver } from './receiver'
import { Class } from './class'

export abstract class CallExpression extends Expression implements Receiver {
	chainedMethodCall: MethodCall|null = null;
	receiver: Receiver|null = null;
	args: Argument[] = [];
	isNullable: boolean = false;
	abstract forceSameLine: boolean;
	argsFormatted: boolean = false;
	isStatic = false;

	abstract toReceiverString(languageDecorator: LanguageDecorator): string

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

	addMethodCall(methodName: string, args: Argument[]|any[] = [], isNullable = false, forceSameLine = false): CallExpression {
		if (this.chainedMethodCall != null) {
			this.chainedMethodCall.addMethodCall(methodName, args, isNullable, forceSameLine)
		} else {
			this.chainedMethodCall = new MethodCall(this, methodName, args, isNullable, forceSameLine)
		}
		return this;
	}

	addMethodCallSameLine(methodName: string, args: Argument[]|any[] = [], isNullable = false): CallExpression {
		return this.addMethodCall(methodName, args, isNullable, true);
	}

	setArgsFormatted(argsFormatted: boolean): CallExpression {
		this.argsFormatted = argsFormatted;
		return this;
	}

	protected toChainedSnippet(snippet: string, languageDecorator: LanguageDecorator): string {
		if (!this.chainedMethodCall || this.chainedMethodCall == null) {
			return snippet
		}
		if (this.forceSameLine) {
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

export class Constructor extends CallExpression implements Receiver {
	type: Class;
	forceSameLine: boolean

	constructor(type: string, args: Argument[]|any[] = [], forceSameLine = false) {
		super(new Class(type), args, false)
		this.type = new Class(type);
		this.forceSameLine = forceSameLine;
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