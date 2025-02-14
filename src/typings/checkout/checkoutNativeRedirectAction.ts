/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutNativeRedirectAction {
    /**
    * When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
    */
    'data'?: { [key: string]: string; };
    /**
    * Specifies the HTTP method, for example GET or POST.
    */
    'method'?: string;
    /**
    * Native SDK\'s redirect data containing the direct issuer link and state data that must be submitted to the /v1/nativeRedirect/redirectResult.
    */
    'nativeRedirectData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * **nativeRedirect**
    */
    'type': CheckoutNativeRedirectAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "nativeRedirectData",
            "baseName": "nativeRedirectData",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutNativeRedirectAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutNativeRedirectAction.attributeTypeMap;
    }
}

export namespace CheckoutNativeRedirectAction {
    export enum TypeEnum {
        NativeRedirect = 'nativeRedirect'
    }
}
