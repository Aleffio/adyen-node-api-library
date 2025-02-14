/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentCompletionDetails {
    /**
    * A payment session identifier returned by the card issuer.
    */
    'MD'?: string;
    /**
    * (3D) Payment Authentication Request data for the card issuer.
    */
    'PaReq'?: string;
    /**
    * (3D) Payment Authentication Response data by the card issuer.
    */
    'PaRes'?: string;
    'authorization_token'?: string;
    /**
    * PayPal-generated token for recurring payments.
    */
    'billingToken'?: string;
    /**
    * The SMS verification code collected from the shopper.
    */
    'cupsecureplus_smscode'?: string;
    /**
    * PayPal-generated third party access token.
    */
    'facilitatorAccessToken'?: string;
    /**
    * A random number sent to the mobile phone number of the shopper to verify the payment.
    */
    'oneTimePasscode'?: string;
    /**
    * PayPal-assigned ID for the order.
    */
    'orderID'?: string;
    /**
    * PayPal-assigned ID for the payer (shopper).
    */
    'payerID'?: string;
    /**
    * Payload appended to the `returnURL` as a result of the redirect.
    */
    'payload'?: string;
    /**
    * PayPal-generated ID for the payment.
    */
    'paymentID'?: string;
    /**
    * Value passed from the WeChat MiniProgram `wx.requestPayment` **complete** callback. Possible values: any value starting with `requestPayment:`.
    */
    'paymentStatus'?: string;
    /**
    * The result of the redirect as appended to the `returnURL`.
    */
    'redirectResult'?: string;
    /**
    * Value you received from the WeChat Pay SDK.
    */
    'resultCode'?: string;
    /**
    * Base64-encoded string returned by the Component after the challenge flow. It contains the following parameters: `transStatus`, `authorisationToken`.
    */
    'threeDSResult'?: string;
    /**
    * Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `transStatus`.
    */
    'threeds2_challengeResult'?: string;
    /**
    * Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `threeDSCompInd`.
    */
    'threeds2_fingerprint'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MD",
            "baseName": "MD",
            "type": "string"
        },
        {
            "name": "PaReq",
            "baseName": "PaReq",
            "type": "string"
        },
        {
            "name": "PaRes",
            "baseName": "PaRes",
            "type": "string"
        },
        {
            "name": "authorization_token",
            "baseName": "authorization_token",
            "type": "string"
        },
        {
            "name": "billingToken",
            "baseName": "billingToken",
            "type": "string"
        },
        {
            "name": "cupsecureplus_smscode",
            "baseName": "cupsecureplus.smscode",
            "type": "string"
        },
        {
            "name": "facilitatorAccessToken",
            "baseName": "facilitatorAccessToken",
            "type": "string"
        },
        {
            "name": "oneTimePasscode",
            "baseName": "oneTimePasscode",
            "type": "string"
        },
        {
            "name": "orderID",
            "baseName": "orderID",
            "type": "string"
        },
        {
            "name": "payerID",
            "baseName": "payerID",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string"
        },
        {
            "name": "paymentID",
            "baseName": "paymentID",
            "type": "string"
        },
        {
            "name": "paymentStatus",
            "baseName": "paymentStatus",
            "type": "string"
        },
        {
            "name": "redirectResult",
            "baseName": "redirectResult",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "threeDSResult",
            "baseName": "threeDSResult",
            "type": "string"
        },
        {
            "name": "threeds2_challengeResult",
            "baseName": "threeds2.challengeResult",
            "type": "string"
        },
        {
            "name": "threeds2_fingerprint",
            "baseName": "threeds2.fingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentCompletionDetails.attributeTypeMap;
    }
}

