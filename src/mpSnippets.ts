import { MPTranslator } from './translator';
import jsf from 'json-schema-faker';
import { DataPlanPoint } from '@mparticle/data-planning-models';
import { MPObjectiveC } from './objective_c_translator';
import { MPSwift } from './swift_translator';
import { Language, Dictionary, DataPlanMatchType } from './language';

export class MPSnippets {
    /**
     * Create a code snippet
     * @param dataPlanPoint An object representing an [[AdBreak]] (collection of ads)
     * @param language An object representing an [[AdBreak]] (collection of ads)
     * @category Advertising
     */
    static createSnippet(
        dataPlanPoint: DataPlanPoint,
        language: Language
    ): String {
        const validatorJSON = dataPlanPoint?.validator?.definition;
        jsf.option('alwaysFakeOptionals', true);
        const exampleJSON = jsf.generate(validatorJSON) as Dictionary;
        if (language == Language.JSON) {
            return exampleJSON.String;
        }
        let translator = this.translatorForLanguage(language);
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
            default: {
                return new MPSwift();
            }
        }
    }
}
