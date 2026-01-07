# Benzenith Official Website

[中文](./README.md) | **English**

![Build Status](https://github.com/vikingmute/tinyship/actions/workflows/ci.yml/badge.svg)

✨ The official website for Benzenith, a luxury jewelry brand. Built as a modern, enterprise-grade showcase platform with Next.js.

## 📑 Table of Contents

- [🏢 About Benzenith](#-about-benzenith)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🌐 Routes](#-routes)
- [✨ Key Features](#-key-features)
- [📦 Tech Stack](#-tech-stack)
- [🌐 Internationalization](#-internationalization)
- [📖 Development Guide](#-development-guide)

## 🏢 About Benzenith

Benzenith is a luxury jewelry brand focused on blending fine craftsmanship with modern design. This project powers brand presentation and the membership system, without payment features.

## 🚀 Getting Started

For detailed setup instructions and configuration guides, please refer to our [Start Guide](./docs/user-guide/overview.md).

## 📁 Project Structure

```text
tinyship/
├── apps/
│   ├── next-app/          # Main website app
│   │   ├── app/[lang]/    # i18n routes
│   │   │   ├── (auth)/    # Member authentication pages
│   │   │   ├── (root)/    # Website pages
│   │   │   └── admin/     # Internal CRM (member management)
│   │   ├── components/    # UI components
│   │   └── public/        # Static assets
│   └── docs-app/          # Documentation site (optional)
├── libs/                  # Shared libraries
└── docs/                  # Project docs
```

## 🌐 Routes

### 🌐 Public Pages

| Route | Description |
|------|------|
| `/` | Home |
| `/brand-story` | Brand story |
| `/category` | Product categories |
| `/product/[productId]` | Product details |
| `/news` | News |
| `/contact` | Contact |

### 🔐 Membership System

| Route | Description |
|------|------|
| `/signin` | Member login |
| `/signup` | Member registration |
| `/admin/*` | Internal CRM (member management) |

> Membership pages and CRM features will be refined after the PRD update.

## ✨ Key Features

### 🎨 Brand Showcase
- Curated product presentation
- Brand story and news
- Multi-language content

### 🔐 Membership System
- Better-Auth integration
- Email/password login
- Social login (Google, GitHub, WeChat)
- Member profile management (subject to PRD)

### 📊 CRM Member Management
- Member management for internal staff
- Content management
- Data analytics

### 🌐 Internationalization
- Multi-language support (ZH/TC/EN/JA)
- Route-based regional content

## 📦 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Better-Auth
- PostgreSQL + Drizzle ORM
- shadcn/ui

## 🌐 Internationalization

The project uses route-based i18n, switching languages via `[lang]` to support global content management.

## 📖 Development Guide

See project docs for more details: [docs/user-guide/overview.md](./docs/user-guide/overview.md).
