import { MPTranslator } from '../translator';
import { Dictionary } from '../language';

export abstract class MPAndroid implements MPTranslator {
    static tab = '    '

    abstract nullabilityOperator = ''
    abstract getCurrentUser: string

    getMParticleInstanceSnippet = "MParticle.getInstance()"
    getIdentityInstanceSnippet = this.getMParticleInstanceSnippet + '.Identity()'

    getMParticleInstanceToCallSnippet = () => this.getMParticleInstanceSnippet + this.nullabilityOperator
    getIdentityInstanceToCallSnippet = () => this.getMParticleInstanceToCallSnippet() + '.Identity()' + this.nullabilityOperator
    getCurrentUserInstanceSnippet = () => this.getIdentityInstanceToCallSnippet() + '.' + this.getCurrentUser

    /**
     * returns a snippet declaring a variable for the given name and type
     * @param type the type of the variable
     * @param name (optional) the name of the variable. if not provided, will be lowercase of "type"
     */
    abstract getDeclareVariableSnippet(type: string, name?: string): string

    /**
     * returns a snippet instantiating the given type, up to the constructor arguments. i.e "new Type("
     * @param type 
     */
    abstract getCreateInstanceSnippet(type: String): string

    /**
    * returns a Stringified Kotlin example of creating a Map with the given Dictionary,
    * or `null` if no attributes are provided
    *  
    * @param dictionary attributes in JSON form
    */
    abstract getMapSnippet(dictionary: Dictionary, type: string, variableName: string, wrapKeysinQuotes?: boolean): string | null

    abstract endStatement: string


    createSessionStartSnippet = (exampleJSON: Dictionary) =>
        '//Android Sessions will automatically be started when an Event is logged'

    createSessionEndSnippet = (exampleJSON: Dictionary) =>
        '//Android Sessions will automatically end after a timeout'

    createFirstRunSnippet = (exampleJSON: Dictionary) =>
        '//First Run is not manually called';

    createApplicationStateTransitionSnippet = (exampleJSON: Dictionary) =>
        '//Application State Transition is not manually called'

    createProfileSnippet = (exampleJSON: Dictionary) =>
        '//Profile Snippet is not manually called';

    createCommerceSnippet = (exampleJSON: Dictionary) =>
        '//A generic commerce event should never be included in a data plan';

    createUserAttributeChangeSnippet = (exampleJSON: Dictionary) =>
        '//A generic attribute change event should never be included in a data plan';

    createUserIdentityChangeSnippet = (exampleJSON: Dictionary) =>
        '//A generic identity change event should never be included in a data plan';

    createUninstallSnippet = (exampleJSON: Dictionary) =>
        '//Uninstall is not manually called\n';

    createMediaSnippet = (exampleJSON: Dictionary) =>
        '//Media Events are not manually called';

    createOptOutSnippet = (exampleJSON: Dictionary) =>
        this.getMParticleInstanceToCallSnippet() + '.setOptOut(true)' + this.endStatement;

    createBreadcrumbSnippet(properties: Dictionary): string {
        const { data } = properties;

        let eventName = this.stringForValue(data['event_name']);
        return this.getMParticleInstanceToCallSnippet() + '.leaveBreadcrumb(' + eventName + ')' + this.endStatement;
    }

    createCustomEventSnippet(properties: Dictionary): string {
        const { data } = properties;

        let eventType = "MParticle.EventType." + this.capitalize(data['custom_event_type']);
        let eventName = this.stringForValue(data['event_name']);
        let attributes = this.getMapSnippet(data['custom_attributes'], 'Map<String, String>', 'attributes');
        let snippet = '';

        if (attributes) {
            snippet = attributes;
        }
        return snippet + this.getDeclareVariableSnippet('MPEvent', 'event') + ' = ' + this.getCreateInstanceSnippet('MPEvent.Builder') + '(' + eventName + ', ' + eventType + ')' +
            (attributes ? '\n' + MPAndroid.tab + '.customAttributes(attributes)' : '') +
            '\n' + MPAndroid.tab + '.build()' + this.endStatement + '\n' +
            this.getMParticleInstanceToCallSnippet() + '.logEvent(event)' + this.endStatement
    }

    createUserIdentitiesSnippet(data: Dictionary): string {
        let userIdentities: Dictionary = [];
        if (data && Object.keys(data).length > 0) {
            for (const key in data) {
                userIdentities['MParticle.IdentityType.' + this.capitalize(key)] = data[key]
            }
            let userIdentitieSnippet = this.getMapSnippet(userIdentities, 'Map<MParticle.IdentityType, String>', 'userIdentities', false)
            return userIdentitieSnippet +
                this.getDeclareVariableSnippet('IdentityApiRequest', 'request') + ' = IdentityApiRequest.withEmptyUser()\n' +
                MPAndroid.tab + '.userIdentities(userIdentities)\n' +
                MPAndroid.tab + '.build()' + this.endStatement + '\n' +
                this.getIdentityInstanceToCallSnippet() + '.identify(request)' + this.endStatement
        } else {
            return ''
        }
    }

