import { MPTranslator } from '../translator';
import { Dictionary } from '../language';
import { JvmLangDecorator} from './jvm_decorator'
import { Utils } from '../utils';
import { Class } from '../expressions/class'
import { Variable } from '../expressions/variable';
import { Constructor } from '../expressions/call_expression';
import { ValueExpression } from '../expressions/value_expression';
import { Argument } from '../expressions/argument';

export class JavaDecorator extends JvmLangDecorator {
    nullabilityOperator: string = '' 
    constructorKeyword: string = 'new'   
    

    variableDeclarationSnippet(type: Class, variableName: string) : string {
        let className = type.className;
        if (type.generics.length > 0) {
            className += '<'
            className += type.generics.join(', ')
            className += '>'
        }
        return className + ' ' + variableName;
    }

    constructorSnippet(type: Class, args: Argument[], argsFormatted: boolean): string {
        let constructorKeyword = this.constructorKeyword ? this.constructorKeyword + ' ' : ''
        let generics = type.generics.length > 0 ? '<>' : ''
		return constructorKeyword + type.className + generics + '(' + this.argumentStringSnippet(args, argsFormatted) + ')'
	}

    endStatement = ';'

    dictionaryInitializer(variable: Variable, dictionary: Dictionary, wrapKeysInQuotes = true): Variable {
        let constructor = new Constructor("HashMap")
                    .setGenerics("String", "String");
        if (dictionary && Object.keys(dictionary).length > 0) {
            for (const key in dictionary) {
                let keyExpression = new ValueExpression(key, wrapKeysInQuotes);
                let valExpression = new ValueExpression(dictionary[key]);
                variable.addMethodCall('put', [keyExpression, valExpression])
            }     
        }
        return variable.initializer(constructor);
    }
}
