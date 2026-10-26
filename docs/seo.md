# SEO and structured data

Most visitors arrive from search, so page titles, metadata and structured data matter. This page covers where each piece lives and the rules to follow.

## Page metadata

- **Defaults** (site title template, description, Open Graph, robots, site verification) are in `src/app/layout.tsx`. Titles use the template `%s | Free QR Gen`.
- **Per-page metadata** comes from `pageMetadata()` in `src/app/lib/metadata.ts`. It sets the title, description, canonical URL and Open Graph.
  - Child routes **replace** `openGraph` rather than merging with the layout's, which is why `pageMetadata` repeats the shared fields. Always use it rather than writing `metadata.openGraph` by hand.
- **Tool pages** use `toolPageMetadata(type)` (from `ToolPage.tsx`), which reads `lib/toolPageContent.ts`.
- **Guides** use `guideMetadata(path)` (from `GuidePage.tsx`), which reads `lib/guides.ts` and sets `type: 'article'`.

### Title length

Search results cut off titles at around 60 characters, and the ` | Free QR Gen` suffix uses 14 of them:

- Tool page `title`: **at most ~45 characters**
- Guide `title`: **at most ~60 characters including the suffix**

The page's `<h1>` can be longer or worded differently from the `<title>`.

## Structured data (JSON-LD)

Rendered with the `JsonLd` component. Each page type outputs a `@graph`:

| Page       | Types                                                            |
| ---------- | ---------------------------------------------------------------- |
| Home       | `WebSite` (with `@id` `…/#website`), `WebApplication`, `FAQPage` |
| Tool pages | `WebApplication`, `BreadcrumbList`, `FAQPage`                    |
| Guides     | `Article`, `BreadcrumbList`, `FAQPage`                           |
| Guides hub | `CollectionPage` with an `ItemList`, `BreadcrumbList`            |

`faqPageJsonLd()` builds the `FAQPage` from the same FAQ list the page displays, so the two stay in sync. If an FAQ answer contains JSX (for example links), also give it a plain-text `text` for the structured data.

Check changes with Google's [Rich Results Test](https://search.google.com/test/rich-results). The E2E tests only check that guides include an `Article`.

## Sitemap and robots

- `src/app/sitemap.ts` lists the home page, every tool page (from `lib/qrTypes.ts`), the guides hub, every guide (from `lib/guides.ts`) and the about page.
- **Dates:** tool pages share `toolsUpdated` in `sitemap.ts`. Each guide has its own `updated` field in `lib/guides.ts`. Bump the right one when you change content in a meaningful way, but not for typo fixes.
- A new page that isn't a tool or a guide must be added to `sitemap.ts` by hand.
- `src/app/robots.ts` controls `robots.txt`.

## Internal linking

Links between pages are mostly generated automatically:

- The QR type tabs and the footer list every tool from `qrTypeList`.
- Each tool page's "Related" line lists every guide whose `types` include that tool.
- The guides hub groups guides by their first `types` entry.
- The footer's "Resources" list is hand-picked in `Footer.tsx`.

Each guide should link to at least one generator in its body. `guides.spec.ts` checks this.

## Images

- Social share image: `public/FreeQRGenCoverImage.png`, set up in `lib/metadata.ts` as `ogImage`.
- Guide images: `public/guides/<guide>/`, as `.webp`, shown with `ArticleFigure` (which sets `unoptimized` so images display correctly on the deployed site).
- Always write descriptive `alt` text.
