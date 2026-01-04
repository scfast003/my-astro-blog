## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Check http://localhost:4321/

## Development Workflow

1. **Format your code**: Run `pnpm run format` before committing
2. **Check types**: Run `pnpm run type-check` to verify TypeScript types
3. **Build locally**: Run `pnpm run build` to ensure your changes build correctly

## Project Structure

A brief overview of the project structure:

- **/public**: Images and other static files.
- **/src**: Contains all Astro components and pages.
  - **/components**: Reusable UI components
  - **/content**: Blog posts, projects, and content collections
  - **/data**: Static data files
  - **/layouts**: Page layout components
  - **/pages**: Route pages
  - **/styles**: Custom CSS files
- **astro.config.ts**: Main configuration for Astro.
- **tailwind.config.ts**: Configuration for Tailwind CSS.

## Contributing Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Format and test your code
5. Submit a pull request
