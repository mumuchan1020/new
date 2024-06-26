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

import { Filter } from "./filter.js";
import { Limit } from "./limit.js";
import { Message } from "./message.js";
import { Recipient } from "./recipient.js";

export type NarrowcastRequest = {
  /**
   * List of Message objects.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message">messages Documentation</a>
   */
  messages: Array<Message> /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message">recipient Documentation</a>
   */
  recipient?: Recipient /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message">filter Documentation</a>
   */
  filter?: Filter /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message">limit Documentation</a>
   */
  limit?: Limit /**/;
  /**
   * `true`: The user doesn’t receive a push notification when a message is sent. `false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device). The default value is false.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message">notificationDisabled Documentation</a>
   */
  notificationDisabled?: boolean /* = false*/;
};
