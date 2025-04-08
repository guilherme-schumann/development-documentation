---
displayed_sidebar: payoutsSidebar
---

# Payouts

The Payouts feature allows a Merchant to initiate a payment to a Customer.

This service is currently available for selected Beta Testers, currently offering PIX in Brazil and SPEI in Mexico.

```jsx
  https://api-sandbox.epag.io/payoutTransaction
```

## General Structure

All payouts must be sent using the payoutTransactions array, where each object represents an individual transaction.

## Common Parameters

| Field              | Type     | Required | Description |
|--------------------|----------|----------|-------------|
| `original_amount`  | Decimal  | Yes      | Amount to be paid in the original currency. |
| `original_currency`| String   | Yes      | Original currency code (e.g., `BRL`, `MXN`). |
| `payment_currency` | String   | Yes      | Currency used for the actual payment. Must match the original currency. |
| `payment_country`  | String   | Yes      | Country of the recipient. Supported values: `BR`, `MX`. |
| `payout_method`    | String   | Yes      | Payment method. Supported: `PIX` (Brazil), `SPEI` (Mexico). |
| `contract_id`      | UUID     | Yes      | Identifier of the contract to be used for the payout. |
| `reference_id`     | String   | Yes      | Unique reference identifier for this transaction. |
| `notification_url` | String   | Yes      | URL to receive asynchronous status updates. |
| `ttl`              | Integer  | No       | Time-to-live in seconds. `0` means no expiration. |