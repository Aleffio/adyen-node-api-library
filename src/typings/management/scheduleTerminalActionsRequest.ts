/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { InstallAndroidAppDetails } from './installAndroidAppDetails';
import { InstallAndroidCertificateDetails } from './installAndroidCertificateDetails';
import { ReleaseUpdateDetails } from './releaseUpdateDetails';
import { UninstallAndroidAppDetails } from './uninstallAndroidAppDetails';
import { UninstallAndroidCertificateDetails } from './uninstallAndroidCertificateDetails';

export class ScheduleTerminalActionsRequest {
    /**
    * Information about the action to take.
    */
    'actionDetails'?: InstallAndroidAppDetails | InstallAndroidCertificateDetails | ReleaseUpdateDetails | UninstallAndroidAppDetails | UninstallAndroidCertificateDetails;
    /**
    * The date and time when the action should happen.  Format: [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset. For example, **2021-11-15T12:16:21+01:00**  The action is sent with the first [maintenance call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect) after the specified date and time in the time zone of the terminal.  An empty value causes the action to be sent as soon as possible: at the next maintenance call.
    */
    'scheduledAt'?: string;
    /**
    * The unique ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present, all terminals in the `terminalIds` list must be assigned to this store.
    */
    'storeId'?: string;
    /**
    * A list of unique IDs of the terminals to apply the action to. You can extract the IDs from the [GET `/terminals`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/terminals) response. Maximum length: 100 IDs.
    */
    'terminalIds'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actionDetails",
            "baseName": "actionDetails",
            "type": "InstallAndroidAppDetails | InstallAndroidCertificateDetails | ReleaseUpdateDetails | UninstallAndroidAppDetails | UninstallAndroidCertificateDetails"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "string"
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string"
        },
        {
            "name": "terminalIds",
            "baseName": "terminalIds",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ScheduleTerminalActionsRequest.attributeTypeMap;
    }
}

