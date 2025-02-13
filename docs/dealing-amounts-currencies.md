---
sidebar_position: 6
---

# Dealing with Amounts and Currencies

Our system displays many kinds of amounts in several contexts, here is a summary to help you make sure you do calculations right on your side.

Here are some of the amounts merchants will see in our API:
- original_amount
- original_asset
- amount
- customer_fees
- customer_amount
- asset
- amount_received

## Order Amount and Order Currency

Merchants have the flexibility to process transactions in currencies different from the local currency of the transaction's location. For instance, a merchant preferring to maintain pricing in USD while conducting sales in Brazil can submit prices in USD to our API. In such scenarios, currency conversion occurs automatically, allowing customers to view the prices in their local currency.

Conversely, if merchants submit amounts in the local currency, no currency conversion is necessary. The decision on currency usage rests with the merchants, providing them the autonomy to choose their preferred approach.

The relevant financial figures pertaining to this discussion include:

- **Original Amount**
- **Original Asset** (currency symbol)

## Payment Amount and Payment Currency

Is the amount and denomination requested by us to the payer, and in which the payment will be actually done.

The following fileds are included in this category and are denominated in payment currency:

- **<code>amount</code>**
- **<code>customer_fees</code>**
- **<code>customer_amount</code>**
- **<code>amount_received</code>**
- **<code>asset</code>** (the local currency symbol) 

There are a few amounts in the system with this denomination:

- **amount**: This is the calculated figure that incorporates the values provided in the original_amount and original_asset fields. If necessary, this amount is converted into the payment currency (typically the local currency). The "Amount" serves as the foundational value for determining the Customer Amount.
- **Customer Amount**: Should a merchant impose fees to be borne by the customers, our system will calculate these fees and add them to the "Amount" to derive the "Customer Amount." This figure represents the total charge presented to the payer. In the absence of additional fees, the "Customer Amount" will match the "Amount.
- **Amount Received**: This is the sum actually paid by the payer, which usually corresponds to the "Customer Amount.
- **Merchant Amount**: Merchants can anticipate having this amount included in a settlement. It is calculated as the "Amount" less any applicable processing fees.