---
displayed_sidebar: paymentsSidebar
---

# Credit Cards 3DS

## Overview

This document details the **3D Secure (3DS) authentication process** for credit card transactions. 3DS authentication is an additional security layer that helps prevent fraud by requiring cardholder verification through the issuing bank.

## How 3DS Works

1. The customer initiates a payment request.
2. The payment gateway redirects the user to the issuing bank for authentication.
3. The bank may request additional verification (e.g., password, SMS code, biometric authentication).
4. Once verified, the bank sends a confirmation token.
5. The transaction is processed based on the authentication result.

## 3DS Card Payment Checkout Internal Authentication (epag)

```mermaid
sequenceDiagram
    autonumber
    participant Payer
    participant Merchant
    participant epag
    participant Acquirer
    participant AuthenticationProvider as Authentication Provider

    Payer ->> Merchant: Card Payment Checkout
    Merchant ->> Payer: Loads 3DS on the user device
    Merchant ->> epag: Card Payment Request
    Payer -->> AuthenticationProvider: Send Authentication Details
    AuthenticationProvider ->> Payer: Authentication Successful
    AuthenticationProvider ->> epag: 3DS Authentication Data
    epag ->> Merchant: 3DS Authentication Data
    epag ->> Acquirer: Process Payment Request With Authentication Data
    Acquirer ->> epag: Payment Authorization
    epag -->> Merchant: Callback Notification
    Merchant ->> epag: GET Transaction Status
    epag ->> Merchant: Transaction Status
    Merchant ->> Payer: Payment Received & Order Confirmed
```
## 3DS Card Payment Checkout External Authentication

```mermaid
sequenceDiagram
    autonumber
    participant Payer
    participant Merchant
    participant epag
    participant Acquirer
    participant AuthenticationProvider as Authentication Provider

    Payer ->> Merchant: Card Payment Checkout
    Merchant ->> Payer: Loads 3DS on the user device
    Payer -->> AuthenticationProvider: Send Authentication Details
    AuthenticationProvider ->> Payer: Authentication Successful
    AuthenticationProvider ->> Merchant: 3DS Authentication Data
    Merchant ->> epag: Card Payment Request with 3DS Authentication Data
    epag ->> Acquirer: Process Payment Request with 3DS Authentication Data
    Acquirer ->> epag: Payment Authorization
    epag -->> Merchant: Callback Notification
    Merchant ->> epag: GET Transaction Status
    epag ->> Merchant: Transaction Status
    Merchant ->> Payer: Payment Received & Order Confirmed
```

## 3DS Authentication Fields

The following fields are used for **3DS authentication** within the payment request:

```json
"authentication": {
    "cavv": "BwABBylVaQAAAAFwllVpAAAAAAA=",
    "xid": "BwABBylVaQAAAAFwllVpAAAAAAA=",
    "eci": "05",
    "version": "2.1.0",
    "dstrans_id": "DIR_SERVER_TID"
}
```

### Field Descriptions

- `cavv` (*string*): Cardholder authentication verification value.
- `xid` (*string*): Transaction identifier for authentication tracking.
- `eci` (*string*): Electronic commerce indicator showing authentication success/failure.
- `version` (*string*): 3DS protocol version used (e.g., "2.1.0").
- `dstrans_id` (*string*): Unique transaction ID from the directory server.

## Example 3DS Payment Request

```json
{
    "payment": {
        "method": "CREDITCARD",
        "amount": 150.00,
        "currency": "USD",
        "card": {
            "number": "4111111111111111",
            "holder": "John Doe",
            "cvv": "123",
            "year": 2027,
            "month": 10,
            "installments": 1,
            "authentication": {
                "cavv": "BwABBylVaQAAAAFwllVpAAAAAAA=",
                "xid": "BwABBylVaQAAAAFwllVpAAAAAAA=",
                "eci": "05",
                "version": "2.1.0",
                "dstrans_id": "DIR_SERVER_TID"
            }
        }
    }
}
```

## 3DS Authentication Flow

1. `Initiate Payment`: Send a payment request containing the `authentication` object.
2. `Bank Redirection`: If required, the customer is redirected to the bank’s authentication page.
3. `Verification Response`: The bank returns a response (successful or failed authentication).
4. `Process Payment`: The payment is processed based on the authentication outcome.

## Considerations

- 3DS **reduces fraud risk** by verifying the cardholder’s identity.
- Some transactions may **bypass authentication** depending on bank risk analysis.
- Ensure your **payment gateway supports 3DS** to enable smooth authentication handling.

## Example Response

```json
{
    "transaction_status": "PROCESSING",
    "payment_token": "0196e128-c6c7-4249-9f20-21a4c2eb1506",
    "reference_id": "MY_REFERENCE_ID",
    "public_person_id": "PER-715a6579-e420-4098-b18a-918cc732224d",
    "public_card_id": "CAR-cbd3dfd8-4e0e-4525-a80b-db361f3189be",
    "amount": "123.45",
    "refresh_token": "MY_ACCESS_TOKEN",
    "totals": {
    "amount": 123.45,
    "original_amount": 123.45,
    "original_asset": "BRL",
    "customer_fees": 0,
    "customer_amount": 123.45,
    "asset": "BRL"
    },
    "customer_fees": {}
}
```

This document provides the necessary details to implement **3DS authentication** in credit card transactions securely.

