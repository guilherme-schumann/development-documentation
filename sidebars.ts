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
    'flows',
    'simulate-status',
    'payment-methods',
    'dealing-amounts-currencies',
    'decoding-qr-code-barcode',
    'credit-card-testing',
    'error-response',
    'callbacks',
    '3ds-sdk',
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
  paymentsSidebar: [
    {
      type: 'category',
      label: 'Brazil',
      items: [
        'Payments/Brazil/simple-pix',
        'Payments/Brazil/simple-picpay',
        'Payments/Brazil/simple-boleto',
        {
          type: 'category',
          label: 'Token Payment',
          items: [
            'Payments/Brazil/Token Payment/create-a-person-credit-card',
            'Payments/Brazil/Token Payment/process-token-payments',
            'Payments/Brazil/Token Payment/capture-pre-auth-token-payment',
            'Payments/Brazil/Token Payment/cancel-pre-auth-token-payment',
            'Payments/Brazil/Token Payment/delete-a-credit-card',
            'Payments/Brazil/Token Payment/delete-a-person',
            'Payments/Brazil/Token Payment/get-card-status',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Mexico',
      items: [
        'Payments/Mexico/simple-oxxo',
        'Payments/Mexico/simple-paynet',
        'Payments/Mexico/simple-spei',
        'Payments/Mexico/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Colombia',
      items: [
        'Payments/Colombia/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Costa Rica',
      items: [
        'Payments/Costa Rica/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Ecuador',
      items: [
        'Payments/Ecuador/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Guatemala',
      items: [
        'Payments/Guatemala/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Panama',
      items: [
        'Payments/Panama/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Peru',
      items: [
        'Payments/Peru/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Chile',
      items: [
        'Payments/Chile/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Honduras',
      items: [
        'Payments/Honduras/simple-paycash',
      ],
    },
    {
      type: 'category',
      label: 'Dominican Republic',
      items: [
        'Payments/Dominican Republic/simple-paycash',
      ],
    },
  ],
  twostepaymentsSidebar: [
    'Payment Order/create-payment-order',
    {
      type: 'category',
      label: 'Process Payment Order',
      items: [
        {
          type: 'category',
          label: 'Brazil',
          items: [
            {
              type: 'category',
              label: 'Pre Auth',
              items: [
                'Payment Order/Brazil/Pre Auth/capture-pre-auth-payment',
                'Payment Order/Brazil/Pre Auth/cancel-pre-auth-payment',
              ],
            },
            {
              type: 'category',
              label: 'Credit & Debit Card',
              items: [
                'Payment Order/Brazil/Credit & Debit Card/process-card-payment',
                'Payment Order/Brazil/Credit & Debit Card/process-internal-3ds-payment',
                'Payment Order/Brazil/Credit & Debit Card/process-external-3ds-payment',
              ],
            },
            {
              type: 'category',
              label: 'PIX',
              items: [
                'Payment Order/Brazil/PIX/process-pix-payment',
              ],
            },
            {
              type: 'category',
              label: 'Boleto',
              items: [
                'Payment Order/Brazil/Boleto/process-boleto-payment',
              ],
            },
            {
              type: 'category',
              label: 'PicPay',
              items: [
                'Payment Order/Brazil/PicPay/process-picpay-payment',
                'Payment Order/Brazil/PicPay/cancel-picpay-payment',
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
                'Payment Order/Mexico/OXXO/process-oxxo-payment',
              ],
            },
            {
              type: 'category',
              label: 'Paynet',
              items: [
                'Payment Order/Mexico/Paynet/process-paynet-payment',
              ],
            },
            {
              type: 'category',
              label: 'SPEI',
              items: [
                'Payment Order/Mexico/SPEI/process-spei-payment',
              ],
            },
            {
              type: 'category',
              label: 'Paycash',
              items: [
                'Payment Order/Mexico/Paycash/process-paycash-payment',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Colombia',
          items: [
            'Payment Order/Colombia/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Costa Rica',
          items: [
            'Payment Order/Costa Rica/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Ecuador',
          items: [
            'Payment Order/Ecuador/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Guatemala',
          items: [
            'Payment Order/Guatemala/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Panama',
          items: [
            'Payment Order/Panama/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Peru',
          items: [
            'Payment Order/Peru/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Chile',
          items: [
            'Payment Order/Chile/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Honduras',
          items: [
            'Payment Order/Honduras/process-paycash-payment',
          ],
        },
        {
          type: 'category',
          label: 'Dominican Republic',
          items: [
            'Payment Order/Dominican Republic/process-paycash-payment',
          ],
        },
      ],
    },
  ],
  reportsSidebar: [
    'Reports/reports',
  ],
};

export default sidebars;
