# Booking page replacement
- [x] Fix optional venue validation; reproduced the original 400, deployed the correction, verified real inquiry persistence without a venue and confirmation with simulated email success; 26 tests pass. Actual email delivery remains unconfirmed below.
- [x] Add supplied experience photos, rename the guest book heading, and offer a selectable Video Album beneath guest books; verified selections/review and mobile layout, with original uploads substituted for hosted asset URLs in local browser checks.
- [x] Add searchable checkbox product dropdown, exact eleven questionnaires, dependent add-ons, and structured service submissions.
- [x] Test all products individually, selection changes, conditional questions, mobile dropdown, and real multi-service persistence/readback; email success simulated because delivery remains blocked below.
- [x] Replace /booking completely with cream/champagne navigation, five steps, eleven services, conditional questionnaires, review and confirmation.
- [x] Verify service rules, real inquiry persistence, desktop/mobile presentation, and confirmation/reset with a simulated email success; actual email receipt remains blocked below.

# Event styling

- [x] Shared optional decor section in both booking forms with conditional flowers and photo uploads.
- [x] Save inquiry styling and reuse it for coordinated backdrop suggestions.
- [x] Secure admin access and implement saved styling/photo display.
- [x] Test styling rules, real inquiry persistence and photo upload, checkout persistence, mobile display, signed-out access, and controlled success/reset behavior.
- [ ] Verify owner admin readback: no auth accounts exist; owner must sign in before administrator access can be assigned.
- [ ] Verify real email receipt: Web3Forms blocks sandbox requests with HTTP 403; email delivery remains unconfirmed.
- [ ] Verify paid checkout end-to-end: no live payment was made; styling persistence was tested through the booking endpoint.

# Packages page
- [x] Restore only the shared booking catalog, original photos, and inquiry form needed for the handoff; original notification and submission behavior preserved.
- [x] Add the reference-matched /packages page, navigation, sitemap, and validated experience URL handoff.
- [x] Verify selection through booking review, mobile preselection, all 28 catalog photos, and mobile/desktop layout; original CDN images loaded through a local browser-only bridge. Four selection tests pass.


# Exact website reference
- [x] Build the uploaded homepage and Keychain Station page with working navigation, slideshow, and local keepsake preview; retain original photos and replace reference-only placeholder notes with established content.
- [x] Match the packages reference grid, card layout, controls, and spacing while retaining shared original photos and booking handoff.
- [x] Verify all three pages, slideshow arrows, menus, photo preview, five-charm limit, reset, and booking links at desktop and mobile sizes; six rule tests pass. Wristlet/charm product photos were not supplied, so the visualizer uses illustrative shapes rather than product photos.
