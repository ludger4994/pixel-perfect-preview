---
name: SEO Implementation Guide
description: Full SEO strategy — page map, keyword assignments, schema markup, internal linking, title/meta templates for all 35+ planned pages
type: reference
---

User uploaded a comprehensive SEO implementation guide (981 lines).

## Phase 1 DONE — Existing Page SEO Fixed
- Homepage: title, meta, H1, H2s, LocalBusiness+WebSite schema, service area paragraph
- All 5 service pages: SEOHead with title, meta, canonical, Service schema, updated H1/content
- Packages, Contact, Booking, Backdrops: SEOHead added
- sitemap.xml and robots.txt with sitemap reference created

## Phase 2 DONE — Event + Effect Pages
- Weddings, Corporate Events, Special Effects hub built
- FAQ (20+ Qs), Gallery, Reviews, About pages built

## Phase 3 DONE — Audience Pages
- Birthdays & Private Parties, Quinceañeras, Sweet 16, Baby Showers, School Events, Brand Activations

## Phase 4 DONE — Location Pages
- 11 city pages: Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Hollywood FL, Coral Springs, Pembroke Pines, Miramar, Doral, Kendall, Homestead
- Service Areas hub page
- Reusable CityPageLayout and EventPageLayout components

## Phase 5 DONE — Internal Linking, Schema, Blog, Nav
- Internal linking added to ServicePageLayout (2 event + 2 city pages)
- Internal linking added to EventPageLayout (2 service + 2 city pages)
- Footer expanded with Events & Areas column (weddings, corporate, quinceañeras, city pages)
- Navbar updated: Events dropdown (8 event pages), Special Effects (3 links), Service Areas link
- BreadcrumbList schema support added to SEOHead component
- AggregateRating schema added to Reviews page
- Blog hub page created at /blog with topic cards linking to relevant pages
- Sitemap updated with /blog URL

## Remaining (External — NOT code-implementable)
- Google Search Console, Analytics setup
- Google Business Profile optimization
- Bing Webmaster Tools, Bing Places
- Microsoft Clarity installation
- Citation building (Yelp, The Knot, WeddingWire, GigSalad)
- Review generation campaigns
- Venue partnership outreach
- Blog post content creation (ongoing)

## Key Rules
- Every page owns a unique keyword cluster — no cannibalization
- Service page H1 format: "[Service] in South Florida"
- City page H1 format: "Photo Booth Rental in [City], Florida"
- Event page H1 format: "[Event Type] Photo Booth Rental in South Florida"
- Title format: "[Primary Keyword] | Photo Booth Legends" (under 60 chars)
- Meta desc under 160 chars
- Entity statement on every page
- Internal linking rules: every service → /packages + /contact + 2 event + 2 city pages
