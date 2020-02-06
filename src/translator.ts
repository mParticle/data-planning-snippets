import { Dictionary } from './language';

export interface MPTranslator {
    createSessionStartSnippet(exampleJSON: Dictionary): string;

    createSessionEndSnippet(exampleJSON: Dictionary): string;

    createScreenViewSnippet(exampleJSON: Dictionary): string;

    createCustomEventSnippet(exampleJSON: Dictionary): string;

    createCrashReportSnippet(exampleJSON: Dictionary): string;

    createOptOutSnippet(exampleJSON: Dictionary): string;

    createFirstRunSnippet(exampleJSON: Dictionary): string;

    createApplicationStateTransitionSnippet(exampleJSON: Dictionary): string;

    createNetworkPerformanceSnippet(exampleJSON: Dictionary): string;

    createBreadcrumbSnippet(exampleJSON: Dictionary): string;

    createProfileSnippet(exampleJSON: Dictionary): string;

    createCommerceSnippet(exampleJSON: Dictionary): string;

    createUserAttributeChangeSnippet(exampleJSON: Dictionary): string;

    createUserIdentityChangeSnippet(exampleJSON: Dictionary): string;

    createUninstallSnippet(exampleJSON: Dictionary): string;

    createMediaSnippet(exampleJSON: Dictionary): string;

    createUserAttributesSnippet(exampleJSON: Dictionary): string;

    createUserIdentitiesSnippet(exampleJSON: Dictionary): string;

    createProductActionSnippet(exampleJSON: Dictionary): string;

    createProductImpressionSnippet(exampleJSON: Dictionary): string;
}
