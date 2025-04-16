---
displayed_sidebar: docSidebar
sidebar_position: 4
---

# Transaction Status Map

The following diagram covers the possible status flow for all our transactions. For every status change a webhook notification is sent to the merchant's API.

```mermaid
    graph TD;
    %% Define the main starting point
    CREATED ---> PRE_AUTHORIZED;
    CREATED ---> PROCESSING;
    CREATED ---> DECLINED_OR_ERROR;
    CREATED ---> CANCELED;

    %% Processing Paths
    PROCESSING ---> PAID;
    PROCESSING ---> DECLINED_OR_ERROR;
    PROCESSING ---> PRE_AUTHORIZED;
    PROCESSING ---> IN_ANALYSIS;
    PROCESSING ---> CANCELED;

    %% Pre Autorized Paths
    PRE_AUTHORIZED ---> PAID;
    PRE_AUTHORIZED ---> CANCELED;

    %% Analysis Paths
    IN_ANALYSIS ---> PAID;
    IN_ANALYSIS ---> DECLINED_OR_ERROR;
    IN_ANALYSIS ---> CANCELED;

    %% Post-Payment Paths
    PAID ---> PARTIALLY_REFUNDED;
    PAID ---> REFUNDED;
    PAID ---> DISPUTE;
    
    %% Partially Refund Paths
    PARTIALLY_REFUNDED ---> REFUNDED;
    PARTIALLY_REFUNDED ---> DISPUTE;
    
    %% Refund Path
    REFUNDED ---> |When we received a dispute notification after the transaction was refunded| POST_REFUND_DISPUTE;
    
    %% Dispute Paths
    DISPUTE ---> DISPUTE_FINAL;
    DISPUTE ---> DISPUTE_REFUNDED;
    DISPUTE ---> DISPUTE_RECOVERED;

    %% Styling
    style CREATED fill:#54CC14, color:#fff, stroke:#000,stroke-width:0px,font-weight:600;
    style PROCESSING fill:#E7E7E7, color:#333, stroke:#000,stroke-width:0px, font-weight:600;
    style PRE_AUTHORIZED fill:#E7E7E7, color:#333, stroke:#000,stroke-width:0px, font-weight:600;
    style CANCELED fill:#d00000, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style DECLINED_OR_ERROR fill:#d00000, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style IN_ANALYSIS fill:#E7E7E7, color:#333, stroke:#000,stroke-width:0px, font-weight:600;
    style PAID fill:#54CC14, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style PARTIALLY_REFUNDED fill:#E7E7E7, color:#333, stroke:#000,stroke-width:0px, font-weight:600;
    style REFUNDED fill:#E7E7E7, color:#333, stroke:#000,stroke-width:0px, font-weight:600;
    style DISPUTE fill:#7209b7, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style DISPUTE_FINAL fill:#7209b7, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style DISPUTE_REFUNDED fill:#7209b7, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style DISPUTE_RECOVERED fill:#54CC14, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;
    style POST_REFUND_DISPUTE fill:#7209b7, color:#fff, stroke:#000,stroke-width:0px, font-weight:600;

```



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