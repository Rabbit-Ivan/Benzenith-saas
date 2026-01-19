// Function to get environment variables
function getEnv(key: string): string | undefined {
  return process.env[key];
}

// Warning function
function warnMissingEnv(key: string, service: string): void {
  console.warn(`Warning: Missing environment variable ${key} for ${service} service. This service will not be available.`);
}

// Function to get environment variables for optional services
function getEnvForService(key: string, service: string): string | undefined {
  const value = getEnv(key);
  if (!value) {
    warnMissingEnv(key, service);
  }
  return value;
}

// Function to get environment variables for required services with development defaults
function requireEnvForService(key: string, service: string, devDefault?: string): string {
  const value = getEnv(key);
  if (!value) {
    // In development, use default values if provided
    if (process.env.NODE_ENV === 'development' && devDefault) {
      console.warn(`Warning: Using default value for ${key} in development. Set ${key} in .env file for production.`);
      return devDefault;
    }
    // During build time, return a placeholder to avoid build failures
    if (process.env.BUILD_TIME === 'true') {
      console.warn(`Warning: Missing ${key} for ${service} service during build. This will be validated at runtime.`);
      return `__BUILD_TIME_PLACEHOLDER_${key}__`;
    }
    throw new Error(`Missing required environment variable: ${key} for ${service} service. This service is required for the application to function.`);
  }
  return value;
}

// Function to get environment variables with fallback keys (tries keys in order)
function requireEnvWithFallback(keys: string[], service: string): string {
  for (const key of keys) {
    const value = getEnv(key);
    if (value) return value;
  }
  // During build time, return a placeholder to avoid build failures
  if (process.env.BUILD_TIME === 'true') {
    console.warn(`Warning: Missing ${keys.join(' or ')} for ${service} service during build. This will be validated at runtime.`);
    return `__BUILD_TIME_PLACEHOLDER_${keys[0]}__`;
  }
  throw new Error(`Missing ${keys.join(' or ')} for ${service}`);
}


// Plan type definitions

type BasePlan = {
  id: string;
  provider: string;
  amount: number;
  currency: string;
  recommended?: boolean;
  i18n: {
    [locale: string]: {
      name: string;
      description: string;
      duration: string;
      features: string[];
    }
  };
};

export type RecurringPlan = BasePlan & {
  duration: { type: 'recurring'; months: number };
  stripePriceId?: string | undefined;
  stripeProductId?: string | undefined;
  creemProductId?: string | undefined;
};

export type OneTimePlan = BasePlan & {
  duration: { type: 'one_time'; months: number };
  stripePriceId?: string | undefined;
  stripeProductId?: string | undefined;
  creemProductId?: string | undefined;
};

// Credit pack plan type for token-based consumption model
export type CreditPlan = BasePlan & {
  duration: { type: 'credits' };
  credits: number;  // Number of credits user receives after purchase
  stripePriceId?: string | undefined;
  stripeProductId?: string | undefined;
  creemProductId?: string | undefined;
};

export type Plan = RecurringPlan | OneTimePlan | CreditPlan;

/**
 * Application Configuration
 */
