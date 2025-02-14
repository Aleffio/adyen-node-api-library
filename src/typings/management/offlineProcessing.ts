/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { MinorUnitsMonetaryValue } from './minorUnitsMonetaryValue';

export class OfflineProcessing {
    /**
    * The maximum offline transaction amount for chip cards, in the processing currency and specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'chipFloorLimit'?: number;
    /**
    * The maximum offline transaction amount for swiped cards, in the specified currency.
    */
    'offlineSwipeLimits'?: Array<MinorUnitsMonetaryValue>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chipFloorLimit",
            "baseName": "chipFloorLimit",
            "type": "number"
        },
        {
            "name": "offlineSwipeLimits",
            "baseName": "offlineSwipeLimits",
            "type": "Array<MinorUnitsMonetaryValue>"
        }    ];

    static getAttributeTypeMap() {
        return OfflineProcessing.attributeTypeMap;
    }
}

