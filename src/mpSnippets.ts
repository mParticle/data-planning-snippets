// tslint:disable: max-line-length
import { MPTranslator } from './translator';
import jsf from 'json-schema-faker';
import { DataPlanMatchType, DataPlanValidatorType } from '@mparticle/data-planning-models';
import { MPObjectiveC } from './objective_c_translator';
import { MPSwift } from './swift_translator';
import { MPJavaScript } from './javascript_translator';
import { MPAndroid } from './translators/android_translator'
import { KotlinDecorator } from './language-decorators/kotlin_decorator';
import { JavaDecorator } from './language-decorators/java_decorator';
import { Language, Dictionary } from './language';
import { MPJavaEvents } from './translators/java_events_translator';
import { MPPython } from './python_translator';

export class MPSnippets {
    static translateDataPlanJSON(
        dataPlanJSON: Dictionary,
        language: Language
    ): string {
        var allExamples = `// The following is example code for every event in your Data Plan

`;
        const dataPlanPointArray = dataPlanJSON.version_document.data_points as [Dictionary];

        allExamples = dataPlanPointArray.map((point: Dictionary, index: number) => {
            if (point.match?.criteria && point.validator) {
                var description: string = "";
                if (point.description) {
                    description = point.description;
                }
                const resultString = MPSnippets.createSnippet(point, language);

                return MPSnippets.getDataPlanPointString(description, resultString, index);
            }

            return '';
        }).join(`\
`);

        return allExamples;
    }

    private static getDataPlanPointString(description: string, resultString: string, index: number): string {
        return `\
// Data Plan Point ${index + 1}
// ${description}
${resultString}


`;
    }

    /**
     * Create a code snippet
     * @param dataPlanPoint An object representing an [[AdBreak]] (collection of ads)
     * @param language An object representing an [[AdBreak]] (collection of ads)
     */
    static createSnippet(
        dataPlanPoint: Dictionary,
        language: Language
    ): string {
        const validatorJSON = dataPlanPoint?.validator?.definition;

        for (var key in dataPlanPoint?.match?.criteria) {
            validatorJSON.properties.data.properties[key] = dataPlanPoint?.match?.criteria[key];
        }

        jsf.option('alwaysFakeOptionals', true);
        const exampleJSON = jsf.generate(validatorJSON) as Dictionary;

        if (language === Language.JSON) {
            return JSON.stringify(exampleJSON);
        }
        const translator = this.translatorForLanguage(language);
        switch (dataPlanPoint?.match?.type) {
            case DataPlanMatchType.Unknown: {
                return translator.createCustomEventSnippet(exampleJSON);
            }
            case DataPlanMatchType.SessionStart: {
                return translator.createSessionStartSnippet(exampleJSON);
            }
            case DataPlanMatchType.SessionEnd: {
                return translator.createSessionEndSnippet(exampleJSON);
            }
            case DataPlanMatchType.ScreenView: {
                return translator.createScreenViewSnippet(exampleJSON);
            }
            case DataPlanMatchType.CustomEvent: {
                return translator.createCustomEventSnippet(exampleJSON);
            }
            case DataPlanMatchType.CrashReport: {
                return translator.createCrashReportSnippet(exampleJSON);
            }
            case DataPlanMatchType.OptOut: {
                return translator.createOptOutSnippet(exampleJSON);
            }
            case DataPlanMatchType.FirstRun: {
                return translator.createFirstRunSnippet(exampleJSON);
            }
            case DataPlanMatchType.ApplicationStateTransition: {
                return translator.createApplicationStateTransitionSnippet(
                    exampleJSON
                );
            }
            case DataPlanMatchType.NetworkPerformance: {
                return translator.createNetworkPerformanceSnippet(exampleJSON);
            }
            case DataPlanMatchType.Breadcrumb: {
                return translator.createBreadcrumbSnippet(exampleJSON);
            }
            case DataPlanMatchType.Profile: {
                return translator.createProfileSnippet(exampleJSON);
            }
            case DataPlanMatchType.Commerce: {
                return translator.createCommerceSnippet(exampleJSON);
            }
            case DataPlanMatchType.UserAttributeChange: {
                return translator.createUserAttributeChangeSnippet(exampleJSON);
            }
            case DataPlanMatchType.UserIdentityChange: {
                return translator.createUserIdentityChangeSnippet(exampleJSON);
            }
            case DataPlanMatchType.Uninstall: {
                return translator.createUninstallSnippet(exampleJSON);
            }
            case DataPlanMatchType.Media: {
                return translator.createMediaSnippet(exampleJSON);
            }
            case DataPlanMatchType.UserAttributes: {
                return translator.createUserAttributesSnippet(exampleJSON);
            }
            case DataPlanMatchType.UserIdentities: {
                return translator.createUserIdentitiesSnippet(exampleJSON);
            }
            case DataPlanMatchType.ProductAction: {
                return translator.createProductActionSnippet(exampleJSON);
            }
            case DataPlanMatchType.ProductImpression: {
                return translator.createProductImpressionSnippet(exampleJSON);
            }
            case DataPlanMatchType.PromotionAction: {
                return translator.createPromotionActionSnippet(exampleJSON);
            }
            default: {
                return translator.createCustomEventSnippet(exampleJSON);
            }
        }
    }
    private static translatorForLanguage(language: Language): MPTranslator {
        switch (language) {
            case Language.Swift: {
                return new MPSwift();
            }
            case Language.ObjectiveC: {
                return new MPObjectiveC();
            }
            case Language.AndroidKotlin: {
                return new MPAndroid(new KotlinDecorator());
            }
            case Language.AndroidJava: {
                return new MPAndroid(new JavaDecorator());
            }
            case Language.JavaScript: {
                return new MPJavaScript();
            }
            case Language.JavaEventsJava: {
                return new MPJavaEvents(new JavaDecorator());
            }
            case Language.JavaEventsKotlin: {
                return new MPJavaEvents(new KotlinDecorator());
            }
            case Language.Python: {
                return new MPPython()
            }
            default: {
                return new MPSwift();
            }
        }
    }
}
