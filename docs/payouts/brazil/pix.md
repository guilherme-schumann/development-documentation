---
displayed_sidebar: payoutsSidebar
---


# PIX

To send a payout to Brazil, the payout_method must be set to PIX. In the required_BR object, provide the PIX key of the customer.

```jsx
  https://api-sandbox.epag.io/payoutTransaction
```

## Additional Required Fields (Brazil)

| Field     | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `pix_key` | String | Yes      | Customer's PIX key (e.g., CPF, email, phone, or a UUID-based key). |

## Sample Request

```JSON
{
    "payoutTransactions": [
        {
            "original_amount": 10.00,
            "original_currency": "BRL",
            "payment_currency": "BRL",
            "payment_country": "BR",
            "payout_method": "PIX",
            "contract_id": "your_contract_id",
            "reference_id": "{{$guid}}",
            "notification_url": "{{notificationUrl}}",
            "ttl": 0,
            "required_BR": {
                "pix_key": "Payee's pix key"
            }
        }
    ]
}

```
