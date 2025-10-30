## List Management Interface
A modern, full‑featured list management application built with Next.js 14, React 18, and Tailwind CSS. Create, edit, and delete list items with a sleek dark‑themed interface.

![List Manager Preview](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

## ✨ Features  
- **Create Items** – Add new list items with title and subtitle  
- **Edit Items** – Update existing items with pre‑filled modal forms  
- **Delete Items** – Remove items from your list with a single click  
- **Form Validation** – Minimum 3 characters required for both title and subtitle  
- **Timestamps** – Automatic creation date tracking for each item  
- **Responsive Design** – Works seamlessly on desktop and mobile devices  
- **Dark Theme** – Modern dark interface with smooth hover interactions  
- **Empty State** – Helpful empty state when no items exist  
- **Accessibility** – Screen reader support and semantic HTML

## 🛠 Tech Stack
- Framework: Next.js 16 with App Router

- UI Library: React 19.2

- Styling: Tailwind CSS v4

- Components: shadcn/ui

- Icons: Lucide React

- Language: TypeScript

## ⚡ Installation
## Using shadcn CLI (Recommended)

```
npx shadcn@latest init
```

This will:

- Set up a new Next.js project (or extend an existing one)

- Install all required dependencies

- Configure Tailwind CSS and shadcn/ui components

- Copy project files into your environment

## Manual Installation

```
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 Getting Started

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then open http://localhost:3000 in your browser.

## 📂 Project Structure
```
├── app/
│   ├── page.tsx          # Main page with list management logic
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── globals.css       # Global styles and design tokens
├── components/
│   ├── list-item.tsx     # Individual list item card component
│   ├── item-modal.tsx    # Modal for creating/editing items
│   └── ui/               # shadcn/ui components (Button, Card, Dialog, etc.)
└── README.md
```

## 📖 Usage
Creating an Item
1. Click Create Item in the header

2. Enter a title and subtitle (min. 3 characters each)

3. Click Create to add the item

## Editing an Item
1. Hover over a list item to reveal the edit button

2. Click the ✏️ icon to open the modal

3. Update the fields and click Save Changes

## Deleting an Item
1. Hover over a list item to reveal the delete button

2. Click the 🗑️ icon to remove it

Customization
Design Tokens
Modify app/globals.css to adjust theme colors:

```
@theme inline {
  --color-background: oklch(0.13 0 0);
  --color-foreground: oklch(0.98 0 0);
  /* ... more tokens */
}
```
## Components
All UI components are built with shadcn/ui and can be customized in components/ui/.

## 💬 Support
For issues or questions, please open a GitHub issue or visit Vercel Support.
