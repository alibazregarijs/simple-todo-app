# List Management Interface

A modern, full-featured list management application built with Next.js 16, React 19, and Tailwind CSS. Create, edit, and delete list items with a beautiful dark-themed interface.

![List Manager Preview](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

## Features

- **Create Items** - Add new list items with title and subtitle
- **Edit Items** - Update existing items with pre-filled modal forms
- **Delete Items** - Remove items from your list with a single click
- **Form Validation** - Minimum 3 characters required for both title and subtitle
- **Timestamps** - Automatic creation date tracking for each item
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark Theme** - Modern dark interface with smooth hover interactions
- **Empty State** - Helpful empty state when no items exist
- **Accessibility** - Screen reader support and semantic HTML

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Installation

### Using shadcn CLI (Recommended)

The easiest way to install this project is using the shadcn CLI:

\`\`\`bash
npx shadcn@latest init v0
\`\`\`

This command will:
- Set up a new Next.js project or add to an existing one
- Install all necessary dependencies
- Configure Tailwind CSS and shadcn/ui components
- Copy all project files to your local environment

### Manual Installation

Alternatively, download the project files and install dependencies:

\`\`\`bash
# Install dependencies
npm install

# or
yarn install

# or
pnpm install
\`\`\`

## Getting Started

Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main page with list management logic
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── globals.css       # Global styles and design tokens
├── components/
│   ├── list-item.tsx     # Individual list item card component
│   ├── item-modal.tsx    # Modal for creating/editing items
│   └── ui/               # shadcn/ui components (Button, Card, Dialog, etc.)
└── README.md
\`\`\`

## Usage

### Creating an Item

1. Click the "Create Item" button in the header
2. Fill in the title and subtitle (minimum 3 characters each)
3. Click "Create" to add the item to your list

### Editing an Item

1. Hover over any list item to reveal the edit button
2. Click the pencil icon to open the edit modal
3. Modify the title and/or subtitle
4. Click "Save Changes" to update the item

### Deleting an Item

1. Hover over any list item to reveal the delete button
2. Click the trash icon to remove the item from the list

## Customization

### Design Tokens

The application uses CSS custom properties for theming. Modify `app/globals.css` to customize colors:

\`\`\`css
@theme inline {
  --color-background: oklch(0.13 0 0);
  --color-foreground: oklch(0.98 0 0);
  /* ... more tokens */
}
\`\`\`

### Components

All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## Deployment

### Deploy to Vercel (Recommended)

Click the "Publish" button in the v0 interface to deploy directly to Vercel, or use the Vercel CLI:

\`\`\`bash
vercel
\`\`\`

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

## License

MIT

## Support

For issues or questions, please open an issue on GitHub or contact support at [vercel.com/help](https://vercel.com/help).
