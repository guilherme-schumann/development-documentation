import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSidebar: [
    'introduction',
    'considerations',
    'macroflow',
    'simulate-status',
    'payment-methods',
    'dealing-amounts-currencies',
    'decoding-qr-code-barcode',
    'credit-card-testing',
    'error-response',
    'callbacks',
    '3ds-sdk',
    'reports-model',
    {
      type: 'category',
      label: 'Auth',
      items: [
        'Auth/create-api-key',
        'Auth/get-access-token',
        'Auth/list-api-key',
        'Auth/revoke-api-key',
      ]
    },
    {
      type: 'category',
      label: 'Merchant',
      items: [
        'Merchant/list-contracts',
      ]
    },
    {
      type: 'category',
      label: 'Payments',
      items: [
        {
          type: 'category',
          label: 'Payments',
          items: [
            {
              type: 'category',
              label: 'Brazil',
              items: [
                'Payments/Payments/Brazil/simple-pix',
                'Payments/Payments/Brazil/simple-picpay',
                'Payments/Payments/Brazil/simple-boleto',
              ],
            },
            {
              type: 'category',
              label: 'Mexico',
              items: [
                'Payments/Payments/Mexico/simple-oxxo',
                'Payments/Payments/Mexico/simple-paynet',
                'Payments/Payments/Mexico/simple-spei',
                'Payments/Payments/Mexico/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Colombia',
              items: [
                'Payments/Payments/Colombia/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Costa Rica',
              items: [
                'Payments/Payments/Costa Rica/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Ecuador',
              items: [
                'Payments/Payments/Ecuador/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Guatemala',
              items: [
                'Payments/Payments/Guatemala/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Panama',
              items: [
                'Payments/Payments/Panama/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Peru',
              items: [
                'Payments/Payments/Peru/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Chile',
              items: [
                'Payments/Payments/Chile/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Honduras',
              items: [
                'Payments/Payments/Honduras/simple-paycash',
              ],
            },
            {
              type: 'category',
              label: 'Dominican Republic',
              items: [
                'Payments/Payments/Dominican Republic/simple-paycash',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Payment Order',
          items: [
            'Payments/Payment Order/create-payment-order',
            {
              type: 'category',
              label: 'Brazil',
              items: [
                {
                  type: 'category',
                  label: 'Pre Auth',
                  items: [
                    'Payments/Payment Order/Brazil/Pre Auth/capture-pre-auth-payment',
                    'Payments/Payment Order/Brazil/Pre Auth/cancel-pre-auth-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'Credit & Debit Card',
                  items: [
                    'Payments/Payment Order/Brazil/Credit & Debit Card/process-card-payment',
                    'Payments/Payment Order/Brazil/Credit & Debit Card/process-internal-3ds-payment',
                    'Payments/Payment Order/Brazil/Credit & Debit Card/process-external-3ds-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'PIX',
                  items: [
                    'Payments/Payment Order/Brazil/PIX/process-pix-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'Boleto',
                  items: [
                    'Payments/Payment Order/Brazil/Boleto/process-boleto-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'PicPay',
                  items: [
                    'Payments/Payment Order/Brazil/PicPay/process-picpay-payment',
                    'Payments/Payment Order/Brazil/PicPay/cancel-picpay-payment',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Mexico',
              items: [
                {
                  type: 'category',
                  label: 'OXXO',
                  items: [
                    'Payments/Payment Order/Mexico/OXXO/process-oxxo-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'Paynet',
                  items: [
                    'Payments/Payment Order/Mexico/Paynet/process-paynet-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'SPEI',
                  items: [
                    'Payments/Payment Order/Mexico/SPEI/process-spei-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'Paycash',
                  items: [
                    'Payments/Payment Order/Mexico/Paycash/process-paycash-payment',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Colombia',
              items: [
                'Payments/Payment Order/Colombia/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Costa Rica',
              items: [
                'Payments/Payment Order/Costa Rica/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Ecuador',
              items: [
                'Payments/Payment Order/Ecuador/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Guatemala',
              items: [
                'Payments/Payment Order/Guatemala/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Panama',
              items: [
                'Payments/Payment Order/Panama/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Peru',
              items: [
                'Payments/Payment Order/Peru/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Chile',
              items: [
                'Payments/Payment Order/Chile/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Honduras',
              items: [
                'Payments/Payment Order/Honduras/process-paycash-payment',
              ],
            },
            {
              type: 'category',
              label: 'Dominican Republic',
              items: [
                'Payments/Payment Order/Dominican Republic/process-paycash-payment',
              ],
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Refund',
      items: [
        'Refund/refund-content',
        'Refund/get-refund-request',
        'Refund/get-refund-requests-for-a-payment',
      ]
    },
    {
      type: 'category',
      label: 'ID Validation',
      items: [
        'ID Validation/id-validation',
        'ID Validation/Brazil/Brazil',
        'ID Validation/Brazil/get-tax-id-document-status',
      ]
    },
    {
      type: 'category',
      label: 'Transacton Updates',
      items: [
        'Transaction Updates/transaction-updates',
        'Transaction Updates/transaction-status',
        'Transaction Updates/transaction-status-by-reference',
      ]
    },
    {
      type: 'category',
      label: 'Supporting Data',
      items: [
        'Supporting Data/transaction-details',
        'Supporting Data/financial-institutions',
      ]
    },

  ],
  checkoutSidebar: [
    'Checkout/checkout',
    'Checkout/process-checkout-payment',
    'Checkout/capture-pre-auth-checkout-payment',
    'Checkout/cancel-pre-auth-checkout-payment',
    'Checkout/redirect-checkout',
    'Checkout/get-person-and-credit-card-id',
  ],
};

export default sidebars;
