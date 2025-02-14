/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilityProblemEntity } from './capabilityProblemEntity';
import { VerificationError } from './verificationError';

export class CapabilityProblem {
    'entity'?: CapabilityProblemEntity;
    /**
    * List of verification errors.
    */
    'verificationErrors'?: Array<VerificationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "CapabilityProblemEntity"
        },
        {
            "name": "verificationErrors",
            "baseName": "verificationErrors",
            "type": "Array<VerificationError>"
        }    ];

    static getAttributeTypeMap() {
        return CapabilityProblem.attributeTypeMap;
    }
}

