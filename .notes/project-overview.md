# Project overview

This project is the personal site of F-G Fernandez.

## Goals
- get information about the author (bio, projects, professional background)
- read the author's blog posts
- minimal look and light set of dependencies, with proper display both on desktop and mobile

## Technologies
- React 19 (no NextJS, Remix or complex front-end framework)
- TypeScript
- Tailwind CSS
- Shadcn UI philosophy for components
- MDX for blog posts
- Vite for build management
- pnpm for dependency management
- ESLint & Prettier for code styling & format

## User journeys
- When the user gets on the website, they get identity + title + location of the author
- On the same page, they have clickable links to the other sections: about, writings
- The "about" section is a more detailed bio with a few words from the author, a few of his projects, work curriculum & publications
- The "writings" section contains the blog posts of the author, displayed in the same minimal look

## Directory structure
- `.github/`: GitHub CI configuration
- `public/`: publicly exposed assets
- `app`: React app code
