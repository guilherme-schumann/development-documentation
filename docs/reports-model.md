---
sidebar_position: 12
---

# Reports Model

## Reports Module API Documentation

### Introduction

The Reports Module API allows merchants to generate customized reports in CSV format using an API. Users can select report types, specify fields, apply filters, and define sorting options. Future enhancements will include a user interface, but currently, all operations are executed via API requests.

---

### Base URL
<code>http://api.letpay.io/ma/reports-module/</code>

## 1. Understanding Reports Module

### What can you do?
- Create custom reports by selecting relevant fields.
- Filter data based on dynamic and static values.
- Apply aggregation functions to summarize data.
- Group and order results for better readability.
- Schedule reports to be generated at specific times.

### Key Concepts

### Filtering

Filtering allows you to extract specific data by setting conditions. For example, if you want only payments made in the last 7 days:

```jsx title="json"
{
    "filters": [
        {
            "field": { "id": 3 },
            "filter_operator": ">=",
            "value": "LAST_7_DAYS"
        }
    ]
}
```

This filter ensures only transactions that happened in the last 7 days are included in the report.

### Aggregation

Aggregation helps summarize data by using functions like:

- <code>SUM:</code> Adds all values in a column.
- <code>AVG:</code> Calculates the average value.
- <code>COUNT:</code> Counts the number of occurrences.

Example: To get the total amount of payments received:

```jsx title="json"
{
    "fields": [
        {
            "alias": "Total Amount",
            "field": { "id": 1 },
            "aggregation_operator": "SUM"
        }
    ]
}
```

This will return a single value representing the sum of all payments.

### Grouping

Grouping organizes data by a particular field. If you want to see the total amount per merchant:

```jsx title="json"
{
    "group_by": ["merchant_id"],
    "fields": [
        {
            "alias": "Merchant ID",
            "field": { "id": 92 }
        },
        {
            "alias": "Total Amount",
            "field": { "id": 1 },
            "aggregation_operator": "SUM"
        }
    ]
}
```

This groups transactions by merchant and calculates the total amount per merchant.

### Wrapping Functions

Wrapping allows modifying text fields, for example:

- <code>UPPER:</code> Converts text to uppercase.
- <code>LOWER:</code> Converts text to lowercase.
- <code>TRIM:</code> Removes leading and trailing spaces.
- <code>LENGTH:</code> Returns the number of characters in a string.

Example: To get merchant names in uppercase:

```jsx title="json"
{
    "fields": [
        {
            "alias": "Uppercase Merchant Name",
            "field": { "id": 68 },
            "wrap": "UPPER"
        }
    ]
}
```

### Aliases

Aliases allow renaming columns for better readability. Instead of displaying raw field names, you can define user-friendly names. Example:

```jsx title="json"
{
    "fields": [
        {
            "alias": "Transaction Amount",
            "field": { "id": 1 }
        }
    ]
}
```

This changes the column name from <code>amount</code> to <code>Transaction Amount</code> in the report.

### Arithmetic Operations

You can perform calculations between fields, such as:
- Subtracting fees from the total amount.
- Summing multiple columns.

Example: To calculate net revenue (Amount - Fee):

```jsx title="json"
{
    "fields": [
        {
            "alias": "Net Revenue",
            "arithmetic_operator": "-",
            "field": { "id": 1 },
          },
          {
   "field": { "id": 10 }
           }
    ]
}
```

This returns the difference between <code>Amount</code> and <code>Fee</code>.

## 2. Get Report Types

### Endpoint

```jsx title="json"
GET /report/types
```

### Description

Returns the list of available report types.

### Response Example

```jsx title="json"
[
    "PAYIN",
    "PAYOUT",
    "MERCHANT",
    "FINANCE",
    "PERSON"
]
```

## 3. Get Available Fields

### Endpoint

```jsx title="json"
GET /report/fields?reportType={REPORT_TYPE}
```

### Description

Returns a list of available fields for a specific report type.

### Response Example

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

## 4. Retrieve Reports

### Endpoint

```jsx title="json"
GET /report?size=3
```

### Description

Returns a list of reports created by the merchant.

### Response Example

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

## 5. Execute a Report

### Endpoint

```jsx title="json"
POST /report/execute/{reportId}
```

### Description

Executes a stored report and returns the generated CSV.

## 6. Schedule a Report

### Endpoint

```jsx title="json"
POST /schedule
```

### Description

Allows scheduling a report to be run at a specific time.

### Response Example

```jsx title="json"
{
    "report": {
        "id": 183
    },
    "run_every": "DAILY",
    "run_at": "17:01:00",
    "recipient": "example@email.com",
    "enable": true
}
```

## 7. Summary

The Reports Module API enables merchants to create customized reports, apply filters, aggregate data, and schedule executions. It provides flexibility to format reports according to business needs.

For further questions, contact **[support](#support)**.