    createUserAttributesSnippet(customAttributes: Dictionary): string {
        let attributes = this.getMapSnippet(customAttributes, 'Map<String, String>', 'attributes');
        if (attributes) {
            return attributes +
                this.getDeclareVariableSnippet('MParticleUser', 'user') + ' = ' + this.getCurrentUserInstanceSnippet() + this.endStatement + '\n' +
                'user' + this.nullabilityOperator + '.setUserAttributes(attributes)' + this.endStatement;
        }
        return '';
    }

    createScreenViewSnippet(properties: Dictionary): string {
        const { data } = properties;

        let screenName = this.stringForValue(data['screen_name']);
        let attributes = this.getMapSnippet(data['custom_attributes'], 'Map<String, String>', 'attributes');
        let snippet = '';

        if (attributes) {
            snippet = attributes
        }
        return snippet +
            this.getMParticleInstanceToCallSnippet() + '.logScreen(' + screenName + (attributes ? (', attributes') : '') + ')' + this.endStatement;
    }

    createCrashReportSnippet(properties: Dictionary): string {
        const { data } = properties;

        let message = this.stringForValue(data['exception_name'])
        let attributes = this.getMapSnippet(data['custom_attributes'], "Map<String, String>", "eventData")
        let snippet = ''
        if (attributes) {
            snippet = attributes
        }
        return snippet += this.getDeclareVariableSnippet("Exception") + ' = ' + this.getCreateInstanceSnippet("Exception") + '()' + this.endStatement + MPAndroid.tab + '//replace this with your exception\n' +
            this.getMParticleInstanceToCallSnippet() + '.logException(exception, ' + (attributes ? 'eventData' : 'null') + ', ' + message + ')' + this.endStatement;
    }
    createNetworkPerformanceSnippet(exampleJSON: Dictionary): string {
        let eventName = this.stringForValue(exampleJSON['event_name']);
        let startTime = exampleJSON['start_time']
        let httpMethod = this.stringForValue(exampleJSON['http_method'])
        let duration = exampleJSON['duration']
        let bytesSent = exampleJSON['bytes_sent']
        let bytesReceived = exampleJSON['bytes_received']
        let responseCode = this.stringForValue(exampleJSON['response_code'])
        return (
            this.getMParticleInstanceToCallSnippet() + '.logNetworkPerformance(' +
            eventName + ', ' +
            startTime + ', ' +
            httpMethod + ', ' +
            duration + ', ' +
            bytesSent + ', ' +
            bytesReceived + ', ' +
            '"{REQUEST-STRING}", ' +
            responseCode + ')' + this.endStatement
        );
    }

    createProductActionSnippet(properties: Dictionary): string {
        const { data } = properties;

        let name = data['product_name']
        let sku = data['product_sku']
        let quantity = data['product_quantity']
        let price = data['product_price']
        let productAction = data['product_action']

        return this.getDeclareVariableSnippet('Product') + ' = ' + this.getCreateInstanceSnippet('Product.Builder') +
            '(' + name + ', ' + sku + ', ' + price + ')\n' +
            MPAndroid.tab + '.quantity(' + quantity + ')\n' +
            MPAndroid.tab + '.build()' + this.endStatement + '\n' +
            this.getDeclareVariableSnippet('CommerceEvent') + ' = ' + this.getCreateInstanceSnippet('CommerceEvent.Builder') +
            '(' + productAction + ', product)' + this.endStatement + '\n' +
            this.getMParticleInstanceToCallSnippet() + '.logEvent(commerceEvent)' + this.endStatement

    }
    createProductImpressionSnippet(exampleJSON: Dictionary): string {
        throw new Error("Method not implemented.");
    }

    protected stringForValue(value: any): string {
        if (value as string) {
            return `"${value}"`;
        } else if (value as number) {
            return value;
        } else if (value as boolean) {
            return value ? 'true' : 'false';
        } else {
            return 'nil';
        }
    }

    protected capitalize(value: string): string {
        if (value.length > 1) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            return value.toUpperCase();
        }
    }

    protected camelCase(value: string): string {
        if (value.length > 1) {
            return value.charAt(0).toLowerCase() + value.slice(1);
        } else {
            return value.toLowerCase();
        }
    }
}