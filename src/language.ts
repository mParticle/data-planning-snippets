export enum Language {
    JSON = 1,
    Swift = 2,
    ObjectiveC = 3,
};

export enum DataPlanMatchType {
    Unknown = "unknown",
    SessionStart = "session_start",
    SessionEnd = "session_end",
    ScreenView = "screen_view",
    CustomEvent = "custom_event",
    CrashReport = "crash_report",
    OptOut = "opt_out",
    FirstRun = "first_run",
    ApplicationStateTransition = "application_state_transition",
    NetworkPerformance = "network_performance",
    Breadcrumb = "breadcrumb",
    Profile = "profile",
    Commerce = "commerce",
    UserAttributeChange = "user_attribute_change",
    UserIdentityChange = "user_identity_chagne",
    Uninstall = "uninstall",
    Media = "media",
    UserAttributes = "user_attributes",
    UserIdentities = "user_identities",
    ProductAction = "product_action",
    PromotionAction = "promotion_action",
    ProductImpression = "product_impression"
}

export type Dictionary = {
    // tslint:disable-next-line: no-any
    [key: string]: any;
};