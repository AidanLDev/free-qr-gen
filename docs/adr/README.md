# Architecture Decision Records

An ADR is a short note recording a significant decision: the context, the choice, and what follows from it. It lets future contributors (including you, months from now) see _why_ the project works the way it does before they change it.

## When to write one

Write one when a decision is hard to reverse, affects many files, or would surprise a newcomer. For example: choosing a hosting platform, adding a backend data store, or changing how QR codes are generated.

## How

1. Copy [`template.md`](template.md) to `NNNN-short-title.md`, using the next number.
2. Fill it in. Aim for one screen.
3. Merge it in the same PR as the change.

Don't rewrite an accepted ADR when things change. Write a new one and mark the old one `Superseded by NNNN`.

## Index

| #                                           | Decision                                | Status   |
| ------------------------------------------- | --------------------------------------- | -------- |
| [0001](0001-static-client-side-qr-codes.md) | Generate static QR codes in the browser | Accepted |
| [0002](0002-one-route-per-qr-type.md)       | One route per QR type, not in-page tabs | Accepted |
