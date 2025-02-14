/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { EncryptedOrderData } from './encryptedOrderData';

export class CancelOrderRequest {
    /**
    * The merchant account identifier that orderData belongs to.
    */
    'merchantAccount': string;
    'order': EncryptedOrderData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "EncryptedOrderData"
        }    ];

    static getAttributeTypeMap() {
        return CancelOrderRequest.attributeTypeMap;
    }
}

