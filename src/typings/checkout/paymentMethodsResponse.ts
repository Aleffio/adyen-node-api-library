/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PaymentMethod } from './paymentMethod';
import { StoredPaymentMethod } from './storedPaymentMethod';

export class PaymentMethodsResponse {
    /**
    * Detailed list of payment methods required to generate payment forms.
    */
    'paymentMethods'?: Array<PaymentMethod>;
    /**
    * List of all stored payment methods.
    */
    'storedPaymentMethods'?: Array<StoredPaymentMethod>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethods",
            "baseName": "paymentMethods",
            "type": "Array<PaymentMethod>"
        },
        {
            "name": "storedPaymentMethods",
            "baseName": "storedPaymentMethods",
            "type": "Array<StoredPaymentMethod>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodsResponse.attributeTypeMap;
    }
}