export const config = {
  /**
   * Application Configuration
   */
  app: {
    /**
     * Application Name
     * This will be used throughout the application for branding
     */
    name: 'TinyShip',

    /**
     * Base URL Configuration
     * This will be used for all callback URLs and webhooks
     */
    get baseUrl() {
      return requireEnvForService('APP_BASE_URL', 'Application', 'http://localhost:7001');
    },

    /**
     * Theme Configuration
     * Default theme and color scheme for the application
     */
    theme: {
      /**
       * Default theme mode
       * @type {'light' | 'dark'}
       */
      defaultTheme: 'light' as const,

      /**
       * Default color scheme
       * @type {'default' | 'claude' | 'cosmic-night' | 'modern-minimal' | 'ocean-breeze'}
       */
      defaultColorScheme: 'claude' as const,

      /**
       * Storage key for theme persistence
       */
      storageKey: 'tinyship-ui-theme'
    },

    /**
     * Internationalization Configuration
     * Default language and locale settings
     */
    i18n: {
      /**
       * Default locale
       * @type {'en' | 'zh-CN' | 'zh-TW' | 'ja'}
       */
      defaultLocale: 'zh-TW' as const,
      /**
       * Available locales
       */
      locales: ['zh-TW', 'zh-CN', 'ja', 'en'] as const,
      /**
       * Cookie key for locale persistence
       * Used by both Next.js middleware and Nuxt.js i18n module
       */
      cookieKey: 'NEXT_LOCALE',

      /**
       * Auto-detect browser language
       * When true, detects user's browser language preference
       * When false, always uses defaultLocale for new users
       * Cookie preferences always take priority when set
       */
      autoDetect: false
    },

    /**
     * Payment Related URLs
     */
    payment: {
      /**
       * Payment Success/Cancel URLs
       * These URLs will be used by payment providers for redirects
       * The locale middleware will automatically add locale prefix
       */
      get successUrl() {
        return `${config.app.baseUrl}/payment-success`;
      },
      get cancelUrl() {
        return `${config.app.baseUrl}/payment-cancel`;
      },
    }
  },
  /**
   * Authentication Service Configuration
   */
  auth: {
    requireEmailVerification: false,

    /**
     * Social Login Providers Configuration
     */
    socialProviders: {
      /**
       * Google OAuth Configuration
       */
      google: {
        get clientId() {
          return getEnvForService('GOOGLE_CLIENT_ID', 'Google Auth');
        },
        get clientSecret() {
          return getEnvForService('GOOGLE_CLIENT_SECRET', 'Google Auth');
        }
      },

      /**
       * GitHub OAuth Configuration
       */
      github: {
        get clientId() {
          return getEnvForService('GITHUB_CLIENT_ID', 'GitHub Auth');
        },
        get clientSecret() {
          return getEnvForService('GITHUB_CLIENT_SECRET', 'GitHub Auth');
        }
      },

      /**
       * WeChat OAuth Configuration
       */
      wechat: {
        get appId() {
          return getEnvForService('NEXT_PUBLIC_WECHAT_APP_ID', 'WeChat Auth');
        },
        get appSecret() {
          return getEnvForService('WECHAT_APP_SECRET', 'WeChat Auth');
        }
      }
    }
  },
  /**
   * Payment Configuration
   */
  payment: {
    /**
     * Available Payment Providers
     */
    providers: {
      /**
       * WeChat Pay Configuration
       */
      wechat: {
        get appId() {
          return requireEnvForService('WECHAT_PAY_APP_ID', 'WeChat Pay');
        },
        get mchId() {
          return requireEnvForService('WECHAT_PAY_MCH_ID', 'WeChat Pay');
        },
        get apiKey() {
          return requireEnvForService('WECHAT_PAY_API_KEY', 'WeChat Pay');
        },
        get notifyUrl() {
          // Must be a public URL; use a tunneling tool for local development.
          return requireEnvForService('WECHAT_PAY_NOTIFY_URL', 'WeChat Pay');
        },
        /**
         * WeChat Pay Certificates (PEM format with \n escape sequences)
         * These replace the need for certificate files
         */
        get privateKey() {
          const pemKey = requireEnvForService('WECHAT_PAY_PRIVATE_KEY', 'WeChat Pay');
          return Buffer.from(pemKey, 'utf8');
        },
        get publicKey() {
          const pemKey = requireEnvForService('WECHAT_PAY_PUBLIC_KEY', 'WeChat Pay');
          return Buffer.from(pemKey, 'utf8');
        },
        /**
         * WeChat Pay Payment Public Key (for signature verification)
         * This is the official WeChat Pay public key for verifying signatures
         */
        get paymentPublicKey() {
          const pemKey = getEnvForService('WECHAT_PAY_PAYMENT_PUBLIC_KEY', 'WeChat Pay Payment Public Key');
          return pemKey ? Buffer.from(pemKey, 'utf8') : undefined;
        },
        /**
         * WeChat Pay Public Key ID
         * This is used to identify which WeChat Pay public key to use for verification
         */
        get publicKeyId() {
          return getEnvForService('WECHAT_PAY_PUBLIC_KEY_ID', 'WeChat Pay Public Key ID');
        }
      },

      /**
       * Stripe Configuration
       */
      stripe: {
        get secretKey() {
          return requireEnvForService('STRIPE_SECRET_KEY', 'Stripe');
        },
        get publicKey() {
          return requireEnvForService('STRIPE_PUBLIC_KEY', 'Stripe');
        },
        get webhookSecret() {
          return requireEnvForService('STRIPE_WEBHOOK_SECRET', 'Stripe');
        }
      },

      /**
       * Creem Configuration
       */
      creem: {
        get apiKey() {
          return requireEnvForService('CREEM_API_KEY', 'Creem');
        },
        get serverUrl() {
          return getEnv('CREEM_SERVER_URL') || 'https://test-api.creem.io';
        },
        get webhookSecret() {
          return requireEnvForService('CREEM_WEBHOOK_SECRET', 'Creem');
        }
      }
    },

    /**
     * Subscription Plans
     */
    plans: {
      monthlyWechat: {
        provider: 'wechat',
        id: 'monthlyWechat',
        amount: 0.01,
        currency: 'CNY',
        duration: {
          months: 1,
          type: 'one_time'
        },
        i18n: {
          'en': {
            name: 'Wechat Monthly Plan',
            description: 'Monthly one time pay via WeChat Pay',
            duration: 'month',
            features: [
              'All premium features',
              'Priority support'
            ]
          },
          'zh-CN': {
            name: '微信支付月度',
            description: '通过微信支付的月度一次性支付',
            duration: '月',
            features: [
              '所有高级功能',
              '优先支持'
            ]
          },
          'zh-TW': {
            name: '微信支付月度',
            description: '透過微信支付的月度一次性支付',
            duration: '月',
            features: [
              '所有高級功能',
              '優先支援'
            ]
          },
          'ja': {
            name: 'WeChat 月額プラン',
            description: 'WeChat Payによる月額一括払い',
            duration: '月',
            features: [
              'すべてのプレミアム機能',
              '優先サポート'
            ]
          }
        }
      },
      monthly: {
        provider: 'stripe',
        id: 'monthly',
        amount: 10,
        currency: 'USD',
        duration: {
          months: 1,
          type: 'recurring'
        },
        // For Stripe, the subscription duration and price are defined by stripePriceId.
        // duration and amount are display-only; actual billing follows Stripe settings.
        stripePriceId: 'price_1RL2GgDjHLfDWeHDBHjoZaap',
        i18n: {
          'en': {
            name: 'Stripe Monthly Plan',
            description: 'Monthly recurring subscription via Stripe',
            duration: 'month',
            features: [
              'All premium features',
              'Priority support'
            ]
          },
          'zh-CN': {
            name: 'Stripe 月度订阅',
            description: '通过 Stripe 的月度循环订阅',
            duration: '月',
            features: [
              '所有高级功能',
              '优先支持'
            ]
          },
          'zh-TW': {
            name: 'Stripe 月度訂閱',
            description: '透過 Stripe 的月度循環訂閱',
            duration: '月',
            features: [
              '所有高級功能',
              '優先支援'
            ]
          },
          'ja': {
            name: 'Stripe 月額プラン',
            description: 'Stripeの月額定期購読',
            duration: '月',
            features: [
              'すべてのプレミアム機能',
              '優先サポート'
            ]
          }
        }
      },
      'monthly-pro': {
        provider: 'stripe',
        id: 'monthly-pro',
        amount: 20,
        currency: 'USD',
        duration: {
          months: 1,
          type: 'recurring'
        },
        stripePriceId: 'price_1RMmc4DjHLfDWeHDp9Xhpn5X',
        i18n: {
          'en': {
            name: 'Stripe Monthly Pro Plan',
            description: 'Premium monthly subscription with higher pricing',
            duration: 'month',
            features: [
              'All premium features',
              'Priority support',
              'Free lifetime updates'
            ]
          },
          'zh-CN': {
            name: 'Stripe 月度专业版',
            description: '高价位的月度专业订阅',
            duration: '月',
            features: [
              '所有高级功能',
              '优先支持',
              '终身免费更新'
            ]
          },
          'zh-TW': {
            name: 'Stripe 月度專業版',
            description: '高價位的月度專業訂閱',
            duration: '月',
            features: [
              '所有高級功能',
              '優先支援',
              '終身免費更新'
            ]
          },
          'ja': {
            name: 'Stripe 月額プロプラン',
            description: '高価格の月額プレミアム購読',
            duration: '月',
            features: [
              'すべてのプレミアム機能',
              '優先サポート',
              '生涯無料アップデート'
            ]
          }
        }
      },
      lifetime: {
        provider: 'stripe',
        id: 'lifetime',
        amount: 999,
        currency: 'USD',
        recommended: true,
        duration: {
          months: 999999,
          type: 'one_time'
        },
        stripePriceId: 'price_1RL2IcDjHLfDWeHDMCmobkzb',
        i18n: {
          'en': {
            name: 'Stripe Lifetime',
            description: 'One-time payment for permanent access',
            duration: 'lifetime',
            features: [
              'All premium features',
              'Priority support',
              'Free lifetime updates'
            ]
          },
          'zh-CN': {
            name: 'Stripe 终身会员',
            description: '一次性付费永久访问',
            duration: '终身',
            features: [
              '所有高级功能',
              '优先支持',
              '终身免费更新'
            ]
          },
          'zh-TW': {
            name: 'Stripe 終身會員',
            description: '一次性付費永久訪問',
            duration: '終身',
            features: [
              '所有高級功能',
              '優先支援',
              '終身免費更新'
            ]
          },
          'ja': {
            name: 'Stripe ライフタイム',
            description: '永久アクセスのための一括払い',
            duration: 'ライフタイム',
            features: [
              'すべてのプレミアム機能',
              '優先サポート',
              '生涯無料アップデート'
            ]
          }
        }
      },
      monthlyCreem: {
        provider: 'creem',
        id: 'monthlyCreem',
        amount: 10,
        currency: 'USD',
        duration: {
          months: 1,
          type: 'recurring'
        },
        creemProductId: 'prod_1M1c4ktVmvLgrNtpVB9oQf', // Will be set after creating product in Creem
        i18n: {
          'en': {
            name: 'Creem Monthly Plan',
            description: 'Monthly recurring subscription via Creem',
            duration: 'month',
            features: [
              'All premium features',
              'Priority support'
            ]
          },
          'zh-CN': {
            name: 'Creem 月度订阅',
            description: '通过Creem的月度循环订阅',
            duration: '月',
            features: [
              '所有高级功能',
              '优先支持'
            ]
          },
          'zh-TW': {
            name: 'Creem 月度訂閱',
            description: '透過Creem的月度循環訂閱',
            duration: '月',
            features: [
              '所有高級功能',
              '優先支援'
            ]
          },
          'ja': {
            name: 'Creem 月額プラン',
            description: 'Creemの月額定期購読',
            duration: '月',
            features: [
              'すべてのプレミアム機能',
              '優先サポート'
            ]
          }
        }
      },
      monthlyCreemOneTime: {
        provider: 'creem',
        id: 'monthlyCreemOneTime',
        amount: 10,
        currency: 'USD',
        duration: {
          months: 1,
          type: 'one_time'
        },
        creemProductId: 'prod_5BeCtf2LS6KcOvtLuPIpHz', // Will be set after creating product in Creem
        i18n: {
          'en': {
            name: 'Creem Monthly Plan (One Time)',
            description: 'One-time payment for monthly access via Creem',
            duration: 'month',
            features: [
              'All premium features',
              'Priority support'
            ]
          },
          'zh-CN': {
            name: 'Creem 月度订阅 (一次性)',
            description: '通过Creem的一次性月度付费',
            duration: '月',
            features: [
              '所有高级功能',
              '优先支持'
            ]
          },
          'zh-TW': {
            name: 'Creem 月度訂閱 (一次性)',
            description: '透過Creem的一次性月度付費',
            duration: '月',
            features: [
              '所有高級功能',
              '優先支援'
            ]
          },
          'ja': {
            name: 'Creem 月額プラン（一回払い）',
            description: 'Creemによる月額アクセスの一回払い',
            duration: '月',
            features: [
              'すべてのプレミアム機能',
              '優先サポート'
            ]
          }
        }
      },

      // Credit pack plans - Token-based consumption model
      credits100: {
        provider: 'stripe',
        id: 'credits100',
        amount: 5,
        currency: 'USD',
        duration: { type: 'credits' },
        credits: 100,
        stripePriceId: 'price_1SiVbxDjHLfDWeHDQ4BNtUNT', // Set after creating price in Stripe dashboard
        i18n: {
          'en': {
            name: '100 Credits Stripe',
            description: 'Purchase 100 AI credits for on-demand usage',
            duration: 'one-time',
            features: [
              '100 AI conversations',
              'Credits never expire',
              'Pay as you go'
            ]
          },
          'zh-CN': {
            name: '100 积分包 Stripe',
            description: '通过 Stripe 购买的 100 个 AI 积分，按需使用',
            duration: '一次性',
            features: [
              '100 次 AI 对话',
              '积分永不过期',
              '按需付费'
            ]
          },
          'zh-TW': {
            name: '100 積分包 Stripe',
            description: '透過 Stripe 購買的 100 個 AI 積分，按需使用',
            duration: '一次性',
            features: [
              '100 次 AI 對話',
              '積分永不過期',
              '按需付費'
            ]
          },
          'ja': {
            name: '100 クレジット Stripe',
            description: 'オンデマンド利用のためのAIクレジット100を購入',
            duration: '一回払い',
            features: [
              'AI会話100回',
              'クレジットは失効しません',
              '従量課金'
            ]
          }
        }
      },
      credits500: {
        provider: 'wechat',
        id: 'credits500',
        amount: 0.01,
        currency: 'CNY',
        recommended: true,
        duration: { type: 'credits' },
        credits: 550,  // 500 + 50 bonus
        i18n: {
          'en': {
            name: '500 Credits + 50 Bonus Wechat Pay',
            description: 'Best value! Get 550 credits for the price of 500',
            duration: 'one-time',
            features: [
              '550 AI conversations (50 bonus)',
              'Credits never expire',
              'Best value package'
            ]
          },
          'zh-CN': {
            name: '500 积分包 + 50 赠送 微信支付',
            description: '超值优惠！以 500 积分的价格获得 550 积分',
            duration: '一次性',
            features: [
              '550 次 AI 对话 (含 50 赠送)',
              '积分永不过期',
              '最超值套餐'
            ]
          },
          'zh-TW': {
            name: '500 積分包 + 50 贈送 微信支付',
            description: '超值優惠！以 500 積分的價格獲得 550 積分',
            duration: '一次性',
            features: [
              '550 次 AI 對話 (含 50 贈送)',
              '積分永不過期',
              '最超值套餐'
            ]
          },
          'ja': {
            name: '500 クレジット + 50 ボーナス WeChat Pay',
            description: 'お得！500の価格で550クレジット',
            duration: '一回払い',
            features: [
              'AI会話550回（50ボーナス）',
              'クレジットは失効しません',
              '最もお得なパッケージ'
            ]
          }
        }
      }
    } as const,
  },

  /**
   * Credits System Configuration
   * Token-based consumption model for AI and other features
   */
  credits: {
    /**
     * Consumption mode: 'fixed' or 'dynamic'
     * - fixed: Each operation consumes a fixed amount of credits
     * - dynamic: Credits consumed based on actual token usage
     */
    consumptionMode: 'dynamic' as 'fixed' | 'dynamic',

    /**
     * Fixed consumption amounts (used when consumptionMode is 'fixed')
     */
    fixedConsumption: {
      aiChat: 1,  // Credits per AI chat message
      // Future extensions:
      // aiImage: 5,
      // apiCall: 2,
    },

    /**
     * Dynamic consumption settings (used when consumptionMode is 'dynamic')
     */
    dynamicConsumption: {
      // Tokens to credits conversion ratio
      tokensPerCredit: 1000,  // 1000 tokens = 1 credit

      // Model-specific multipliers (adjust pricing per model)
      modelMultipliers: {
        // Premium models cost more
        'gpt-4': 2.0,
        'gpt-4-turbo': 1.5,
        'qwen-max': 1.2,
        // Standard models
        'gpt-3.5-turbo': 1.0,
        'qwen-plus': 1.0,
        'deepseek-chat': 0.8,
        // Economy models
        'qwen-turbo': 0.5,
        'default': 1.0
      } as Record<string, number>
    }
  },

  /**
   * SMS Service Configuration
   */
  sms: {
    /**
     * Default SMS Provider
     */
    defaultProvider: 'aliyun',

    /**
     * Aliyun SMS Configuration
     */
    aliyun: {
      // Optional service, using warning instead of error
      get accessKeyId() {
        return getEnvForService('ALIYUN_ACCESS_KEY_ID', 'Aliyun SMS');
      },
      get accessKeySecret() {
        return getEnvForService('ALIYUN_ACCESS_KEY_SECRET', 'Aliyun SMS');
      },
      get endpoint() {
        return getEnv('ALIYUN_SMS_ENDPOINT') || 'dysmsapi.aliyuncs.com';
      },
      get signName() {
        return getEnvForService('ALIYUN_SMS_SIGN_NAME', 'Aliyun SMS');
      },
      get templateCode() {
        return getEnvForService('ALIYUN_SMS_TEMPLATE_CODE', 'Aliyun SMS');
      },
    },

    /**
     * Twilio SMS Configuration
     */
    twilio: {
      // Optional service, using warning instead of error
      get accountSid() {
        return getEnvForService('TWILIO_ACCOUNT_SID', 'Twilio SMS');
      },
      get authToken() {
        return getEnvForService('TWILIO_AUTH_TOKEN', 'Twilio SMS');
      },
      get defaultFrom() {
        return getEnvForService('TWILIO_DEFAULT_FROM', 'Twilio SMS');
      },
    }
  },

  /**
   * Email Service Configuration
   */
  email: {
    /**
     * Default Email Provider
     */
    defaultProvider: 'resend',

    /**
     * Default Sender Email
     */
    get defaultFrom() {
      return getEnvForService('EMAIL_DEFAULT_FROM', 'Email Service');
    },

    /**
     * Resend Configuration
     */
    resend: {
      // Optional service, using warning instead of error
      get apiKey() {
        return getEnvForService('RESEND_API_KEY', 'Resend Email');
      }
    },
  },

  /**
   * Captcha Service Configuration
   */
  captcha: {
    /**
     * Enable/Disable Captcha Verification
     */
    enabled: false,

    /**
     * Default Captcha Provider
     */
    defaultProvider: 'cloudflare-turnstile',

    /**
     * Cloudflare Turnstile Configuration
     */
    cloudflare: {
      // Server-side secret key (used by better-auth).
      get secretKey() {
        // Fall back to a test key in development.
        if (process.env.NODE_ENV === 'development') {
          return '1x0000000000000000000000000000000AA'; // Test site key.
        }
        return getEnvForService('TURNSTILE_SECRET_KEY', 'Cloudflare Turnstile');
      },
      // Client-side site key (with NEXT_PUBLIC_ prefix).
      get siteKey() {
        // Fall back to a test key in development.
        if (process.env.NODE_ENV === 'development') {
          return '1x00000000000000000000AA'; // Test site key.
        }
        // Access process.env directly; dotenv is not available on the client.
        const publicKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
        if (publicKey) return publicKey;

        // Required in production.
        return getEnvForService('TURNSTILE_SITE_KEY', 'Cloudflare Turnstile');
      }
    }
  },

  /**
   * Database Configuration
   */
  database: {
    // Required core service, using error instead of warning
    get url() {
      return requireEnvForService('DATABASE_URL', 'Database', 'postgresql://username:password@localhost:5432/database_name');
    }
  },

  /**
   * Storage Configuration
   */
  storage: {
    /**
     * Default Storage Provider
     * @type {'oss' | 's3' | 'r2'}
     */
    get defaultProvider() {
      const provider = getEnv('STORAGE_PROVIDER');
      if (provider && ['oss', 's3', 'r2'].includes(provider)) {
        return provider as 'oss' | 's3' | 'r2';
      }
      return 'oss' as const;
    },

    /**
     * Alibaba Cloud OSS Configuration
     * Note: OSS can reuse ALIYUN_ACCESS_KEY_ID/SECRET if OSS_ACCESS_KEY_ID/SECRET are not set
     */
    oss: {
      get region() {
        return getEnv('OSS_REGION') || 'oss-cn-shanghai';
      },
      get accessKeyId() {
        // Fallback to ALIYUN_ACCESS_KEY_ID if OSS_ACCESS_KEY_ID is not set
        return requireEnvWithFallback(['OSS_ACCESS_KEY_ID', 'ALIYUN_ACCESS_KEY_ID'], 'Alibaba Cloud OSS');
      },
      get accessKeySecret() {
        // Fallback to ALIYUN_ACCESS_KEY_SECRET if OSS_ACCESS_KEY_SECRET is not set
        return requireEnvWithFallback(['OSS_ACCESS_KEY_SECRET', 'ALIYUN_ACCESS_KEY_SECRET'], 'Alibaba Cloud OSS');
      },
      get bucket() {
        return getEnv('OSS_BUCKET') || 'tinyship';
      },
      get endpoint() {
        return getEnv('OSS_ENDPOINT') || 'oss-cn-shanghai.aliyuncs.com';
      },
      defaultExpiration: 60, // 1 minute in seconds
    },

    /**
     * AWS S3 Configuration
     */
    s3: {
      get region() {
        return getEnv('S3_REGION') || 'us-east-1';
      },
      get accessKeyId() {
        return requireEnvForService('S3_ACCESS_KEY_ID', 'AWS S3');
      },
      get accessKeySecret() {
        return requireEnvForService('S3_ACCESS_KEY_SECRET', 'AWS S3');
      },
      get bucket() {
        return getEnv('S3_BUCKET') || 'tinyship';
      },
      get endpoint() {
        return getEnvForService('S3_ENDPOINT', 'AWS S3');
      },
      get forcePathStyle() {
        return getEnv('S3_FORCE_PATH_STYLE') === 'true';
      },
      defaultExpiration: 3600, // 1 hour in seconds
    },

    /**
     * Cloudflare R2 Configuration
     * R2 is S3-compatible, uses S3Provider under the hood
     */
    r2: {
      get accountId() {
        return requireEnvForService('R2_ACCOUNT_ID', 'Cloudflare R2');
      },
      get accessKeyId() {
        return requireEnvForService('R2_ACCESS_KEY_ID', 'Cloudflare R2');
      },
      get accessKeySecret() {
        return requireEnvForService('R2_ACCESS_KEY_SECRET', 'Cloudflare R2');
      },
      get bucket() {
        return getEnv('R2_BUCKET') || 'tinyship';
      },
      defaultExpiration: 3600, // 1 hour in seconds
    }
  },

  /**
   * AI Chat Configuration
   */
  ai: {
    /**
     * Default AI Provider
     * @type {'qwen' | 'deepseek' | 'openai'}
     */
    defaultProvider: 'qwen' as const,

    /**
     * Default Model for each provider
     */
    defaultModels: {
      qwen: 'qwen-turbo',
      deepseek: 'deepseek-chat',
      openai: 'gpt-5'
    },

    /**
     * Available Models for each provider
     * These will be displayed in the model selector dropdown
     */
    availableModels: {
      qwen: ['qwen-max', 'qwen-plus', 'qwen-turbo'],
      deepseek: ['deepseek-chat', 'deepseek-coder'],
      openai: ['gpt-5', 'gpt-5-codex', 'gpt-5-pro']
    },

    /**
     * Provider API Keys Configuration
     * Note: These are configured via environment variables in libs/ai/config.ts
     * - QWEN_API_KEY and QWEN_BASE_URL
     * - DEEPSEEK_API_KEY
     * - OPENAI_API_KEY and OPENAI_BASE_URL
     */
  },
} as const;
