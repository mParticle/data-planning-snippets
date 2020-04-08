import { MPTranslator } from '../translator';
import { Dictionary } from '../language';
import { Utils } from '../utils';
import { ValueExpression, MethodCall, CallExpression, Class, Variable } from '../expressions/expressions';
import { AbstractLanguageDecorator } from './language_decorator';

export class KotlinDecorator extends AbstractLanguageDecorator {
    constructorKeyword = ''
    statementTerminator = ''
    nullabilityOperator = '?'
    private utils = new Utils()

    variableDeclarationSnippet(type: Class, variableName: string, forceExplicitType = false): string {
        return 'val ' + variableName + (forceExplicitType? ': ' + type.className : '');
    }

    getCreateInstanceSnippet = (type: string) => type

    dictionaryInitializer(variable: Variable, dictionary: Dictionary, wrapKeysInQuotes: boolean = true): Variable {
        let args: CallExpression[] = []
        if (dictionary && Object.keys(dictionary).length > 0) {
            for (const key in dictionary) {
                let keyExpression = new ValueExpression(key, wrapKeysInQuotes);
                let valExpression = new ValueExpression(dictionary[key]);
                args.push(new MethodCall(null, 'to', [keyExpression, valExpression])
                    .setBinaryOperationIfPossible(true));
            }     
        }
        let constructor = new MethodCall(null, "mapOf", args)
            .setArgsFormatted(true);
        return variable.initializer(constructor);
    }

    methodCallSnippet(receiverString: string|null, methodCall: MethodCall, isNullable: boolean = false, isStatic: boolean = false): string {
        let nullabilityOperator = isNullable ? this.nullabilityOperator : ''
        if (!isStatic && methodCall.methodName.startsWith("get") && methodCall.args.length == 0) {
            let methodName = this.utils.camelCase(methodCall.methodName.substring(3))
            return receiverString + nullabilityOperator + '.' + methodName
        }
        if(!isStatic && methodCall.methodName.startsWith("set") && methodCall.args.length == 1) {
            let methodName = this.utils.camelCase(methodCall.methodName.substring(3))
            methodCall.methodName = methodName
            return receiverString + nullabilityOperator + '.' + methodName + ' = ' + methodCall.args[0].toArgumentSnippet(this) + this.statementTerminator
        }
        if (methodCall.binaryOperation) {
            return methodCall.args[0].toArgumentSnippet(this) + ' ' + methodCall.methodName + ' ' + methodCall.args[1].toArgumentSnippet(this);
        } else {
            return super.methodCallSnippet(receiverString, methodCall, isNullable, isStatic)
        }
    }
}