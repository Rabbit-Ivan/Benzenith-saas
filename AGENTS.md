# 项目协作说明

## 项目概述
本项目为 TinyShip 的 monorepo 落地版本，用于 Benzenith 高端珠宝品牌官网与会员体系建设，侧重品牌展示、国际化内容与会员/后台管理能力。支付等能力保留在模板中，可按业务需要启用或关闭。

## 安装、运行与构建

### 环境要求
- Node.js >= 22.20.0
- PNPM >= 9.0.0
- PostgreSQL >= 13.0

### 安装
1. 复制环境变量模板：`cp env.example .env`
2. 安装依赖：`pnpm install`

### 环境变量
- 必填（基础启动）：`APP_BASE_URL`、`DATABASE_URL`、`BETTER_AUTH_SECRET`、`BETTER_AUTH_URL`
- 常用可选：OAuth（Google/GitHub/微信）、邮件（Resend）、短信（阿里云/Twilio）、支付（微信/Stripe/CREEM）、存储（OSS/S3/R2）、AI（OpenAI/Qwen/DeepSeek）、验证码（Turnstile）
- 完整字段与示例见 `env.example`

### 运行
- 仅启动 Next.js 主站：`pnpm dev`
- 启动 Nuxt 应用：`pnpm dev:nuxt`
- 启动文档站点：`pnpm dev:docs`

### 构建与启动
- Next.js：`pnpm build:next`、`pnpm start:next`
- Nuxt：`pnpm build:nuxt`、`pnpm start:nuxt`
- Docs：`pnpm build:docs`、`pnpm start:docs`

### 其他常用命令
- 测试：`pnpm test`、`pnpm test:watch`
- 数据库：`pnpm db:generate`、`pnpm db:migrate`、`pnpm db:seed`、`pnpm db:studio`

## 目录结构、页面路由与 API

### 目录结构
- `apps/next-app/`：官网主应用（Next.js App Router）
- `apps/nuxt-app/`：Nuxt 应用（可选）
- `apps/docs-app/`：文档站点
- `libs/`：共享能力（auth、database、payment、email、sms、storage、ai、i18n、permissions、ui、validators 等）
- `docs/`：项目文档
- `openspec/`：OpenSpec 规范与变更
- `tests/`：测试用例

### 页面路由（Next.js）
以下路由均包含 `/{lang}` 语言前缀（如 `zh-CN`、`en`）。

- 官网页面：
  - `/{lang}/`
  - `/{lang}/about`
  - `/{lang}/brand-story`
  - `/{lang}/category/[categoryId]`
  - `/{lang}/product/[productId]`
  - `/{lang}/news`
  - `/{lang}/news/[id]`
  - `/{lang}/news/tag/[tag]`
  - `/{lang}/contact`
  - `/{lang}/cart`
  - `/{lang}/privacy-policy`
  - `/{lang}/test-validator-nextjs`
- 认证相关：
  - `/{lang}/signin`
  - `/{lang}/signup`
  - `/{lang}/forgot-password`
  - `/{lang}/reset-password`
  - `/{lang}/cellphone`
  - `/{lang}/wechat`
- 后台管理：
  - `/{lang}/admin`
  - `/{lang}/admin/users`
  - `/{lang}/admin/users/[id]`
  - `/{lang}/admin/orders`
  - `/{lang}/admin/subscriptions`

### API 接口（Next.js Route Handlers）
接口统一位于 `apps/next-app/app/api`，路由前缀为 `/api`。

- 认证：`/api/auth/[...all]`
- 健康检查：`/api/health`
- 上传：`/api/upload`
- 聊天：`/api/chat`
- 积分/额度：`/api/credits/balance`、`/api/credits/status`、`/api/credits/transactions`
- 会员：`/api/members/register`
- 用户：`/api/users/[id]`
- 订单：`/api/orders`
- 订阅：`/api/subscription/status`、`/api/subscription/portal`
- 后台管理：
  - `/api/admin/users`
  - `/api/admin/users/update`
  - `/api/admin/users/delete`
  - `/api/admin/orders`
  - `/api/admin/subscriptions`
- 支付：
  - `/api/payment/initiate`
  - `/api/payment/query`
  - `/api/payment/cancel`
  - `/api/payment/webhook/stripe`
  - `/api/payment/verify/stripe`
  - `/api/payment/webhook/creem`
  - `/api/payment/verify/creem`
  - `/api/payment/webhook/wechat`

## 技术栈与依赖说明
- 前端：Next.js 15（App Router）、Nuxt 3（可选）、TypeScript、Tailwind CSS、shadcn/ui
- 后端/数据：PostgreSQL、Drizzle ORM、Better-Auth
- 构建与测试：PNPM 工作空间、Turborepo、Vitest
- 业务能力：邮件（Resend）、短信（阿里云/Twilio）、支付（微信/Stripe/CREEM）、存储（OSS/S3/R2）、AI（OpenAI/Qwen/DeepSeek）
- 部署：Docker（可选）

## OpenSpec 指引（由工具维护）
<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->
