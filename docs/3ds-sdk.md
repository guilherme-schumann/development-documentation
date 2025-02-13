---
sidebar_position: 11
---

# 3DS SDK

In order to integrate 3DS 2.0 payments in your checkout.

## Prerequisite

- Host the 3DS SDK available **[here](https://checkout-sandbox.letpay.io/demo.html)**.
- Have valid contract ID.
- Have notification URL for payment status change callbacks.

## How to implement

1. To import the 3DS SDK, place the script in the head, or in the body section of your HTML page.

```html title="html"
{
<script src="https://3ds.epag.io/scripts/client-v1.0.min.js"></script>
}
```

2. Configure the SDK. Call the <code>setUp</code> method, and inform the <code>environment</code> and the <code>contractId</code>.

```jsx title="JavaScript"
{
EPag.setUp({
    env: 'PROD',
    contractId: 'MY_CONTRACT_ID',
});
}
```

3. Create the request object.

```jsx title="JavaScript"
{
const request = {
    "notificationUrl": "https://mynotificationurl.com",
    "referenceId": "MY_REFERENCE",
    "disableAddress": false,
    "customer": {
        "id": "39784045087",
        "name": "Alice Sonnentag",
        "email": "alice@sonnentag.com",
        "phones": [
            {
                "country": "55",
                "area": "11",
                "number": "912345678",
                "type": "MOBILE"
            }
        ]
    },
    "paymentMethod": {
        "type": "CREDIT_CARD", // or DEBIT_CARD
        "installments": "1",
        "card": {
            "number": "4000000000002503",
            "expMonth": "12",
            "expYear": "2028",
            "cvv": "123",
            "holder": {
                "name": "Alice Sonnentag"
            }
        }
    },
    "amount": {
        "value": 2503, // cents
        "currency": "BRL"
    },
    "billingAddress": {
        "partialAddress": false,
        "street": "Rua Araguari",
        "number": "817",
        "complement": "Conj. 74",
        "regionCode": "SP",
        "country": "BRA",
        "city": "São Paulo",
        "postalCode": "04514041"
    },
    "shippingAddress": {
        "partialAddress": false,
        "street": "Rua Araguari",
        "number": "817",
        "complement": "Conj. 74",
        "regionCode": "SP",
        "country": "BRA",
        "city": "São Paulo",
        "postalCode": "04514041"
    }
}
}
```

- <code>notificationUrl</code> (required/string): Url to notify when the payment status changes.
- <code>referenceId</code> (required/string): External code created by merchant to reference the payment.
- <code>disableAddress</code> (optional/boolean): If true disables the person's address. <code>billingAddress</code> and <code>shippingAddress</code> is no longer required and can be omitted. Default: false.
- <code>customer</code> (required/object): Object containing the person's data.
  - <code>id</code> (required/string): Unique identifier for this person in country tax system (e.g. in Brazil: CPF).
  - <code>name</code> (required/string): Person’s full name.
  - <code>email</code> (required/string): Person’s email provided to the merchant.
  - <code>phones</code> (required/array): Person's telephone list provided to the merchant.
    - <code>country</code> (required/integer): Person's telephone country code. Default: 55.
    - <code>area</code> (required/integer): Person's telephone area code. Must be two digits.
    - <code>number</code> (required/integer): Person's telephone number. Must be between 8 and 9 digits.
    - <code>type</code> (required/string): Person's telephone type. Valid option: <code>MOBILE</code>.

- <code>paymentMethod</code> (required/object): Object containing the payment method data.
  - <code>type</code> (required/string): Payment Method. Valid option: <code>CREDIT_CARD</code>, <code>DEBIT_CARD</code>.
  - <code>installments</code> (optional/integer): Number of installments. Must be between 1 and 12. Default: 1.
  - <code>card</code> (required/object): Object containing the card's data.
    - <code>number</code> (required/string): Credit Card number (only numbers).
    - <code>expMonth</code> (required/string): Expiration month of the card.
    - <code>expYear</code> (required/string): Expiration year of the card (with century, e.g. 2028).
    - <code>cvv</code> (required/string): Security code of the card.
    - <code>holder</code> (required/object): Object containing the card holder's data.
      - <code>name</code> (required/string): Name of credit card owner as printed on the credit card.
- <code>amount</code> (required/object): Object containing the amount of the payment.
  - <code>value</code> (required/number): Total amount of the payment **(in cents)**.
  - <code>currency</code> (required/string): Asset used in this amount. Valid option: BRL.
- <code>billingAddress</code> (required/object): Object containing the card's billing address data. Can be omitted if disableAddress is true.
  - <code>partialAddress</code> (optional/boolean): If true, billingAddress requires only postalCode and number.
  - <code>street</code> (required/string): Main information of the address (e.g. street or avenue). Optional if partialAddress is true.
  - <code>number</code> (required/string): Number for this address.
  - <code>complement</code> (optional/string): Additional information for this address (e.g. department).
  - <code>regionCode</code> (required/string): Address state code. Optional if partialAddress is true.
  - <code>country</code> (optional/string): Country code as ISO 3166-1 alpha-3 code. Optional if partialAddress is true. Default: BRA.
  - <code>city</code> (required/string): Address city. Optional if partialAddress is true.
  - <code>postalCode</code> (required/string): Address zip code (8 digits).
  - <code>shippingAddress</code> (optional/object): Object containing the person's shipping address data. Can be omitted if disableAddress is true.
  - <code>partialAddress</code> (optional/boolean): If true, billingAddress requires only postalCode and number.
  - <code>street</code> (required/string): Main information of the address (e.g. street or avenue). Optional if partialAddress is true.
  - <code>number</code> (required/string): Number for this address.
  - <code>complement</code> (optional/string): Additional information for this address (e.g. department).
  - <code>regionCode</code> (required/string): Address state code. Optional if partialAddress is true.
  - <code>country</code> (optional/string): Country code as **ISO 3166-1 alpha-3** code. Optional if <code>partialAddress</code> is <code>true</code>. Default: <code>BRA</code>.
  - <code>city</code> (required/string): Address city. Optional if <code>partialAddress</code> is <code>true</code>.
  - <code>postalCode</code> (required/string): Address zip code (8 digits).
- <code>shippingAddress</code> (optional/object): Object containing the person's shipping address data. Can be omitted if disableAddress is true.
    - <code>partialAddress</code> (optional/boolean): If <code>true</code>, <code>billingAddress</code> requires only <code>postalCode</code> and <code>number</code>.
    - <code>street</code> (required/string): Main information of the address (e.g. street or avenue). Optional if partialAddress is <code>true</code>.
    - <code>number</code> (required/string): Number for this address.
    - <code>complement</code> (optional/string): Additional information for this address (e.g. department).
    - <code>regionCode</code> (required/string): Address state code. Optional if <code>partialAddress</code> is <code>true</code>.
    - <code>country</code> (optional/string): Country code as **ISO 3166-1 alpha-3** code. Optional if <code>partialAddress</code> is <code>true</code>. Default: <code>BRA</code>.
    - <code>city</code> (required/string): Address city. Optional if <code>partialAddress</code> is <code>true</code>.
    - <code>postalCode</code> (required/string): Address zip code (8 digits).

4. Call the <code>authenticate3DS</code> method, pass the <code>request</code> as parameter and handle the callback events.

```jsx title="json"
{
await EPag.authenticate3DS(request, {
    onSuccess: (e) => {
        const id = e.id;
        const paymentToken = e.paymentToken;
    },
    onUnenrolled: () => {
    },
    onFailure: () => {
    },
    onError: (e) => {
    },
});
}
```

:::note

The <code>authenticate3DS</code> method returns a **Promise**, so use **await** or **then**. 

:::

| **Event** | **Description** |
| -- | -- |
| **onSuccess** | Card allows authentication and customer was successfully authenticated. **id:** The 3DS authentication id. Use it to process payment. **paymentToken:** Token to identify the payment. |
| **onUnenrolled** | Card allows authentication, however, customer authentication did not succeed. |
| **onFailure** | Card does not allow authentication. |
| **onError** | Error during authentication process. |

5. Use the received 3DS <code>id</code> and <code>paymentToken</code> on [Process Internal 3DS Payment](/docs/introduction) endpoint to process the payment.

---