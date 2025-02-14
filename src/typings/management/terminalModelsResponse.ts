/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { IdName } from './idName';

export class TerminalModelsResponse {
    /**
    * The terminal models that the API credential has access to.
    */
    'data'?: Array<IdName>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<IdName>"
        }    ];

    static getAttributeTypeMap() {
        return TerminalModelsResponse.attributeTypeMap;
    }
}

