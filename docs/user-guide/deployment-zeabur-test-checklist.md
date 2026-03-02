# Zeabur Test 分支部署核对清单

适用场景：`test` 分支部署到 `benzenith-test.zeabur.app`，目标服务为 `apps/next-app`。

## 1. 仓库内配置（已固定）

- `zbpack.json`
  - `build_command`: `pnpm run build:next`
  - `start_command`: `pnpm run start:next`
- `zeabur.yaml`
  - `health_check.path`: `/api/health`

## 2. Zeabur 控制台必须核对

- Service 类型：Node.js（不要用 Static）
- 分支：`test`
- Root Directory：仓库根目录（不要指向 `apps/docs-app`）
- Build Command：留空使用 `zbpack.json`，或显式填 `pnpm run build:next`
- Start Command：留空使用 `zbpack.json`，或显式填 `pnpm run start:next`
- Health Check Path：`/api/health`

## 3. 必填环境变量

至少配置以下变量：

- `APP_BASE_URL=https://benzenith-test.zeabur.app`
- `DATABASE_URL=...`
- `BETTER_AUTH_SECRET=...`
- `BETTER_AUTH_URL=https://benzenith-test.zeabur.app`

## 4. 部署后验收

执行以下检查：

```bash
curl -sS https://benzenith-test.zeabur.app/api/health
```

期望结果：

- 返回 JSON
- 字段 `application` 为 `next-app`
- HTTP 状态码为 `200`（数据库不可用时可能为 `503`，但不会再是 HTML）

再检查首页：

```bash
curl -sS https://benzenith-test.zeabur.app/ | head -n 20
```

期望结果：

- 不包含 `__next_error__`
- 不包含 `NEXT_REDIRECT;replace;/zh-TW;307;`

