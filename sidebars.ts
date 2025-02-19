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
      label: 'Get Updates',
      items: [
        'Get Updates/get-updates',
        'Get Updates/payment-status',
      ]
    },

  ],
  checkoutSidebar: [
    'Checkout/checkout',
    'Checkout/process-checkout-payment',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
