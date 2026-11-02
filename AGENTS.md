# Architecture rules
- Keep shared event-style questions, normalization, and backdrop suggestions in one module/component used by both booking forms so answers are collected once.
- Store inspiration photos privately through the validated booking-inquiry function; expose temporary signed URLs only for emails or authorized admin viewing.
- Protect admin views using Cloud authentication and server-managed user_roles, never client-side passwords or storage flags.
- Persist booking inquiry fields and styling before the existing Web3Forms notification, preserving its JSON submission and on-page success/error behavior.
- Keep inquiry service definitions, conditional questions, and backdrop compatibility in a shared typed module; serialize only selected services and visible answers so hidden preferences cannot leak into quotes.
- Scope the /booking light theme to its page and use separate inquiry navigation; keep /book payment checkout and other pages unchanged.