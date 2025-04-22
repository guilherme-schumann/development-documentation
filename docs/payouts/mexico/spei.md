---
displayed_sidebar: payoutsSidebar
---

# SPEI

To send a payout to Mexico, set the `payout_method` to `SPEI`. The `required_MX` object must include both the `bank_code` and `clabe` of the recipient.

```jsx
  https://api-sandbox.epag.io/payoutTransaction
```

## Additional Required Fields (Mexico)

| Field       | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| `bank_code` | Number | Yes      | Bank identifier code.                        |
| `clabe`     | String | Yes      | 18-digit bank account number (CLABE).        |

## Sample Request

```JSON
{
    "payoutTransactions": [
        {
            "original_amount": 200.00,
            "original_currency": "MXN",
            "payment_currency": "MXN",
            "payment_country": "MX",
            "payout_method": "SPEI",
            "contract_id": "your_contract_id",
            "reference_id": "{{$guid}}",
            "notification_url": "https://example.com/payout-callback",
            "ttl": 0,
            "required_MX": {
                "bank_code": 00000,
                "clabe": "Payee's clabe"
            }
        }
    ]
}
```