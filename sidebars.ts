import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  docSidebar: [
    'introduction',
    'considerations',
    'flows',
    'transaction-status-map',
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
        'auth/create-api-key',
        'auth/get-access-token',
        'auth/list-api-key',
        'auth/revoke-api-key',
      ]
    },
    {
      type: 'category',
      label: 'Merchant',
      items: [
        'merchant/list-contracts',
      ]
    },
    {
      type: 'category',
      label: 'Refund',
      items: [
        'refund/refund-content',
        'refund/get-refund-request',
        'refund/get-refund-requests-for-a-payment',
      ]
    },
    {
      type: 'category',
      label: 'ID Validation',
      items: [
        'id-validation/id-validation',
        'id-validation/brazil/brazil',
        'id-validation/brazil/get-tax-id-document-status',
      ]
    },
    {
      type: 'category',
      label: 'Transacton Updates',
      items: [
        'transaction-updates/transaction-updates',
        'transaction-updates/transaction-status',
        'transaction-updates/transaction-status-by-reference',
      ]
    },
    {
      type: 'category',
      label: 'Supporting Data',
      items: [
        'supporting-data/transaction-details',
        'supporting-data/financial-institutions',
      ]
    },

  ],
  checkoutSidebar: [
    'checkout/checkout',
    'checkout/process-checkout-payment',
    'checkout/capture-pre-auth-checkout-payment',
    'checkout/cancel-pre-auth-checkout-payment',
    'checkout/redirect-checkout',
    'checkout/get-person-and-credit-card-id',
  ],
  paymentsSidebar: [
    {
      type: 'category',
      label: 'Multiple Countries',
      items: [
        {
          type: 'category',
          label: 'Credit & Debit Card',
          items: [
            'payments/multiple-countries/credit-and-debit-card/credit-card',
            'payments/multiple-countries/credit-and-debit-card/credit-card-3ds',
            'payments/multiple-countries/credit-and-debit-card/debit-cards',
            {
              type: 'category',
              label: 'Token Payment',
              items: [
                'payments/multiple-countries/credit-and-debit-card/token-payment/create-a-person-credit-card',
                'payments/multiple-countries/credit-and-debit-card/token-payment/process-token-payments',
                'payments/multiple-countries/credit-and-debit-card/token-payment/capture-pre-auth-token-payment',
                'payments/multiple-countries/credit-and-debit-card/token-payment/cancel-pre-auth-token-payment',
                'payments/multiple-countries/credit-and-debit-card/token-payment/delete-a-credit-card',
                'payments/multiple-countries/credit-and-debit-card/token-payment/delete-a-person',
                'payments/multiple-countries/credit-and-debit-card/token-payment/get-card-status',
              ],
            },
          ],
        },
        'payments/multiple-countries/paycash',
      ],
    },
    {
      type: 'category',
      label: 'Brazil',
      items: [
        'payments/brazil/pix',
        'payments/brazil/picpay',
        'payments/brazil/boleto',
      ],
    },
    {
      type: 'category',
      label: 'Mexico',
      items: [
        'payments/mexico/oxxo',
        'payments/mexico/paynet',
        'payments/mexico/spei',
      ],
    },
  ],
  twostepaymentsSidebar: [
    'two-step-payments/create-payment-order',
    {
      type: 'category',
      label: 'Process Payment Order',
      items: [
      {
        type: 'category',
        label: 'Multiple Countries',
        items: [
          {
            type: 'category',
            label: 'Credit & Debit Card',
            items: [
              {
                type: 'category',
                label: 'Pre Auth',
                items: [
                  'two-step-payments/brazil/credit-and-debit-card/pre-auth/capture-pre-auth-payment',
                  'two-step-payments/brazil/credit-and-debit-card/pre-auth/cancel-pre-auth-payment',
                ],
              },
              'two-step-payments/brazil/credit-and-debit-card/process-card-payment',
              'two-step-payments/brazil/credit-and-debit-card/process-internal-3ds-payment',
              'two-step-payments/brazil/credit-and-debit-card/process-external-3ds-payment',
            ],
          },
          'two-step-payments/multiple-countries/paycash',
        ],
      },
        {
          type: 'category',
          label: 'Brazil',
          items: [
            {
              type: 'category',
              label: 'PIX',
              items: [
                'two-step-payments/brazil/pix/process-pix-payment',
              ],
            },
            {
              type: 'category',
              label: 'Boleto',
              items: [
                'two-step-payments/brazil/boleto/process-boleto-payment',
              ],
            },
            {
              type: 'category',
              label: 'PicPay',
              items: [
                'two-step-payments/brazil/picpay/process-picpay-payment',
                'two-step-payments/brazil/picpay/cancel-picpay-payment',
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
                'two-step-payments/mexico/oxxo/process-oxxo-payment',
              ],
            },
            {
              type: 'category',
              label: 'Paynet',
              items: [
                'two-step-payments/mexico/paynet/process-paynet-payment',
              ],
            },
            {
              type: 'category',
              label: 'SPEI',
              items: [
                'two-step-payments/mexico/spei/process-spei-payment',
              ],
            },
          ],
        },
      ],
    },
  ],
  reportsSidebar: [
    'reports/reports',
    'reports/understanding-reports-module',
    'reports/get-report-types',
    'reports/get-available-fields',
    'reports/retrieve-reports',
    'reports/execute-a-report',
    'reports/schedule-a-report',
    'reports/summary',
  ],
  payoutsSidebar: [
    'payouts/payouts',
    {
      type: 'category',
      label: 'Brazil',
      items: [
        'payouts/brazil/pix',
      ],
    },
    {
      type: 'category',
      label: 'Mexico',
      items: [
        'payouts/mexico/spei',
      ],
    },
  ],
};

export default sidebars;
