/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Counterparty2 {
    /**
    * The identifier of the receiving account holder. The payout will default to the primary balance account of this account holder if no `balanceAccountId` is provided.
    */
    'accountHolderId'?: string;
    /**
    * The identifier of the balance account that belongs to the receiving account holder.
    */
    'balanceAccountId'?: string;
    /**
    * The identifier of the transfer instrument that belongs to the legal entity of the account holder.
    */
    'transferInstrumentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderId",
            "baseName": "accountHolderId",
            "type": "string"
        },
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "transferInstrumentId",
            "baseName": "transferInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Counterparty2.attributeTypeMap;
    }
}

