import { MPTranslator } from '../translator';
import { Dictionary } from '../language';
import { MPAndroid } from './android_translator';

export class MPJava extends MPAndroid implements MPTranslator {
    nullabilityOperator: string = ''    
    getCurrentUser: string = 'getCurrentUser()'
    
    getDeclareVariableSnippet = (type: string, name?: string | undefined) =>
        type + ' ' + (name ? name : this.camelCase(type))

    getCreateInstanceSnippet= (type: String) => "new " + type

    endStatement: string = ';'

    getMapSnippet(dictionary: Dictionary, type: string, variableName: string, wrapKeysInQuotes: boolean = true): string | null {
        if (dictionary && Object.keys(dictionary).length > 0) {
            let snippet: String[] = [];
            snippet.push(type + ' ' + variableName + ' = new HashMap<>();')
            for (const key in dictionary) {
                let keySnippet = key
                if (wrapKeysInQuotes) {
                    keySnippet = '"' + key + '"'
                }
                snippet.push('\n' + variableName + '.put(' + keySnippet + ', ' + this.stringForValue(dictionary[key]) + ');');
            }
            snippet.push('\n');
            return snippet.join('');
        }
        return null;
    }

}