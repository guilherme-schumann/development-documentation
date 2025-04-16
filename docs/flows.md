---
displayed_sidebar: docSidebar
sidebar_position: 3
---

# Flows

## Macro Flow

1. Merchant registers at epag
2. Merchant receives sandbox credentials to access the sandbox Merchant Dashboard
3. Merchant generates a pair of API keys for the sandbox environment
4. Merchant integrates epag's API into Merchant's Store
5. Merchant receives production credentials to access the Merchant Dashboard
6. Merchant generates a pair of API keys
7. Merchant goes live
8. Merchant's customer makes a purchase on merchant's website
9. Merchant sends the transaction to Epag's API
10. Epag processes the transaction
11. Epag updates payment status

## API Macro FLow

1. Merchant authenticates against API and receives JWT Token
2. Merchant submits Payment data and receives, API response, Payment Id and initial status
3. Merchant is notified via webhook when the payment status changes
4. Merchant checks Payment status