# Documentation

Docs for people working on [freeqrgen.net](https://freeqrgen.net). For a quick intro to the project, start with the [root README](../README.md).

## Start here

| Doc                                        | Read it when you want to…                                              |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| [Architecture](architecture.md)            | understand how the app fits together and where things live             |
| [Development](development.md)              | set up the project locally, learn the scripts, env vars and code style |
| [Testing](testing.md)                      | run or write the Playwright end-to-end tests                           |
| [Deployment](deployment.md)                | understand how a merge to `main` reaches production                    |
| [SEO and structured data](seo.md)          | change titles, metadata, JSON-LD or the sitemap                        |
| [Definition of done](dod.md)               | check a change is ready to merge                                       |
| [Known issues and tech debt](tech-debt.md) | find known problems, workarounds and clean-up candidates               |

## How-to guides

Step-by-step instructions for the most common kinds of change:

- [Add a new QR code type](how-to/add-a-qr-type.md)
- [Add a new guide (article)](how-to/add-a-guide.md)

## Decision records

[`adr/`](adr/README.md) holds Architecture Decision Records: short notes on why the project works the way it does.

## Keeping these docs useful

- Update the docs in the same PR as the code change. The [definition of done](dod.md) asks for it.
- Write down _why_ things are the way they are and _how the parts fit together_. Leave line-by-line detail to the code and its comments.
- Use relative Markdown links (`[text](file.md)`) so they work on GitHub and in any editor.
- Prettier formats Markdown too, so run `pnpm format` before committing (the pre-commit hook does this for staged files).
