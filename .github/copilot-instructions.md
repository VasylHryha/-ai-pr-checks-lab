# Copilot Code Review guidance
- Security: never suggest client-side sanitization for server-rendered HTML; suggest server-side sanitization first.
- Nuxt SSR: do not propose browser-only APIs in server context.
- Style: defer stylistic nits to ESLint; only flag if correctness is affected.
