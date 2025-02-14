/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentMethodIssuer {
    /**
    * A boolean value indicating whether this issuer is unavailable. Can be `true` whenever the issuer is offline.
    */
    'disabled'?: boolean;
    /**
    * The unique identifier of this issuer, to submit in requests to /payments.
    */
    'id': string;
    /**
    * A localized name of the issuer.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodIssuer.attributeTypeMap;
    }
}

