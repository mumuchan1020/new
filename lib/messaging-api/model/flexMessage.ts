/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlexContainer } from "./flexContainer.js";
import { Message } from "./message.js";
import { QuickReply } from "./quickReply.js";
import { Sender } from "./sender.js";

import { MessageBase } from "./models.js";

export type FlexMessage = MessageBase & {
  type: "flex";
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#flex-message">altText Documentation</a>
   */
  altText: string /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#flex-message">contents Documentation</a>
   */
  contents: FlexContainer /**/;
};
