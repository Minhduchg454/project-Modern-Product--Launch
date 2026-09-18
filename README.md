# Modern Product Launch - Front-End Project

A complete front-end user interface project built from a Figma design, focusing on optimized user experience, full device responsiveness, and professional SCSS/HTML modular architecture.

## Tech Stack

- **Markup & Template:** HTML5, EJS (Embedded JavaScript Templates for shared components).
- **Styling:** CSS3, **SASS/SCSS** (Modern variable management, mixins, and component structure).
- **Build Tool:** **Vite** (Optimizes compilation and speeds up development).
- **Scripting:** JavaScript (Basic interaction handling).
- **Design Source:** [Figma Design File](https://www.figma.com/design/IMBLuzrICg7TprkjgsnB3D/E-commerce-Website-Template--Freebie---Community-?node-id=0-1&p=f&t=7oW7E9QLUbjSRj7W-0)

## Project Structure

The project is organized into clear modules for easy maintenance and scaling:

```text
project-Modern-Product-Launch/
│
├── public/                 # Static assets (images, icons, fonts...)
├── src/
│   ├── partials/           # Shared components (header.ejs, footer.ejs, head.ejs)
│   ├── scss/               # SASS/SCSS source code
│   │   ├── components/     # Small UI elements (buttons, cards, inputs...)
│   │   ├── layout/         # Page layout (grids, containers...)
│   │   ├── pages/          # Page-specific styles
│   │   ├── _reponsive.scss # Responsive breakpoints/mixins
│   │   ├── _reset.scss     # CSS reset initialization
│   │   ├── _variables.scss # Variables for colors, typography, sizes
│   │   └── main.scss       # Central SCSS aggregator stylesheet
│   ├── cart.html           # Cart page
│   ├── index.html          # Home page
│   ├── productDetail.html  # Product detail page
│   └── main.js             # Main JavaScript logic
│
├── figma.txt               # Figma design link or info
├── package.json            # Dependencies and scripts configuration
└── vite.config.js          # Vite bundler configuration
```

## Install

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd project-Modern-Product-Launch
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The browser will automatically open the web page running on Vite's local development server.

4. **Build for production:**
   ```bash
   npm run build
   ```
