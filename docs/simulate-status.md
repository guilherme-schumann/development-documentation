---
displayed_sidebar: docSidebar
sidebar_position: 4
---

# Simulate a Status

In order to simulate a status send the field <code>person_firstname</code> or the first word in the field <code>full_name</code> as indicated below ("surname" is just a placeholder in the examples, you can replace it if you want).

### PAID Status:

```jsx title="json"
"person_firstname": "PAID"
```

```jsx title="json"
"full_name": "PAID surname"
```

### Cancelled Status:

```json title="json"
"person_firstname": "CANCELED"
```

```json title="json"
"full_name": "CANCELED surname"
```

### In Analysis Status:

```json title="json"
"person_firstname": "IN_ANALYSIS"
```

```json title="json"
"full_name": "IN_ANALYSIS surname"
```

### Declined Status:

```json title="json"
"person_firstname": "DECLINED"
```

```json title="json"
"full_name": "DECLINED surname"
```

For the statuses related to refunds just issue refunds to a previously approved transaction. There is no automatic simulation for the statuses realted to disputes.