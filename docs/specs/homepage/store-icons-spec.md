# 首页底部海报区域 — 淘宝 & Shopify 入口 Icon

## 1. 背景

品牌官网首页底部海报区域（品牌哲学文案 section）需要添加淘宝和 Shopify 两个外部平台入口 icon，方便用户快速跳转到对应的电商店铺。

## 2. 目标

1. 在首页底部海报 section **内部底部**展示淘宝和 Shopify 两个可点击 icon。
2. 点击后在**新标签页**打开对应店铺链接。
3. 提供 hover 交互反馈（透明度变化 + 下划线动画）。
4. 适配移动端，icon 尺寸自动缩小。

## 3. 涉及文件

| 文件 | 类型 | 说明 |
|------|------|------|
| `apps/next-app/app/[lang]/(root)/HomePageClient.tsx` | 修改 | 添加 icon 链接区域 |
| `apps/next-app/public/benzenith/assets/icon-taobao.png` | 新增 | 淘宝 icon（透明底 PNG） |
| `apps/next-app/public/benzenith/assets/icon-shopify.png` | 新增 | Shopify icon（透明底 PNG） |

## 4. 功能规格

### 4.1 位置

- 位于 `h-[70vh]` 底部海报 section **内部**。
- 使用绝对定位，距 section 底部约 40–56px（`bottom-10 md:bottom-14`）。
- 水平居中（`left-1/2 -translate-x-1/2`），`z-index: 20`。

### 4.2 布局

- 两个 icon **水平排列**，间距：
  - 移动端 `gap-6`（24px）
  - 桌面端 `gap-8`（32px）

### 4.3 Icon 尺寸

| 端 | 宽度 | 高度 |
|----|------|------|
| 桌面端（≥768px） | 130px | 45px |
| 移动端（<768px） | 100px | 34px |

- 使用 `object-contain` 保持图片原始比例。

### 4.4 链接配置

| Icon | 跳转链接 | 打开方式 |
|------|----------|----------|
| 淘宝 | `https://cb8kzv8hv-hlredfvhu4twothjoig.taobao.com/search.htm?spm=a1z10.1-c-s.w5002-25961343078.1.596b7b22DcGCMm&search=y` | `target="_blank"` |
| Shopify | `https://www.benzenith.shop/` | `target="_blank"` |

- 所有外链添加 `rel="noopener noreferrer"` 安全属性。

### 4.5 交互效果

| 效果 | 实现方式 |
|------|----------|
| hover 透明度降低 | `hover:opacity-70`，过渡 300ms |
| hover 下划线展开 | `span` 元素从 `w-0` 到 `w-full`，颜色 `cream/80`，过渡 300ms |

## 5. 验收标准

1. 桌面端访问首页，滚动到底部海报区域，可见淘宝和 Shopify 两个 icon。
2. icon 位于深色背景图上，透明底 PNG 无白色边框或底色。
3. 两个 icon 水平居中排列，间距合理。
4. 鼠标悬停时 icon 透明度降低，底部出现下划线动画。
5. 点击淘宝 icon，新标签页打开淘宝店铺链接。
6. 点击 Shopify icon，新标签页打开 Shopify 店铺链接。
7. 移动端（<768px）icon 尺寸缩小为 100×34px，仍保持水平排列。
8. `pnpm run build` 成功，无编译错误。

## 6. 资源来源

icon 原始文件位于 `.xuqiu-prd/0228/` 目录：

- `20260228-132737.png` → `icon-taobao.png`
- `20260228-132723.png` → `icon-shopify.png`
