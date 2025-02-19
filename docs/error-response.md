---
displayed_sidebar: docSidebar
sidebar_position: 9
---

# Error Response and Error Codes

## Error Response

Our system is designed to provide clear and actionable feedback in the event of an error. When an issue arises, we deliver a specific error code within the errors field, accompanied by a description to elucidate the nature of the problem.

We are committed to transparency and ensure that merchants receive comprehensive error information, without any omissions.

```jsx title="json"
{
    "timestamp": "YYYY-MM-DDTHH:mm:SS",
    "status": 500,
    "error": "Internal Server Error",
    "message": "Unknown error. Please contact support.",
    "path": "REQUESTED_PATH"
    "errors": [
        {
            "code": "00.01.0005",
            "description": "invalid domain for this host"
        }
    ],
    "refresh_token": "REFRESH_TOKEN"
}
```

## Error Codes

Here is a list of the current error codes and their descriptions.

Disclaimer: We update this table from time to time, so it may not be fully up to date as we continuously update our database with new codes and improved messages

<!-- | Error Code | Description |
| -- | -- |
| 00.00.0000   | Unknown error. Please contact support. | -->


| Error Code | Description |
| -- | -- |
| 00.00.0000 | Unknown error. Please contact support. |
| 00.01.0001 | The authentication request is invalid. Please make sure you are providing the right credentials. |
| 00.01.0002 | The state provided in the address is invalid |
| 00.01.0003 | Person with empty or non-existent country. |
| 00.01.0004 | Merchant not found |
| 00.01.0005 | Invalid domain for this host |
| 00.01.0006 | Invalid realm for host |
| 00.01.0007 | The asset or currency you are trying to use was not found. Please use a valid asset |
| 00.01.0008 | Invalid card installments: Must be less or equal to 12 |
| 00.01.0009 | There is no account related to this API key, please make sure you are using the right key in the right environment |
| 00.01.0010 | We couldn't find a valid user for the credentials provided. Please check if you are using the right user, password or key |
| 00.01.0011 | Financial institution not found for code |
| 00.01.0012 | We couldn't find this access key. Please make sure you are using the right credentials and the right environment. |
| 00.01.0013 | Please provide a valid payment token |
| 00.01.0014 | Merchant Account not found |
| 00.01.0015 | No merchant signature found for contract |
| 00.01.0016 | Error when retrieving address from zip code . Please make sure it is a valid zip code for this region. |
| 00.01.0017 | Public person id invalid or not found |
| 00.01.0018 | Public card id invalid or not found |
| 00.01.0019 | The zip code provided is invalid |
| 00.01.0020 | Please make sure to send public person id and public card id |
| 00.01.0021 | Invalid contract / project |
| 00.01.0022 | Invalid country |
| 00.01.0023 | Payment method is not allowed for this contract / project |
| 00.01.0024 | field %s must not be blank |
| 00.01.0025 | Invalid date. Date must be before |
| 00.01.0026 | One of the parameters provided are incorrect: Date of birth, Full name, Tax Id |
| 00.01.0027 | Inactive contract. Please contact the support team. |
| 00.01.0028 | There is not enough balance for this transaction. |
| 00.01.0029 | Asset currency Code not found for this contract contractId |
| 00.01.0030 | The contract id field must not be empty. |
| 00.01.0031 | In order to refund this transaction please inform the type of bank account (CHECKING or SAVINGS). |
| 00.01.0032 | The card number provided is invalid. Please verify and try again. |
| 00.01.0033 | The email address provided is invalid. Please verify and try again. |
| 00.01.0034 | We can't find the card you are trying to use. Please verify and try again. |
| 00.01.0035 | This payment method is not available in the this country. |
| 00.01.0036 | The contract id provided doesn't exist. Please provide a valid contract id. |
| 00.01.0037 | This currency cannot be used with this payment method. |
| 00.01.0038 | This transaction id paymentToken could not be found. |
| 00.01.0039 | field must not be null |
| 00.01.0040 | must not be null for method |
| 00.01.0041 | must be null for method |
| 00.01.0042 | size must be between minLength and maxLength |
| 00.01.0043 | Request processing failed |
| 00.01.0044 | Malformed JSON request. |
| 00.01.0045 | Currency incompatible with the given country |
| 00.01.0046 | Please provide a username for the account. |
| 00.01.0047 | Please provide a contract id for the account. |
| 00.01.0048 | Please provide the payment methods for this account. |
| 00.01.0049 | (field_name) : must be not blank |
| 00.01.0050 | Required Field Its Not Filled |
| 00.01.0051 | Validation Error |
| 00.01.0052 | We can only create exceptions for global rules. Please check and try again. |
| 00.01.0054 | This rule already exists. |
| 00.01.0056 | Merchant signature not found for this merchant |
| 00.01.0057 | The order id must be provided |
| 00.01.0058 | The payment amount must be greater than 0 |
| 00.01.0059 | The holder must be filled |
| 00.01.0060 | The credit card number must be filled |
| 00.01.0061 | The CVV must be filled |
| 00.01.0062 | The credit card year must be filled |
| 00.01.0063 | The credit card month is invalid |
| 00.01.0064 | The credit card year and month must be in the future |
| 00.01.0065 | Debit card transaction does not support delay capture |
| 00.01.0066 | Debit card transaction does not support installments |
| 00.02.0001 | There was an issue when contacting an external API, please contact support |
| 00.03.0001 | There was an issue when contacting an external API, please contact support |
| 00.03.0002 | There was an issue when contacting an external API, please contact support |
| 00.03.0003 | There was an issue when contacting an external API, please contact support |
| 00.03.0004 | Erro em serviços que valida a identificação fiscal. Tente mais tarde. |
| 00.03.0005 | Your notification URL returned an error or timed out when receiving a callback notification. callMerchant error : HTTP error code |
| 00.03.0006 | We are having trouble retrieving the current FX rates, please try again later. |
| 00.03.0007 | Unexpected error while processing request with acquirer. Please contact the support team |
| 00.04.0001 | The user does not have permission to delete this accessKey |
| 00.04.0002 | The payment does not belong to merchant. |
| 00.04.0003 | Current contract cannot perform this action |
| 00.04.0005 | This payment paymentToken does not belong to this merchant, user username Merchant This payment paymentToken does not belong to this merchant, user username |
| 00.04.0006 | The current STATUS of the transaction prevents it from being refunded |
| 00.04.0007 | Invalid Payment Method |
| 00.04.0008 | This transaction requires 3DS 2.0 authentication |
| 00.04.0009 | Invalid Operation.The supported operations are CREDIT and DEBIT. |
| 00.04.0010 | The payment token was not pre-authorized, so it can't be captured. |
| 00.04.0011 | The request amount is higher than the pre-authorized amount available |
| 00.04.0012 | Transaction status can not change |
| 00.04.0013 | You are trying to make a 3DS authenticated transaction. The only methods accepted for this are credit card and debit card. |
| 00.04.0014 | The refund could not proceed because the requested amount is too high, please check and try again with a smaller amount. |
| 00.04.0016 | The name and the Tax ID provided don't match. Please verify and try again. |
| 00.04.0017 | You don't have permission to create a firewall rule for this account. Please use the correct account. |
| 00.04.0019 | Blocked by firewall rules |
| 00.04.0020 | The 3DS authentication failed. |
| 00.04.0021 | This payment method is not allowed for this contract. |
| 00.04.0022 | This payment token has already been used in a previous call to sendPayment |
| 00.05.0001 | There was an unexpected error in our application, please contact support |
| 00.05.0002 | There was an error when decoding a QR code or a barcode. Please try again. If the problem persists, please contact support. |
| 00.05.0003 | There was an unexpected error in our application, please contact support if the problem persists. |
| 00.05.0004 | There was an unexpected error in our application, please contact support if the problem persists. |
| 00.05.0005 | There was an error when trying to fetch the account |
| 00.05.0006 | There was an error when trying to create the account |
| 00.05.0007 | There was an error when trying to create the contract |
| 00.05.0008 | There was an error when trying to fetch the fees |
| 00.05.0009 | There was an error when trying to fetch the signatures |
| 00.05.0010 | There was an error when trying to fetch the accounts |
| 00.05.0011 | There seems to be an issue with our gateway's configuration, please contact support. |
| 00.05.0012 | The credentials to issue this refund seems to be missing. Please contact support. |
| 00.05.0013 | There was an issue fetching a configuration for this account. Please contact support. |
| 00.05.0014 | We couldn't find a rate for this currency pair, please make sure to use a valid one. |
| 00.05.0016 | There was an error when creating the merchant account. Please contact support. |
| 00.06.0001 | No settlements found when searching for listing |
| 01.01.0001 | Transaction declined, an obligatory parameter(s) is missing |
| 01.01.0002 | Transaction declined, invalid or malformed parameters |
| 01.01.0003 | Transaction is invalid |
| 01.01.0004 | Installment invalid. Please change it before trying again. |
| 01.01.0005 | Incorrect date format. |
| 01.02.0001 | Communication failure when reaching payment provider. Please try again later. |
| 01.02.0002 | Please submit the transaction again. |
| 01.03.0001 | Transaction declined |
| 01.03.0002 | Transaction declined, please contact the card issuer |
| 01.03.0003 | Transaction not allowed. |
| 01.03.0004 | Merchant, please contact us. |
| 01.03.0005 | Unauthorized. moderate risk Identified by the issuer. |
| 01.04.0001 | Card data might be wrong. Please check and try again. |
| 01.04.0002 | Invalid password. |
| 01.04.0003 | There is an issue with the destination account for this transaction, please contact the account provider or use a different account. |
| 01.04.0004 | There is an issue with the origin account for this transaction, please contact the account provider or use a different account. |
| 01.04.0005 | Invalid card data. |
| 01.04.0006 | Invalid bank branch |
| 01.04.0007 | Invalid bank account number |
| 01.04.0008 | The destination bank account doesnt belong to this account holder |
| 01.04.0009 | The origin bank account doesnt belong to this account holder |
| 01.04.0010 | Account not found |
| 01.04.0011 | Invalid transaction id |
| 01.04.0012 | Transaction not found |
| 01.04.0013 | Unauthorized. Nonexistent card. |
| 01.04.0014 | Transaction already sent. |
| 01.05.0001 | Transaction declined, referenced transaction can not be refunded, captured or reversed (already refunded, captured or reversed) |
| 01.05.0002 | Transaction declined, cannot refund (already refunded/reversed, invalid workflow or amount exceeded) |
| 01.05.0003 | Capture already performed or expired |
| 01.05.0004 | Reimbursement already performed, or amount requested above the allowed |
| 01.05.0005 | Transaction not allowed for this card. |
| 01.05.0006 | Amount is different from the approved pre-authorization. |
| 01.05.0007 | Please change the type of card from debit to credit. |
| 01.05.0008 | Please change the type of card from credit to debit. |
| 01.05.0009 | Transaction not authorized. Please try again. |
| 01.05.0010 | Transaction not authorized. Please try again using 3DS authentication. |
| 01.05.0011 | Card not elligible for international transactions. |
| 01.05.0012 | Card blocked. Please unblock the card before trying again. |
| 01.05.0013 | Unauthorized transaction. |
| 01.05.0014 | Insufficient balance or credit limit |
| 01.05.0015 | Scheduling denied |
| 01.05.0016 | The authentication required to validate the transaction failed |
| 01.05.0017 | This transaction is already being processed. |
| 01.05.0018 | Refund period expired |
| 01.05.0019 | Wrong authentication code |
| 01.05.0020 | Transaction not allowed for this type of product/service |
| 01.05.0021 | Expired card. Transaction cannot be resubmitted. Contact issuer. |
| 01.05.0022 | There is an issue with this card. Please contact the issuer. |
| 01.05.0023 | Unauthorized. Check the situation of the store with the card issuer. |
| 01.05.0024 | Unauthorized. Restricted card. |
| 01.05.0025 | Unauthorized. Card expired. |
| 01.05.0026 | Unauthorized. The card does not belong to the payment network. |
| 01.05.0027 | Unauthorized. Invalid security code. |
| 01.05.0028 | Cardholder not registered in the issuer's authentication program. |
| 01.05.0029 | Error trying to validate tax id document. |
| 01.05.0030 | Current payment status does not allow refund |
| 01.06.0001 | Blocked by firewall rules: %s |
| 01.06.0003 | Payment rejected by risk analysis. |
| 01.06.0004 | User limit exceeded. |
| 01.06.0005 | Configuration Error. |
| 01.07.0001 | The owner of the payment instrument revoked the permission for this transaction. |
| 01.08.0001 | transaction declined for unknown reason |
| 01.10.0001 | Exceeded attempts - Do not try again |
| 01.10.0002 | Transaction amount not allowed. Please check the transaction limits on you account. |
| 01.10.0003 | Limit for Invalid password attempts exceeded. Please contact the card issuer. |
| 01.10.0004 | Not authorized. Exceeded the limit of allowed transactions for the period |
| 01.11.0001 | TaxID suspended |
| 01.11.0002 | TaxID holder was declared deceased |
| 01.11.0003 | TaxID pending regularization |
| 01.11.0004 | TaxID canceled, the owner has a new TaxID number |
| 01.11.0005 | Impeached TaxID |
| 01.11.0006 | TaxID canceled by local authority |
| 01.11.0007 | Impeached Corporate TaxID |
| 01.11.0008 | Corporate TaxID suspended |
| 01.11.0009 | Corporate TaxID suspended |
| 01.11.0010 | Corporate TaxID is active but pending regularization |
| 01.11.0011 | Corporate TaxID canceled |
| 01.11.0012 | Tax ID doesnt exist |
| 01.11.0013 | CPF query for minors blocked in compliance with the General Data Protection Law - LGPD |
