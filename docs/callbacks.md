---
sidebar_position: 10
---

# Callbacks

If the <code>notification_url</code> was provided when creating the payment, you will receive a callback as soon as the payment status changes from one of the following IPs: **34.202.209.44**, **34.198.208.154**.

```jsx title="json"
{
    "reference_id": "REFERENCE_ID",
    "payment_token": "PAYMENT_TOKEN"
}
```

Once the callback received, check the updated status of the payment via **[Payments Status](#payments-status)**