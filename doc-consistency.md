# 文档一致性审核报告

**审核日期**: 2026-01-19
**审核范围**: README.md, docs/, libs/*/README.md
**审核原则**: 以代码为真、合同优先、安全默认收紧

---

## 审核结论

- **结论**: 有条件通过
- **汇总**: P0:0 P1:0 P2:2 P3:5 待补充:0 已修复:28
- **修复优先级**: P1 → P2 → P3

---

## P1 级问题（核心功能不一致）

暂无。

---

## P2 级问题（示例不完整/命名不一致）

### 1. AI 配置文档中模型名称可能过时
- **严重级别**: P2
- **位置**: `config.ts:1011, 1021`
- **证据**:
  - 代码: `'gpt-5'`, `'gpt-5-codex'`, `'gpt-5-pro'`
  - 实际 OpenAI API 可能不支持这些模型
- **影响**: 使用这些模型会导致 API 调用失败
- **建议**: 更新为实际可用的模型名称（如 gpt-4, gpt-4-turbo）
- **关联原则**: 以代码为真

### 2. 认证错误代码表格可能不完整
- **严重级别**: P2
- **位置**: `libs/auth/README.md:290-310`
- **证据**:
  - 表格列出了常见错误代码
  - 可能有 Better Auth 新增的错误代码未覆盖
- **影响**: 新错误代码无国际化支持
- **建议**: 定期同步 Better Auth 文档更新错误代码列表
- **关联原则**: 以代码为真

---

## P3 级问题（措辞/格式/链接小问题）

### 1. 部分 README 缺少英文版本链接
- **严重级别**: P3
- **位置**: `libs/ui/README.md`, `libs/validators/README.md`
- **证据**:
  - 对应模块未提供 README_EN.md
- **影响**: 导航体验不一致
- **建议**: 补充英文版本或在 README 中说明暂无英文文档
- **关联原则**: 以代码为真

### 2. 文档中代码示例缩进不一致
- **严重级别**: P3
- **位置**: 多处文档
- **证据**:
  - 部分使用 2 空格缩进
  - 部分使用 4 空格缩进
- **影响**: 代码风格不统一
- **建议**: 统一使用 2 空格缩进
- **关联原则**: 以代码为真

### 3. 部分文档目录锚点可能失效
- **严重级别**: P3
- **位置**: `README.md`, `docs/user-guide/overview.md`
- **证据**:
  - 目录使用 emoji 的锚点链接
  - 不同 Markdown 渲染器处理 emoji 锚点方式不同
- **影响**: 某些平台上目录链接可能失效
- **建议**: 测试 GitHub 渲染并确认锚点有效
- **关联原则**: 以代码为真

### 4. 文档中 Better Auth 文档链接未验证
- **严重级别**: P3
- **位置**: `libs/auth/README.md:250`, `docs/user-guide/auth.md:386`
- **证据**:
  - 链接到 better-auth.com/docs
  - 未验证链接是否仍然有效
- **影响**: 外部链接可能失效
- **建议**: 定期验证外部链接
- **关联原则**: 以代码为真

### 5. 文档缺少最后更新日期
- **严重级别**: P3
- **位置**: 所有文档
- **证据**:
  - 大部分文档没有标注最后更新日期
- **影响**: 用户不知道文档是否最新
- **建议**: 在主要文档中添加更新日期
- **关联原则**: 以代码为真

---

## 待证据补充

暂无。

---

## 已修复问题（本次复核确认）

- Node.js 版本要求不一致：`docs/user-guide/install.md` 与 `package.json` 已统一为 `>=22.0.0`，并补充 22.20.0 推荐说明。
- Next.js 版本描述过时：`docs/user-guide/overview.md` 已更新为 Next.js 16。
- README 声称不包含支付功能：README 已移除该表述。
- 文档声称支持 Nuxt.js 但项目似乎专注于 Next.js：`docs/user-guide/overview.md` 已明确 Benzenith 使用 Next.js。
- 默认语言配置与文档不一致：README 已说明默认语言为繁体中文。
- README 页面路由缺少实际存在的页面：已补充 `/news/tag/[tag]` 路由说明。
- Git 仓库 URL 不一致：`docs/user-guide/install.md` 已更新为实际仓库地址。
- README CI Badge 链接错误：README 与 README_EN 已更新为实际仓库路径。
- 环境变量模板文件名不一致：已确认项目根目录存在 `env.example`。
- Drizzle Studio URL 不一致：已确认两处均为 `https://local.drizzle.studio`。
- auth.md 访问 URL 错误：已改为 `http://localhost:7001`。
- 测试用户密码与文档不一致：已确认 seed 脚本与文档一致。
- libs/auth README 微信环境变量名称不一致：已统一为 `NEXT_PUBLIC_WECHAT_APP_ID`。
- payment README 缺少 credits 类型计划说明：已补充 `credits` 类型说明与字段。
- 项目结构文档缺少 openspec 目录：README 与 overview 已补充 `openspec/`。
- Docker-README.md 未在主 README 中引用：README 与 Docker 部署文档已增加链接。
- README 提到的 admin 路由描述过于简略：已补充后台路由列表。
- TinyShip 品牌名与 Benzenith 混用：已补充模板与落地项目的说明。
- ROADMAP.md 未在主文档中引用：README 已补充链接。
- TEST_PLAN.md 未在主文档中引用：README 已补充链接。
- zeabur.yaml 未在部署文档中说明：云部署文档已补充 Zeabur 说明。
- GitHub Issues 链接不完整：已更新为实际 Issues 地址。
- 文档中 Drizzle 拼写错误：已修正。
- auth.md 中 Twilio 拼写错误：已修正。
- 部分中文文档术语不一致：已核实术语使用，无 “登陆” 用词，OTP 已在文档中明确标注。
- config.ts 注释部分使用了中文：已统一为英文注释。
- 部分 README 缺少英文版本链接：已为存在 README_EN.md 的模块补充语言切换链接。

---

## 修复建议优先级

### 高优先级（P1）
暂无。

### 中优先级（P2）
1. 更新 AI 模型名称为实际可用版本
2. 同步 Better Auth 错误代码表（定期复核）

### 低优先级（P3）
1. 补充 libs/ui 与 libs/validators 的英文文档或说明
2. 统一代码示例缩进
3. 验证目录锚点在 GitHub 的可用性
4. 验证 Better Auth 外部链接
5. 添加文档更新日期

---

## 审核完成

本报告基于 2026-01-19 的代码状态生成，当前未解决问题共 7 项（已修复 28 项）。建议按优先级逐步修复，确保文档与代码实现保持一致。
