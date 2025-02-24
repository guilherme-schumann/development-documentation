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

## Frontend

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

## Configuration Options

### Required

| HTML attribute | JS Prop | Type | Default | Description |
| -- | -- | -- | -- | -- |
| asset | asset | string | n/a | Reference code for asset for the sale's amount |
| reference-id | referenceId | string | n/a | External code created by merchant to reference the payment |
| contract-id | contractId | string | n/a | epag's contract_id to be used in this sale |
| amount | amount | number | n/a | Total amount of the payment. Value must have a maximum of two decimal places and must not be less than BRL 0.75 |
| payment-country | paymentCountry | string | BR | Country code in ISO 3166-2 for the payment |
| payment-currency | paymentCurrency | string | BRL | Currency code in ISO-4217 for the payment |

### Payment

| HTML Attribute               | JS Prop                  | Type     | Required | Default                | Description |
|------------------------------|--------------------------|----------|----------|------------------------|-------------|
| `method`                     | `method`                 | string   | yes      | n/a                    | Payment Method. Valid options: `CREDITCARD`, `DEBITCARD`, `PIX`, `BOLETO`, `PICPAY`, `OXXO`, `PAYNET`, `SPEI`, `PAYCASH`. |
| `card-installments`          | `cardInstallments`       | number   | no       | 1                      | Number of installments. Used if method is `CREDITCARD`. |
| `soft-descriptor`            | `softDescriptor`         | string   | no       | n/a                    | Soft descriptor to use at card transaction. |
| `process-payment`            | `processPayment`         | boolean  | no       | false                  | Automatically process the payment (`CREDITCARD`, `DEBITCARD` only). |
| `delay-capture`              | `delayCapture`           | boolean  | no       | false                  | Pre-authorizes the payment for later capture (`CREDITCARD`, `PICPAY` only). |
| `save-card`                  | `saveCard`               | boolean  | no       | true                   | Tokenizes card for future uses. Works only if `processPayment = true`, otherwise `saveCard` will always be `true`. |
| `pix-direct`                 | `pixDirect`              | boolean  | no       | false                  | `true` will show the QR code for PIX payment without collecting payer data. Merchants can still send data to be linked to the transaction. |
| `boleto-expiration-date`     | `boletoExpirationDate`   | `YYYY-MM-DD` | no   | 5 days from now        | Expiration date (defaults to five days from current date if not provided). |
| `boleto-line1`               | `boletoLine1`            | string   | no       | n/a                    | First instruction line for cashier and customer. |
| `boleto-line2`               | `boletoLine2`            | string   | no       | n/a                    | Second instruction line for cashier and customer. |
| `boleto-line3`               | `boletoLine3`            | string   | no       | n/a                    | Third instruction line for cashier and customer. |
| `notification-url`           | `notificationUrl`        | string   | no       | n/a                    | URL to notify when transaction is successful. |
| `support-text`               | `supportText`            | string   | no       | n/a                    | Footer text in customer email for support contact (e.g., "Questions? Email support@mysite.com"). |
| `return-url`                 | `returnUrl`              | string   | no       | n/a                    | URL to redirect the customer when checkout is finished. |
| `lightbox-use-3ds`           | `lightboxUse3ds`         | boolean  | no       | false                  | Enables 3DS authentication if `true`. |
| `lightbox-use-external-3ds`  | `lightboxUseExternal3ds` | boolean  | no       | false                  | Enables 3DS authentication with an external MPI if `true`. |


### Customer Details

