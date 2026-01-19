# 安装指南

本指南将帮助你在本地环境中设置和运行 TinyShip 项目。

## 📑 目录

- [📋 系统要求](#-系统要求)
  - [必需软件](#必需软件)
- [🚀 快速安装](#-快速安装)
  - [1. 克隆项目](#1-克隆项目)
  - [2. 安装 PNPM（如果尚未安装）](#2-安装-pnpm如果尚未安装)
  - [3. 复制环境变量模板](#3-复制环境变量模板)
  - [4. 安装项目依赖](#4-安装项目依赖)

## 📋 系统要求

在开始之前，请确保你的开发环境满足以下要求：

### 必需软件
- **Node.js**: >= 22.0.0 （推荐使用 22.20.0 或更高的 LTS 版本）
  > ⚠️ **提示**：如需使用 Nuxt 4，由于 [oxc-parser 原生绑定问题](https://github.com/nuxt/nuxt/issues/33480)，建议 Node.js 版本 >= 22.20.0
- **PNPM**: >= 9.0.0 （推荐的包管理器）
- **PostgreSQL**: >= 13.0 （数据库）


## 🚀 快速安装

### 1. 克隆项目

```bash
# 克隆仓库
git clone https://github.com/Rabbit-Ivan/Benzenith-saas.git
cd Benzenith-saas

# 或者使用 SSH
git clone git@github.com:Rabbit-Ivan/Benzenith-saas.git
cd Benzenith-saas
```

### 2. 安装 PNPM（如果尚未安装）

```bash
# 使用 npm 安装 pnpm
npm install -g pnpm

# 或使用 corepack (Node.js 16.10+)
corepack enable
corepack prepare pnpm@latest --activate
# 验证安装
pnpm --version
```

### 3. 复制环境变量模板

```bash
# 复制环境变量模板
cp env.example .env
```

### 4. 安装项目依赖

```bash
# 安装所有依赖
pnpm install
```


下一步 [数据库配置指南](./database.md)

如果遇到其他问题 请在 [GitHub Discussion](https://github.com/Rabbit-Ivan/Benzenith-saas/discussions) 或者 [Issues](https://github.com/Rabbit-Ivan/Benzenith-saas/issues) 中提交问题。
