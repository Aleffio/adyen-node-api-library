/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentVerificationRequest {
    /**
    * Encrypted and signed payment result data. You should receive this value from the Checkout SDK after the shopper completes the payment.
    */
    'payload': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentVerificationRequest.attributeTypeMap;
    }
}

