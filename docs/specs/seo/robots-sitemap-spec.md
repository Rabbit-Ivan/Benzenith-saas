# BenZenith 官网 Robots 与 Sitemap 方案说明

## 1. 背景

当前官网未正确提供根路径 `robots.txt` 与 `sitemap.xml`，导致搜索引擎抓取入口缺失。  
本方案基于 Next.js App Router 元数据路由能力，补齐两个标准 SEO 文件。

## 2. 目标

1. 提供可访问的 `https://{domain}/robots.txt`。
2. 提供可访问的 `https://{domain}/sitemap.xml`。
3. 仅收录官网公开页面，排除后台与认证等不应收录页面。
4. 改动范围控制在 SEO 路由与文档，不影响官网界面与业务逻辑。

## 3. 实现文件

1. `apps/next-app/app/robots.ts`
2. `apps/next-app/app/sitemap.ts`
3. `docs/specs/seo/robots-sitemap-spec.md`

## 4. robots.txt 规则

### 4.1 允许抓取

- `User-agent: *`
- `Allow: /`

### 4.2 禁止抓取

- `/api/`
- `/*/admin`
- `/*/admin/*`
- `/*/signin`
- `/*/signup`
- `/*/forgot-password`
- `/*/reset-password`
- `/*/wechat`
- `/*/cellphone`
- `/*/cart`
- `/*/test-validator-nextjs`

### 4.3 Sitemap 声明

- `Sitemap: {APP_BASE_URL}/sitemap.xml`

## 5. sitemap.xml 收录范围

### 5.1 语言范围

- `zh-TW`
- `zh-CN`
- `ja`
- `en`

### 5.2 静态页面

- `/{lang}`
- `/{lang}/brand-story`
- `/{lang}/contact`
- `/{lang}/privacy-policy`
- `/{lang}/news`

### 5.3 分类页

- `/{lang}/category/fanofwill`
- `/{lang}/category/suchnessofself`

### 5.4 产品页（仅当前真实详情数据）

- `/{lang}/product/mother-of-pearl-necklace`
- `/{lang}/product/mother-of-pearl-earrings`
- `/{lang}/product/hetian-jade-necklace`
- `/{lang}/product/blue-water-jadeite-necklace`

### 5.5 资讯详情页

- `/{lang}/news/{id}`，其中 `id` 由 `getNewsArticleIds()` 动态生成。

### 5.6 明确不收录

- `/{lang}/news/tag/{tag}`（当前为占位页）
- 后台页面、认证页面、测试页面
- 所有 API 路径

## 6. 域名规则

1. 统一从 `APP_BASE_URL` 读取站点域名。
2. 未配置时回退 `http://localhost:7001`，仅用于本地开发验证。
3. 生产环境必须配置真实域名，避免 sitemap 出现 localhost。

## 7. 验收标准

1. `pnpm run build` 成功。
2. `GET /robots.txt` 返回 200，且内容包含 `Sitemap:`。
3. `GET /sitemap.xml` 返回 200，且响应为 XML。
4. `robots.txt` 与 `sitemap.xml` 响应内容都不是 HTML 页面。
5. `sitemap.xml` 不包含后台、登录、API、测试路径。
6. 随机抽查 3 条 sitemap URL 可以访问且返回 200。

## 8. 上线后动作

1. 在 Google Search Console 提交 `https://{domain}/sitemap.xml`。
2. 在 Bing Webmaster Tools 提交 `https://{domain}/sitemap.xml`。
3. 关注 3-7 天抓取与收录变化。

## 9. 回滚策略

如出现误拦截抓取：

1. 临时将 `robots.ts` 的 Disallow 缩减为仅 `/api/` 与后台路径。
2. 重新部署并在搜索平台请求重新抓取。
3. 保持 `sitemap.ts` 不变，仅回滚 robots 抓取规则。
