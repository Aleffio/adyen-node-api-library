/**
 * Adyen BinLookup API
 * The BIN Lookup API provides endpoints for retrieving information, such as cost estimates, and 3D Secure supported version based on a given BIN.
 *
 * The version of the OpenAPI document: 50
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface BinDetail {
    /**
    * The country where the card was issued.
    */
    'issuerCountry'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BinDetail.attributeTypeMap;
    }
}

