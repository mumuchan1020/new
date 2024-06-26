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

import { Recipient } from "./recipient.js";

import { RecipientBase } from "./models.js";

export type AudienceRecipient = RecipientBase & {
  type: "audience";
  /**
   */
  audienceGroupId?: number /**/;
};
