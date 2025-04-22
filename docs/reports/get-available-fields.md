---
displayed_sidebar: reportsSidebar
sidebar_position: 4
---

# Get Available Fields

## Endpoint

```jsx title="json"
GET /report/fields?reportType={REPORT_TYPE}
```

## Description

Returns a list of available fields for a specific report type.

## Response Example

```jsx title="json"
{
    "tableName": "Merchant",
    "fields": [
        {
            "id": 85,
            "alias": "Description",
            "name": "description",
            "data_type": "VARCHAR",
            "filters_operators": "=, !=, IN, NOT IN, LIKE, ILIKE",
            "wraps": ["UPPER", "LOWER", "TRIM", "LENGTH"]
        }
    ]
}
```