import { Dictionary } from './language';

export interface MPTranslator {

    createSessionStartSnippet(exampleJSON: Dictionary): String

    createSessionEndSnippet(exampleJSON: Dictionary): String

    createScreenViewSnippet(exampleJSON: Dictionary): String

    createCustomEventSnippet(exampleJSON: Dictionary): String

    createCrashReportSnippet(exampleJSON: Dictionary): String

    createOptOutSnippet(exampleJSON: Dictionary): String

    createFirstRunSnippet(exampleJSON: Dictionary): String

    createApplicationStateTransitionSnippet(exampleJSON: Dictionary): String

    createNetworkPerformanceSnippet(exampleJSON: Dictionary): String

    createBreadcrumbSnippet(exampleJSON: Dictionary): String

    createProfileSnippet(exampleJSON: Dictionary): String

    createCommerceSnippet(exampleJSON: Dictionary): String

    createUserAttributeChangeSnippet(exampleJSON: Dictionary): String

    createUserIdentityChangeSnippet(exampleJSON: Dictionary): String

    createUninstallSnippet(exampleJSON: Dictionary): String

    createMediaSnippet(exampleJSON: Dictionary): String

    createUserAttributesSnippet(exampleJSON: Dictionary): String

    createUserIdentitiesSnippet(exampleJSON: Dictionary): String

    createProductActionSnippet(exampleJSON: Dictionary): String

    createProductImpressionSnippet(exampleJSON: Dictionary): String
}