import { MPSnippets } from '../../src/mpSnippets';
import { Language, Dictionary } from '../../src/language';
import * as fixtures from '../fixtures/sample_datapoints.json';
import { Results } from './testResults';

describe('MPSnippets ', () => {
    it('testTranslateDataPlanObjC', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.ObjectiveC)

        expect(resultString).toEqual(Results.wholeObjC);
    });

    it('testTranslateDataPlanSwift', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.Swift)

        expect(resultString).toEqual(Results.wholeSwift);
    });

    it('testTranslateDataPlanJava', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.AndroidJava)

        expect(resultString).toEqual(Results.wholeJava);
    });

    it('testTranslateDataPlanKotlin', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.AndroidKotlin)

        expect(resultString).toEqual(Results.wholeKotlin);
    });

    it('testTranslateDataPlanJS', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.JavaScript)

        expect(resultString).toEqual(Results.wholeJS);
    });

    it('testTranslateDataPlanPython', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.Python)

        console.log("Whole Data Plan:\n", resultString)

        expect(resultString).toEqual(Results.wholePython);
    });
});
