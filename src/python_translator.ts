// tslint:disable: max-line-length
import { MPTranslator } from './translator';
import { Dictionary } from './language';

export class MPPython implements MPTranslator {
    createSessionStartSnippet = (exampleJSON: Dictionary) =>
        `\
batch = mparticle.Batch()
batch.environment = 'development'

session_start = mparticle.SessionStartEvent()
session_start.session_id = 12345678
session_start.timestamp_unixtime_ms = example_timestamp

batch.events = [session_start]

try: 
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print "Exception while calling mParticle: %s\n" % e
    `;

    createSessionEndSnippet = (exampleJSON: Dictionary) =>
        `\
batch = mparticle.Batch()
batch.environment = 'development'

session_end = mparticle.SessionEndEvent()
session_end.session_id = session_start.session_id # it's mandatory that these match
session_end.session_duration_ms = example_duration
session_end.timestamp_unixtime_ms = example_timestamp + example_duration
    
batch.events = [session_end]

try: 
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print "Exception while calling mParticle: %s\n" % e
    `;

    createScreenViewSnippet({ data }: Dictionary): string {
        let returnString = `\
from mparticle.models.screen_view_event import ScreenViewEvent

batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.models.screen_view_event.ScreenViewEvent()
        `;

        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(
                data['custom_attributes']
            );
        }
        returnString += `\
batch.events = [event]

try: 
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print "Exception while calling mParticle: %s\n" % e
        `;
        return returnString + '\n';
    }

    createCustomEventSnippet({ data }: Dictionary): string {
        const customEventType = data['custom_event_type'] as string;
        const typeString = this.stringEventType(customEventType);

        let returnString = `\        
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('${data['event_name']}', '${typeString}')
event.timestamp_unixtime_ms = example_timestamp
        `;

        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(
                data['custom_attributes']
            );
        }

        returnString += `\
        batch.events = [event]
        
        try: 
            api_instance.upload_events(batch)
            # you can also send multiple batches at a time to decrease the amount of network calls
            #api_instance.bulk_upload_events([batch, batch])
        except mparticle.rest.ApiException as e:
            print "Exception while calling mParticle: %s\n" % e
                `;
        return returnString;
    }

    createCrashReportSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createOptOutSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createFirstRunSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createApplicationStateTransitionSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createNetworkPerformanceSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createBreadcrumbSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createProfileSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createCommerceSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createUserAttributeChangeSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createUserIdentityChangeSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createUninstallSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createMediaSnippet = (exampleJSON: Dictionary) =>
        `Not currently supported by data plan V1`;

    createUserAttributesSnippet(exampleJSON: Dictionary): string {
        let returnString = `\        
batch = mparticle.Batch()
batch.environment = 'development'

        `;

        if (exampleJSON) {
            returnString += this.userAttributes(exampleJSON);
        }

        returnString += `\
        
        try: 
            api_instance.upload_events(batch)
            # you can also send multiple batches at a time to decrease the amount of network calls
            #api_instance.bulk_upload_events([batch, batch])
        except mparticle.rest.ApiException as e:
            print "Exception while calling mParticle: %s\n" % e
                `;
        return returnString;
    }

    createUserIdentitiesSnippet(exampleJSON: Dictionary): string {
        let returnString = `\        
batch = mparticle.Batch()
batch.environment = 'development'

        `;

        if (exampleJSON['user_identities']) {
            returnString += this.userIdentities(exampleJSON['user_identities']);
        }

        returnString += `\
        
        try: 
            api_instance.upload_events(batch)
            # you can also send multiple batches at a time to decrease the amount of network calls
            #api_instance.bulk_upload_events([batch, batch])
        except mparticle.rest.ApiException as e:
            print "Exception while calling mParticle: %s\n" % e
                `;
        return returnString;
    }

    createProductActionSnippet = (exampleJSON: Dictionary) => {
        return `Not currently supported by data plan V1`;
    };

    createProductImpressionSnippet(exampleJSON: Dictionary): string {
        return `Not currently supported by data plan V1`;
    }

    private customAttributesLines(customAttributesProperties: Dictionary): string {
        let returnString = '\n';

        if (Object.keys(customAttributesProperties).length > 0) {
            let returnString =
                `event.custom_attributes = ${customAttributesProperties}\n`;
        }
        return returnString;
    }

    private userAttributes(userAttributesProperties: Dictionary): string {
        let returnString = '\n';

        if (Object.keys(userAttributesProperties).length > 0) {
            let returnString =
                `batch.user_attributes = ${userAttributesProperties}\n`;
        }
        return returnString;
    }

    private userIdentities(userIdentitiesProperties: Dictionary): string {
        let returnString = 'identities = mparticle.UserIdentities()\n';

        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (const property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    const valueType = this.stringForValue(
                        userIdentitiesProperties[property]
                    );
                    returnString += `identities.${property} = ${valueType}\n`;
                }
            }
        }
        returnString += 'batch.user_identities = identities\n';
        return returnString;
    }

    // tslint:disable-next-line: no-any
    private stringForValue(value: any) {
        if (typeof (value) === 'string') {
            return '\'' + value + '\'';
        } else if (typeof (value) === 'number') {
            return value;
        } else if (typeof (value) === 'boolean') {
            return value ? 'true' : 'false';
        } else {
            return 'null';
        }
    }

    private stringEventType(value: string): string {
        switch (value) {
            case 'navigation': {
                return 'navigation';
            }
            case 'location': {
                return 'location';
            }
            case 'search': {
                return 'search';
            }
            case 'transaction': {
                return 'transaction';
            }
            case 'user_content': {
                return 'user_content';
            }
            case 'user_preference': {
                return 'user_preference';
            }
            case 'social': {
                return 'social';
            }
            case 'other': {
                return 'other';
            }
            case 'unknown': {
                return 'unknown';
            }
            default: {
                return 'default';
            }
        }
    }
}
