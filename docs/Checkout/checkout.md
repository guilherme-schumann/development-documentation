---
displayed_sidebar: checkoutSidebar
sidebar_position: 1
---

# Checkout

Our Checkout-as-a-Service offers a JavaScript solution that seamlessly integrates into your environment as an embedded payment form.

Alternatively, leverage our Redirect Checkout method to utilize it within our hosted environment.

This approaches are ideal for those preferring not to engage with our server-to-server API.

We are committed to continuous enhancements of our checkout system, ensuring an improved customer experience and a boost in your sales conversions.

## Payment Methods, Countries and Payment Currencies

In order to request a payment on our API it is necessary to include the Payment Country and Payment Currency. For each payment methods we offer these are the supported country/currency pairs.

|  | Brazil | Mexico | Colombia | Ecuador | Panama | Guatemala |
| -- | -- | -- | -- | -- | -- | -- |
| Credit Card | BR/BRL |  |  |  |  |  |
| Debit Card | BR/BRL |  |  |  |  |  |
| PIX | BR/BRL |  |  |  |  |  |
| Boleto | BR/BRL |  |  |  |  |  |
| PicPay | BR/BRL |  |  |  |  |  |
| OXXO |  | MX/MXN |  |  |  |  |
| Paynet |  | MX/MXN |  |  |  |  |
| SPEI |  | MX/MXN |  |  |  |  |
| Paycash |  | MX/MXN | CO/COP | EC/USD | PA/USD | GT/GTQ |

## Flows

### Credit Card with process payment option = true (default)

1. Initiate Checkout solution using Credit Card as payment method
2. User informs Personal information and Credit Card data
3. Data is encrypted
4. Payment is processed

**Credit Card numbers for testing purposes - Brazil**

|  | Type | Number | Valid Through | CVV |
| -- | -- | -- | -- | -- |
| Mastercard | Credit Card | 5240082975622454 | 12/2026 | 123 |
| Visa | Credit Card | 4539620659922097 | 12/2026 | 123 |
| Amex | Credit Card | 345817690311361 | 12/2026 | 123 |
| Hiper | Credit Card | 6062828598919021 | 12/2026 | 123 |
| Elo | Credit Card | 4514161122113757 | 12/2026 | 123 |
| Visa | 3DS | 4000000000002503 | 12/2026 | 123 |
| Mastercard | 3DS | 5200000000001096 | 12/2026 | 123 |
| Elo | 3DS | 6505050000001091 | 12/2026 | 123 |

### Credit Card with process payment option = false

In this flow our checkout can serve as a tokenization tool. After the user provides the card data the card is encrypted, tokenized and the merchant receives an ID

1. Initiate Checkout solution using Credit Card as payment method
  - Flag processPayment = false
2. User informs Personal information and Credit Card data
3. Data is encrypted
4. Retrieve Credit Card payment token
5. Authenticate on API
6. Request Tokenized Credit Card Ids
7. Process Payment

### Boleto

1. Initiate Checkout solution using <code>BOLETO</code> as payment method
2. User informs Personal information
3. Boleto is presented to the user
4. Retrieve payment token

### PIX

1. Initiate Checkout solution using <code>PIX</code> as payment method
2. Pix code is presented to the user
  - There is an option to have the user to input data before showing the QR code using the pixDirect option as false
4. Retrieve payment token

### PicPay

1. Initiate Checkout solution using <code>PICPAY</code> as payment method
2. PicPay QR Code is presented to the user
3. Retrieve payment token

### OXXO (Mexico)

1. Initiate Checkout solution using <code>OXXO</code> as payment method
2. User informs Personal information
3. OXXO barcode is presented to the user
4. Retrieve payment token

### Paynet (Mexico)

1. Initiate Checkout solution using <code>PAYNET</code> as payment method
2. User informs Personal information
3. Paynet barcode is presented to the user
4. Retrieve payment token

### SPEI (Mexico)

1. Initiate Checkout solution using <code>SPEI</code> as payment method
2. User informs Personal information
3. SPEI CLABE is presented to the user
4. Retrieve payment token

### Demo

Available [here](https://checkout-sandbox.epag.io/demo.html)

### Frontend

Include our javascript library in the section of your HTML

```jsx title="JSON"
   <script src="https://checkout-sandbox.epag.io/checkout-v0.1.js"></script>
```

Initiate the solution using HTML markup or Javascript:

### Method I: HTML

Mount the checkout and display the pay button. Click on it to lauch the lightbox.

```jsx title="html"
  <body>
    <epag-checkout amount="137.76" asset="BRL" reference-id="MY_REFERENCE_ID" contract-id="MY_CONTRACT_ID" method="CREDITCARD">
    </epag-checkout>
  </body>
```

### Method II: Javascript

**Option1:** Mount the checkout and display the pay button in the specific element. Click on it to launch the lightbox.

```jsx title="javascript"
    const ePagCheckout = new EPagCheckout({
      amount: 137.76,
      asset: "BRL",
      referenceId: "MY_REFERENCE_ID",
      contractId: "MY_CONTRACT_ID",
      method: "CREDITCARD",
    });
    ePagCheckout.mountIn('#checkout-container-element');
```

**Option 2:** Mount the checkout and launch immediately the lightbox. With this method the pay button will not get visible.

```jsx title="javascript"
    const ePagCheckout = new EPagCheckout({
      amount: 137.76,
      asset: "BRL",
      referenceId: "MY_REFERENCE_ID",
      contractId: "MY_CONTRACT_ID",
      method: "CREDITCARD",
    });
    ePagCheckout.start();
```

### Configuration Options