| HTML Attribute            | JS Prop              | Type            | Required | Default | Description |
|---------------------------|----------------------|----------------|----------|---------|-------------|
| `address-additional`      | `addressAdditional`  | string         | no       | n/a     | Additional information for this address (e.g. department). |
| `address-city`           | `addressCity`       | string         | no       | n/a     | Billing address city. |
| `address-country`        | `addressCountry`    | string         | no       | n/a     | Country code as ISO 3166-1 alpha-2 code. |
| `address-locality`       | `addressLocality`   | string         | no       | n/a     | Billing address locality (e.g. neighborhood). |
| `address-main`           | `addressMain`       | string         | no       | n/a     | Main information of the address (e.g. street or avenue). |
| `address-number`         | `addressNumber`     | number         | no       | n/a     | Number for this address. |
| `address-state`          | `addressState`      | string         | no       | n/a     | Billing address state code. |
| `address-zip-code`       | `addressZipCode`    | string         | no       | n/a     | Billing address zip code. |
| `person-birth`           | `personBirth`       | `YYYY-MM-DD`   | no       | n/a     | Date of birth. |
| `person-email`           | `personEmail`       | string         | no       | n/a     | Person's email provided to the merchant. |
| `person-first-name`      | `personFirstName`   | string         | no       | n/a     | First name of this person. Min 3 characters for OXXO, SPEI, and PAYNET methods. |
| `person-phone`           | `personPhone`       | string         | no       | n/a     | Billing address telephone. |
| `person-phone-area`      | `personPhoneArea`   | number (max 2 digits) | no | n/a | Number of phone area code. |
| `person-phone-country`   | `personPhoneCountry`| number (max 2 digits) | no | n/a | Number of country phone code. |
| `person-surname`         | `personSurname`     | string         | no       | n/a     | Surname of this person. |
| `person-tax-id`          | `personTaxId`       | string         | no       | n/a     | Unique identifier for this person in country tax system (e.g. in Brazil: CPF). |
| `disable-dob`            | `disableDob`        | boolean        | no       | true    | Hides the date of birth. |
| `lock-email`             | `lockEmail`         | boolean        | no       | false   | Prevents editing the person's email. |

### Widget options

| HTML Attribute   | JS Prop         | Type               | Required | Default   | Description                                  |
|------------------|-----------------|--------------------|----------|-----------|----------------------------------------------|
| `button-label`   | `buttonLabel`   | string             | no       | Pay now   | String that defines the widget button text.  |
| `button-color`   | `buttonColor`   | valid CSS color    | no       | #3375C9 | Valid CSS color for the button.              |
| `button-text-color` | `buttonTextColor` | valid CSS color | no     | #FFFFFF | Valid CSS color for the button text.         |

### Lightbox options

| HTML Attribute                                     | JS Prop                                  | Type              | Required | Default                | Description |
|----------------------------------------------------|------------------------------------------|-------------------|----------|------------------------|-------------|
| `lightbox-logo-url`                                | `lightboxLogoUrl`                        | string            | no       | ePag logo              | The URL of your logo (180 x 30 pixels) beginning with `https`. |
| `lightbox-primary-color`                           | `lightboxPrimaryColor`                   | valid CSS color   | no       | #303740              | Color applied to header. |
| `lightbox-secondary-color`                         | `lightboxSecondaryColor`                 | valid CSS color   | no       | #314259              | Color applied to action buttons. |
| `lightbox-accent-color`                            | `lightboxAccentColor`                    | valid CSS color   | no       | #027BE3              | Color applied to input focus and active stepper. |
| `lightbox-positive-color`                          | `lightboxPositiveColor`                  | valid CSS color   | no       | #A5DC86              | Color applied to success icon and success messages. |
| `lightbox-negative-color`                          | `lightboxNegativeColor`                  | valid CSS color   | no       | #F27474              | Color applied to error icon and error messages. |
| `lightbox-info-color`                              | `lightboxInfoColor`                      | valid CSS color   | no       | #F8BB86              | Color applied to loader icon and info messages. |
| `lightbox-warning-color`                           | `lightboxWarningColor`                   | valid CSS color   | no       | #F2C037              | Color applied to warning icon and warning messages. |
| `lightbox-address-bar-color`                       | `lightboxAddressBarColor`                | valid CSS color   | no       | #292F36              | Color applied to address bar when in mobile. |
| `lightbox-complete-purchase-button-label`          | `lightboxCompletePurchaseButtonLabel`    | string            | no       | Concluir compra        | String that defines the button's complete purchase text in boleto success feedback page. |
| `lightbox-disable-address`                         | `lightboxDisableAddress`                 | boolean           | no       | false                  | If `true`, disables the user's address collection step. |
| `lightbox-partial-address`                         | `lightboxPartialAddress`                 | boolean           | no       | false                  | If `true`, requires only the user's zip code and number. |

