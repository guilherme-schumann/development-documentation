---
displayed_sidebar: reportsSidebar
sidebar_position: 7
---

# Schedule a Report

## Endpoint

```jsx title="json"
POST /schedule
```

## Description

Allows scheduling a report to be run at a specific time.

## Response Example

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