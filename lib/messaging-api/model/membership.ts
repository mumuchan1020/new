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

export type Membership = {
  /**
   * Membership plan ID.
   */
  membershipId: number /**/;
  /**
   * Membership plan name.
   */
  title: string /**/;
  /**
   * Membership plan description.
   */
  description: string /**/;
  /**
   * List of membership plan perks.
   */
  benefits: Array<string> /**/;
  /**
   * Monthly fee for membership plan. (e.g. 1500.00)
   */
  price: number /**/;
  /**
   * The currency of membership.price.
   */
  currency: Membership.CurrencyEnum /**/;
  /**
   * Number of members subscribed to the membership plan.
   */
  memberCount: number /**/;
  /**
   * The upper limit of members who can subscribe. If no upper limit is set, it will be null.
   */
  memberLimit: number | null /**/;
  /**
   * Payment method for users who subscribe to a membership plan.
   */
  isInAppPurchase: boolean /**/;
  /**
   * Membership plan status.
   */
  isPublished: boolean /**/;
};

export namespace Membership {
  export type CurrencyEnum = "JPY" | "TWD" | "THB";
}