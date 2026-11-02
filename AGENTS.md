# Architecture rules
- Keep shared event-style questions, normalization, and backdrop suggestions in one module/component used by both booking forms so answers are collected once.
- Store inspiration photos privately through the validated booking-inquiry function; expose temporary signed URLs only for emails or authorized admin viewing.
- Protect admin views using Cloud authentication and server-managed user_roles, never client-side passwords or storage flags.
- Persist booking inquiry fields and styling before the existing Web3Forms notification, preserving its JSON submission and on-page success/error behavior.