### Events

| Event Name               | When                                                                 |
|--------------------------|----------------------------------------------------------------------|
| `checkout-success`       | Event emitted when successfully processed the payment.              |
| `checkout-ready`         | Event emitted when checkout modal is ready.                         |
| `checkout-dismissed`     | Event emitted when checkout modal is closed.                        |
| `checkout-error`         | Event emitted when an error occurs with the payment.                |
| `boleto-copy`            | Event emitted when payment with boleto mode is successful and user has copied the barcode. |
| `boleto-complete-purchase` | Event emitted when payment with boleto mode is successful and user clicks complete purchase button. |
| `pix-copy`               | Event emitted when payment with pix mode is successful and user has copied the pix code. |
| `pix-complete-purchase`  | Event emitted when payment with pix mode is successful and user clicks complete purchase button. |
| `oxxo-copy`              | Event emitted when payment with oxxo mode is successful and user has copied the oxxo barcode. |
| `oxxo-complete-purchase` | Event emitted when payment with oxxo mode is successful and user clicks complete purchase button. |
| `spei-copy`              | Event emitted when payment with spei mode is successful and user has copied the spei clabe. |
| `spei-complete-purchase` | Event emitted when payment with spei mode is successful and user clicks complete purchase button. |
| `paynet-copy`            | Event emitted when payment with paynet mode is successful and user has copied the paynet barcode. |
| `paynet-complete-purchase` | Event emitted when payment with paynet mode is successful and user clicks complete purchase button. |
| `paycash-copy`           | Event emitted when payment with paycash mode is successful and user has copied the paycash barcode. |
| `paycash-complete-purchase` | Event emitted when payment with paycash mode is successful and user clicks complete purchase button. |
| `picpay-complete-purchase` | Event emitted when payment with picpay mode is successful and user clicks complete purchase button. |
| `3ds-success`            | Event emitted when successfully processed the 3DS payment.          |
| `3ds-unenrolled`         | Event emitted when card does not allow 3DS authentication.           |
| `3ds-failure`            | Event emitted when an error occurs with the 3DS payment.            |
| `3ds-error`              | Event emitted when an error occurs during 3DS authentication process. |

### Instance Methods

| Method          | Parameter                   | Return | Description                                                         |
|-----------------|-----------------------------|--------|---------------------------------------------------------------------|
| `mountIn`       | HTMLElement / CSS selector  | void   | Mount the checkout in the DOM and display the pay button.           |
| `start`         | no                          | void   | Mount the checkout in the DOM and launch the lightbox. With this method, the pay button will not get visible. |
| `closeLightbox` | no                          | void   | Used for programmatically closing the lightbox.                     |
| `on`            | event, function             | void   | Add an event handler. Acts the same way as `.addEventListener` from HTML. |
| `off`           | event, function             | void   | Remove an event handler. Acts the same way as `.removeEventListener` from HTML. |

### Element Methods

| Method         | Parameter | Return | Description                               |
|----------------|-----------|--------|-------------------------------------------|
|`closeLightbox` | no        | void   | Used for programmatically closing the lightbox. |

### Handing Events

Using `on(event, function)` / `off(event, function)` methods

```jsx title="javascript"
   const ePagCheckout = new EPagCheckout({...});
  function handler(event) {
    console.log(event.detail[0])
  };
  // to add a listener
  ePagCheckout.on('checkout-success', handler);
  // to remove a listener
  ePagCheckout.off('checkout-success', handler);
```

Using `addEventListener(type, listener)` / `removeEventListener(type, listener)` methods

```jsx title="javascript"
  const ePagCheckout = document.querySelector('epag-checkout');
  function handler(event) {
    console.log(event.detail[0])
  };
  // to add a listener
  ePagCheckout.addEventListener('checkout-success', handler);
  // to remove a listener
  ePagCheckout.removeEventListener('checkout-success', handler);
```

### Closing the lightbox

```jsx title="javascript"
  ePagCheckout.closeLightbox()
```