import { MPSnippets } from '../../src/mpSnippets';
import { Language, Dictionary } from '../../src/language';

// Regression test for the product_action enum mapping in the Swift translator.
// The action lives at data.action (merged from match.criteria.action), not at
// data.product_action (which is the commerce object). Reading the wrong field
// caused every product_action to fall through to the .addToCart default.
function productActionPoint(action: string): Dictionary {
    return {
        description: `Fired on ${action}`,
        match: { type: 'product_action', criteria: { action } },
        validator: {
            type: 'json_schema',
            definition: {
                properties: {
                    data: {
                        additionalProperties: true,
                        properties: {
                            custom_attributes: {
                                additionalProperties: false,
                                properties: {},
                                required: [],
                                type: 'object',
                            },
                        },
                        required: [],
                        type: 'object',
                    },
                },
            },
        },
    };
}

describe('Swift createProductActionSnippet enum mapping', () => {
    const cases: Array<[string, string]> = [
        ['add_to_cart', '.addToCart'],
        ['add_to_wishlist', '.addToWishList'],
        ['checkout', '.checkout'],
        ['checkout_options', '.checkoutOptions'],
        ['click', '.click'],
        ['view', '.viewDetail'],
        ['purchase', '.purchase'],
        ['refund', '.refund'],
    ];

    it.each(cases)('maps action %s to %s', (action, expected) => {
        const snippet = MPSnippets.createSnippet(
            productActionPoint(action),
            Language.Swift
        );
        expect(snippet).toContain(
            `MPCommerceEvent.init(action: ${expected}, product: product)`
        );
    });
});
