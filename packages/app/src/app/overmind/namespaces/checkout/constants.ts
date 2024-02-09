import { PricingPlan, CreditAddon, SandboxAddon } from './types';

// All values below are the base hardcoded values
// They get updated with the results from /api/pricing

export const FREE_PLAN: PricingPlan = {
  id: 'free',
  name: 'Free',
  price: 0,
  credits: 400,
  creditsNote: 'Ideal for hobbyists using Devboxes up to 40 hours a month.',
  sandboxes: 20,
  storage: 20,
  usage: [
    'Up to 40 hours worth of VM credits per month',
    '20 GB storage per VM',
    'VMs up to 4 vCPUs + 8 GB RAM',
    'Unlimited Devboxes and repositories',
    '20 Sandboxes',
    '10 personal drafts',
    '5 members',
  ],
  features: [
    'Private Sandboxes, Devboxes & repos',
    'Codeium AI code-completion',
    'Live collaboration',
    'VS Code extension',
    'Instant environment resume',
    'Instant environment share',
  ],
};

export const PRO_PLAN: PricingPlan = {
  id: 'flex',
  name: 'Pro',
  price: 9,
  priceDiscountNote: 'Early access discount',
  credits: 1000,
  creditsNote:
    'Ideal to get started with cloud development and understand your usage needs.',
  sandboxes: 100,
  storage: 50,
  features: ['All free features'],
  usage: [
    'Start from 100 hours worth of VM credits per month',
    '50 GB storage per VM',
    'VMs up to 16 vCPUs + 32 GB RAM',
    'Unlimited Devboxes and repositories',
    '100 Sandboxes',
    'Unlimited personal drafts',
    '20 members',
    'Access on-demand VM credits for $0.18 per hour',
  ],
};

export const ENTERPRISE_PLAN: PricingPlan = {
  id: 'enterprise',
  name: 'Enterprise',
  price: 0,
  credits: 0,
  sandboxes: 0,
  storage: 0,
  usage: [],
  features: [
    'Unlimited members',
    'Unlimited API',
    'VMs up to 64 vCPUs + 128 GB RAM',
    'On-premise options',
    'Private managed cloud',
    'Dedicated support',
    'SSO',
  ],
};

export const ADDON_CREDITS_500: CreditAddon = {
  id: 'credits_500',
  type: 'credits',
  credits: 500,
  price: 9,
};

export const ADDON_CREDITS_4000: CreditAddon = {
  id: 'credits_4000',
  type: 'credits',
  credits: 4000,
  price: 50,
  fullPrice: 72,
  discount: 30,
};

export const ADDON_CREDITS_24000: CreditAddon = {
  id: 'credits_24000',
  type: 'credits',
  credits: 24000,
  price: 216,
  fullPrice: 432,
  discount: 50,
};

export const ADDON_SANDBOXES_100: SandboxAddon = {
  id: 'sandboxes_100',
  type: 'sandboxes',
  sandboxes: 100,
  price: 9,
};

export const ADDON_SANDBOXES_400: SandboxAddon = {
  id: 'sandboxes_400',
  type: 'sandboxes',
  sandboxes: 400,
  price: 25,
  fullPrice: 36,
  discount: 30,
};

export const ADDON_SANDBOXES_1500: SandboxAddon = {
  id: 'sandboxes_1500',
  type: 'sandboxes',
  sandboxes: 1500,
  price: 68,
  fullPrice: 136,
  discount: 50,
};
