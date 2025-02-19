---
displayed_sidebar: docSidebar
sidebar_position: 12
---

# Reports

## Reports API Documentation

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
- <code>MIN:</code> Returns the smallest value in a column.  
- <code>MAX:</code> Returns the largest value in a column.  
- <code>STDDEV:</code> Calculates the standard deviation of values in a column. 

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
- <code>DATE:</code> Extracts a date from a datetime. (2024-12-06 08:10:00 => 2024-12-06).  
- <code>YEAR:</code> Extracts the year from a date or datetime. (2024-12-06 08:10:00 => 2024).  
- <code>QUARTER:</code> Extracts the quarter from a date or datetime. (2024-12-06 08:10:00 => 4).  
- <code>MONTH:</code> Extracts the month from a date or datetime. (2024-12-06 08:10:00 => 12).  
- <code>WEEK_OF_YEAR:</code> Extracts the week of the year from a date or datetime. (2024-12-06 08:10:00 => 49).  
- <code>DAY_OF_MONTH:</code> Extracts the day of the month from a date or datetime. (2024-12-06 => 6).  
- <code>DAY_OF_WEEK:</code> Extracts the day of the week from a date or datetime. (2024-12-06 => 5).  
- <code>DAY_OF_YEAR:</code> Extracts the day of the year from a date or datetime. (2024-12-06 => 341).  
- <code>HOUR:</code> Extracts the hour from a time or datetime. (2024-12-06 08:10:00 => 08).  
- <code>MINUTE:</code> Extracts the minute from a time or datetime. (2024-12-06 08:10:00 => 10).  
- <code>AGE_IN_MINUTES:</code> Calculates the elapsed time from a given date to the current date-time, returning the result in minutes. (2024-12-06 08:10:00, 2024-12-06 07:00:00 => 70).  
- <code>AGE_IN_HOURS:</code> Calculates the elapsed time from a given date to the current date-time, returning the result in hours. (2024-12-06 08:10:00, 2024-12-06 07:00:00 => 1.16).  
- <code>AGE_IN_DAYS:</code> Calculates the elapsed time from a given date to the current date-time, returning the result in days. (2024-12-06 08:10:00, 2024-10-01 07:00:00 => 65.01).  
- <code>AGE_IN_YEARS:</code> Calculates the elapsed time from a given date to the current date-time, returning the result in years. (2024-12-06 08:10:00, 2023-10-01 07:00:00 => 1.13).  


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

#### Available Arithmetic Operations

You can perform different types of calculations, such as:
- <code>Addition (+):</code> Summing multiple fields.
- <code>Subtraction (-):</code> Calculating differences between fields.  
- <code>Multiplication (*):</code> Multiplying values for weighted calculations.  
- <code>Division (/):</code> Finding ratios or percentages.  
- <code>Percentage (%):</code> Calculating percentage values based on fields.  

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

### Calculated Field

A Calculated Field allows you to perform arithmetic operations between multiple fields and return the result as a new field. This is useful for generating custom values in reports, such as net revenue, total sales, or profit margins. The result is exported in a CSV sheet for further analysis.
This will return a new column in the CSV sheet that represents the difference between Amount and Fee.

#### Available Arithmetic Operations

You can perform different types of calculations, such as:
- <code>Addition (+):</code> Summing multiple fields.
- <code>Subtraction (-):</code> Calculating differences between fields.  
- <code>Multiplication (*):</code> Multiplying values for weighted calculations.  
- <code>Division (/):</code> Finding ratios or percentages.  
- <code>Percentage (%):</code> Calculating percentage values based on fields.  

With Calculated Fields, you can generate dynamic reports tailored to your specific business needs.
Example Usage: Calculating Net Revenue

If you want to calculate the Net Revenue by subtracting the Fee from the Amount, you can use:

```jsx title="json"
{
    "fields": [ 
		{
			"arithmetic_operator": "-", 
			"field": { "id": 1 }
		},
		{
			"alias": "Net Revenue",
			"field": { "id": 10 }
		}
	]
}
```

#### Output CSV (After Calculation):

```csv title="CSV"
Transaction ID,Amount,Fee,Net Revenue
1001,500.00,20.00,480.00
1002,750.00,30.00,720.00
1003,1200.00,50.00,1150.00
```

#### Table example:

| Transaction ID      | Amount   | Fee   | Net Revenue |
|---------------------|----------|-------|-------------|
| 1001                | 500.00   | 20.00 | 480.00      |
| 1002                | 750.00   | 30.00 | 720.00      |
| 1003                | 1200.00  | 50.00 | 1150.00     |  


### Dynamic Values

Dynamic Values allow you to work with relative time-based data, automatically adjusting to the current date or predefined periods. These values help create flexible filters and reports without needing manual updates.

Available Dynamic Values:

- <code>CURRENT_YEAR:</code> Data from the current calendar year.  
- <code>CURRENT_MONTH:</code> Data from the current month.  
- <code>CURRENT_WEEK:</code> Data from the current week.  
- <code>CURRENT_DAY:</code> Data from today.  
- <code>NOW:</code> The exact current date and time.  
- <code>LAST_90_DAYS:</code> Data from the last 90 days.  
- <code>LAST_60_DAYS:</code> Data from the last 60 days.  
- <code>LAST_45_DAYS:</code> Data from the last 45 days.  
- <code>LAST_30_DAYS:</code> Data from the last 30 days.  
- <code>LAST_15_DAYS:</code> Data from the last 15 days.  
- <code>LAST_7_DAYS:</code> Data from the last 7 days.  
- <code>LAST_DAY:</code> Data from the last full day before today.  

Example Usage: Filtering Transactions from a Dynamic Time Range
If you want to retrieve only transactions from the current month, you can use:

```jsx title="json"
{
    "filters": [ 
        { 
            "field": { "id": 3 }, 
            "filter_operator": ">=", 
            "value": "CURRENT_MONTH"
        }
    ]
}
```

These values provide a flexible way to filter data dynamically, ensuring reports remain up to date without manual adjustments.

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

For further questions, contact **[support](/docs/introduction)**.



