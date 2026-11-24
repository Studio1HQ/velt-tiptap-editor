<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/velt-tiptap-editor.webp" alt="Tiptap Editor Comments with Velt: Inline comments on selected text in a Tiptap rich-text editor" width="100%" />

<br />
<br />

# Tiptap Editor Comments with Velt

### Inline comments on selected text in a Tiptap rich-text editor

A Next.js email-style editor built on Tiptap that adds Velt comments to selected text, highlights commented ranges and lists threads in a comments sidebar.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://velt-tiptap-editor.vercel.app)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

This repo shows how to add Google Docs-style comments to a [Tiptap](https://tiptap.dev) editor using [Velt](https://velt.dev). The demo is an email composer. Select text in the body, click the comment button in the bubble menu, and Velt stores a comment thread anchored to that range.

It uses the `@veltdev/tiptap-velt-comments` extension to mark commented text and `highlightComments` to re-apply highlights from Velt's comment annotations. If you are adding comments to a Tiptap editor, the editor setup in `TipTap.tsx` is the part to copy.

## Features

- **Inline comments**: Select text and comment on it through the Velt comment tool in the bubble menu.
- **Comment highlights**: Commented ranges are highlighted from the live list of Velt comment annotations.
- **Comments sidebar**: `VeltCommentsSidebar` lists every thread in the document.
- **Rich-text toolbar**: Headings, text alignment, highlight and StarterKit formatting through Tiptap extensions.
- **Email composer UI**: Recipient, subject and body fields built with shadcn/ui components.
- **Reset button**: A delete-comments button calls the Velt REST API to remove all comment annotations for the demo document.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 15 (App Router), React 19 |
| Editor | [Tiptap](https://tiptap.dev) 2 with StarterKit, Heading, TextAlign, Highlight, BubbleMenu |
| Collaboration | [Velt](https://velt.dev) (`@veltdev/react`, `@veltdev/tiptap-velt-comments`) |
| UI | [Tailwind CSS](https://tailwindcss.com) 4, [shadcn/ui](https://ui.shadcn.com), [Lucide](https://lucide.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |

## Getting started

### Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm or bun
- A Velt account and API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/velt-tiptap-editor.git
cd velt-tiptap-editor
npm install
```

### Environment variables

Create `.env.local` in the project root.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_VELT_API_KEY` | Your Velt API key. Passed to `VeltProvider` and to the REST call in the delete-comments button. |
| `NEXT_PUBLIC_VELT_AUTH_TOKEN` | Velt auth token. Only used by the delete-comments button for the Velt REST API. |

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

```text
src/app/
  page.tsx                          VeltProvider, VeltComments, VeltCommentsSidebar
  components/EmailEditor.tsx        Email composer UI around the editor
  components/TipTap.tsx             Tiptap setup, document ID, comment highlighting
  components/BubbleMenu.tsx         Bubble menu with the comment tool
  components/TipTapToolbar.tsx      Formatting toolbar
  components/delete-comments-button.tsx   Calls the Velt commentannotations/delete API
  YourAuthComponent.tsx             useIdentify template for a Velt user
  YourDocument.tsx                  VeltCommentTool template
```

1. `page.tsx` wraps the app in `VeltProvider` and renders `VeltComments` (with `textMode={false}`) and `VeltCommentsSidebar`.
2. `TipTap.tsx` adds the `TiptapVeltComments` extension to the editor and calls `client.setDocument("my-document-id", ...)`.
3. `useCommentAnnotations()` returns the current threads. An effect passes them to `highlightComments(editor, commentAnnotations)` so commented text is highlighted.
4. The delete-comments button posts to `https://api.velt.dev/v1/commentannotations/delete` for the organization `my-organization` and document `my-document-id`.

## Resources

- [Live demo](https://velt-tiptap-editor.vercel.app): Deployed version of this app.
- [Velt documentation](https://docs.velt.dev): SDK and REST API reference.
- [Velt](https://velt.dev): Product site.
- [Tiptap documentation](https://tiptap.dev/docs): Editor framework docs.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
