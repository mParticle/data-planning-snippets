import { MPTranslator } from '../translator';
import { Dictionary } from '../language';
import { MPAndroid } from './android_translator';

export class MPKotlin extends MPAndroid implements MPTranslator {

    getMapSnippet(dictionary: Dictionary, type: string, variableName: string, wrapKeysInQuotes: boolean = true): string | null {
        if (dictionary && Object.keys(dictionary).length > 0) {
            let snippet: String[] = [];
            if (variableName) {
                snippet.push('val ' + variableName + ' = mapOf(')
            }
            for (const key in dictionary) {
                let keySnippet = key
                if (wrapKeysInQuotes) {
                    keySnippet = '"' + key + '"'
                }
                snippet.push('\n' + MPKotlin.tab + keySnippet + ' to ' + this.stringForValue(dictionary[key]));
                snippet.push(',')
            }
            snippet.pop();
            snippet.push('\n)');
            snippet.push('\n')
            return snippet.join('');
        }
        return null;
    }

    getDeclareVariableSnippet = (type: string, name: string) => 'val ' + (name ? name : this.camelCase(type));
    getCreateInstanceSnippet = (type: string) => type
    nullabilityOperator = '?'
    endStatement = ''
    getCurrentUser = 'currentUser'
}