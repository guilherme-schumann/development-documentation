---
displayed_sidebar: reportsSidebar
sidebar_position: 5
---

# Retrieve Reports

## Endpoint

```jsx title="json"
GET /report?size=3
```

## Description

Returns a list of reports created by the merchant.

## Response Example

```jsx title="json"
{
    "content": [
        {
            "id": 173,
            "name": "Pi1135",
            "folder": "Admin",
            "report_type": "PAYIN",
            "enable": true
        }
    ],
    "totalElements": 25
}
```