# Benzenith 官方网站

**中文** | [English](./README_EN.md)

![Build Status](https://github.com/vikingmute/tinyship/actions/workflows/ci.yml/badge.svg)

✨ Benzenith 高端珠宝品牌官方网站，基于 Next.js 构建的现代化企业级展示平台。

## 📑 目录

- [🏢 关于 Benzenith](#-关于-benzenith)
- [🚀 快速开始](#-快速开始)
- [📁 项目结构](#-项目结构)
- [🌐 页面路由](#-页面路由)
- [✨ 核心特性](#-核心特性)
- [📦 技术栈](#-技术栈)
- [🌐 国际化支持](#-国际化支持)
- [📖 开发指南](#-开发指南)

## 🏢 关于 Benzenith

Benzenith 是一个高端珠宝品牌，致力于将精湛工艺与现代设计融合。本项目用于品牌展示与会员体系建设，不包含支付功能。

## 🚀 快速开始

详细的安装说明和配置指南，请参阅我们的[开始指南](./docs/user-guide/overview.md)。

## 📁 项目结构

```text
tinyship/
├── apps/
│   ├── next-app/          # 官网主应用
│   │   ├── app/[lang]/    # 国际化路由
│   │   │   ├── (auth)/    # 会员认证相关页面
│   │   │   ├── (root)/    # 官网展示页面
│   │   │   └── admin/     # 内部后台（会员管理）
│   │   ├── components/    # UI 组件
│   │   └── public/        # 静态资源
│   └── docs-app/          # 文档站点（可选）
├── libs/                  # 共享代码库
└── docs/                  # 项目文档
```

## 🌐 页面路由

### 🌐 官网页面

| 路由 | 说明 |
|------|------|
| `/` | 首页 |
| `/brand-story` | 品牌故事 |
| `/category` | 产品分类 |
| `/product/[productId]` | 产品详情 |
| `/news` | 新闻动态 |
| `/contact` | 联系我们 |

### 🔐 会员系统

| 路由 | 说明 |
|------|------|
| `/signin` | 会员登录 |
| `/signup` | 会员注册 |
| `/admin/*` | 内部后台（会员管理） |

> 会员系统的前台页面与后台管理功能，待补充 PRD 后再细化到 README。

## ✨ 核心特性

### 🎨 品牌展示
- 精美的产品展示页面
- 品牌故事与新闻动态
- 多语言内容管理

### 🔐 会员系统
- Better-Auth 集成
- 邮箱/密码登录
- 社交登录（Google、GitHub、微信）
- 会员信息管理（具体以补充 PRD 为准）

### 📊 CRM 会员管理后台
- 会员管理（内部人员使用）
- 内容管理
- 数据分析

### 🌐 国际化支持
- 多语言支持（中/繁/英/日）
- 基于路由的区域化内容

## 📦 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- Better-Auth
- PostgreSQL + Drizzle ORM
- shadcn/ui

## 🌐 国际化支持

项目采用路由级国际化设计，统一通过 `[lang]` 进行语言切换，便于全球站点内容管理与扩展。

## 📖 开发指南

更多开发说明请参考项目文档：[docs/user-guide/overview.md](./docs/user-guide/overview.md)。
