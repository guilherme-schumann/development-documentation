---
sidebar_position: 3
---

# Flows

## Macro Flow

1. Merchant registers at epag
2. Merchant receives sandbox credentials to access the sandbox Merchant Dashboard
3. Merchant generates a pair of API keys for the sandbox environment
4. Merchant integrates epag's API into Merchant's Store
5. Merchant receives production credentials to access the Merchant Dashboard
6. Merchant generates a pair of API keys
7. Merchant goes live
8. Merchant's customer makes a purchase on merchant's website
9. Merchant sends the transaction to Epag's API
10. Epag processes the transaction
11. Epag updates payment status

## API Macro FLow

1. Merchant authenticates against API and receives JWT Token
2. Merchant submits Payment data and receives, API response, Payment Id and initial status
3. Merchant is notified via webhook when the payment status changes
4. Merchant checks Payment status

## Transaction Status Map

The following diagram covers the possible status flow for all our transactions. For every status change a webhook notification is sent to the merchant's API.

![Transaction Status Map](./img/transaction-status-map.png)

## Status Description

- **CREATED:** The payment has been initiated and is awaiting processing.

- **PROCESSING:** The payment request has been accepted by the processor and is currently under processing.

- **PRE_AUTHORIZED:** The payment is pre-authorized and available for the merchant to capture.

- **PAID:** The payment has been authorized by the processor. Refer to the "received amount" field to verify the paid sum.

- **PARTIALLY_REFUNDED:** Partial refunds have been issued, not covering the full payment amount.

- **REFUNDED:** The payment was refunded by the merchant to its full amount.

- **DECLINED:** The payment was not accepted. The "errors" field contains an error code and description detailing the reason for decline.

- **CANCELED:** The payment was voided due to reasons such as transaction expiration or cancellation of pre-authorized transactions.

- **ERROR:** An unexpected error occurred during the payment process. The "errors" field contains an error code and description explaining the error's cause.

- **IN_ANALYSIS:** The transaction is currently under manual review.

- **DISPUTE:** The payer has initiated a dispute over the transaction.

- **DISPUTE_REFUNDED:** The disputed payment has been refunded.

- **POST_REFUND_DISPUTE:** A dispute was raised post-refund.

- **DISPUTE_RECOVERED:** The payment was subject to a dispute, which has now been resolved in favor of the merchant.

- **DISPUTE_FINAL:** The payment was disputed and the decision to revert it is final.