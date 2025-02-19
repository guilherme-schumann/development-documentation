---
displayed_sidebar: docSidebar
sidebar_position: 2
---

# Considerations

### Our API
**RESTful:** The API is based on a RESTful architecture.

**Stateless:** The API does not handle states, all necessary data is sent by the client.

**URLs:** Each method has its unique URL.

**HTTP methods:** All requests have to respect the correct HTTP method:

- GET: Read data;

- POST: Store data;

- PUT: Update data;

- DELETE: Delete data.

### Integration Choice
We offer 3 main types of integration, all described in more detail below. The current rationale for choosing between them is the following:

- Do you have a dedicated interface for entering payment details?

  - If YES

      - Utilize our Server-to-Server methods.

      - For credit and debit cards, implement the Payment Order process.

      - For additional payment methods, we recommend the Simple Payments process.

  - If NO

    - You have two options compatible with all our payment methods:

      1. Checkout Flow: Integrate our JavaScript library for a seamless in-app experience.

      2. Hosted Checkout Flow: Direct your customers to our secure checkout page.

### Server to Server (API to API)
In this integration scenario, merchants leverage their own interface to gather transaction details. Subsequently, the merchant's API communicates directly with ours to initiate a transaction and transmit payment information. Merchants have the straightforward option to select either the Simple Payments or Payment Order workflows for their transactions.

**[Simple Payments](#our-api)**

Simple Payments is a comprehensive transaction method where merchants submit all required data for immediate processing. This approach prioritizes efficiency and simplicity.

**[Payment Order](#our-api)**

Payment Order is a method for creating payment orders that are pre-validated before sending the actual request for processing a transaction. In this method, merchants first send general info about the transaction, it all gets validated and then they send a request to process that data using whatever payment method they want.

In this method, merchants are provided with some transaction details prior to processing. This includes visibility of the foreign exchange (FX) rates when the order currency differs from the payment currency, or when a merchant wants to push a fee to its users but wants to see the calculated total amount before processing a payment.

**[Checkout](#our-api)**

In this integration model, merchants utilize our API to embed a JavaScript module within their checkout pages. This module provides a user-friendly interface for entering necessary data and displaying payment instructions. Its backend seamlessly interfaces with our API to initiate and manage transactions. The module is highly customizable, allowing merchants to tailor both the payment process and the user interface to their specific needs. Upon the initiation of a payment, merchants will receive real-time notifications tracking the payment's progress.

### Hosted Checkout

This process mirrors the Checkout Flow with a key distinction: the interface is identical, but the page resides within our secure environment. Merchants are required to provide the specifications and design elements for the custom page, along with an identifier for each transaction. Upon the initiation of a payment, merchants will receive real-time notifications tracking the payment's progress.