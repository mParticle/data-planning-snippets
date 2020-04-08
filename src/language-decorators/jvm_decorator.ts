import { Dictionary } from '../language';
import { Utils } from '../utils';
import { AbstractLanguageDecorator } from './language_decorator'
import { Constructor } from '../expressions/call_expression'
import { Variable } from '../expressions/variable'
import { ValueExpression } from '../expressions/value_expression'

export abstract class JvmLangDecorator extends AbstractLanguageDecorator {
    utils = new Utils();
    /**
     * returns a snippet declaring a variable for the given name and type
     * @param type the type of the variable
     * @param name (optional) the name of the variable. if not provided, will be lowercase of "type"
     */

     /**
     * returns a Stringified Kotlin example of creating a Map with the given Dictionary,
     * or `null` if no attributes are provided
     * 
     * @param dictionary attributes in JSON form
     */
    abstract dictionaryInitializer(variable: Variable, dictionary: Dictionary, wrapKeysInQuotes?: boolean): Variable

}