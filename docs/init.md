## Setup project

### 1. Configure Next app
### 2. Add SCSS
```
npm install sass -D // as dev dependency
```
### 3. Project Structure
```
project-root/
├── app/                         # App Router directory (entry point for pages)
│   ├── layout.js                # Root layout for the app (applies to all routes)
│   ├── globals.css              # Global CSS or reset styles for the project
│   ├── loading.js               # Global loading spinner for the app
│   ├── error.js                 # Global error page for the app
│   │
│   ├── page.js                  # Homepage route ("/")
│   ├── about/                   # "About" section
│   │   ├── page.js              # Renders "/about"
│   │   └── layout.js            # About-specific layout (optional for nested routes)
│   │
│   ├── blog/                    # Blog section
│   │   ├── layout.js            # Blog-specific layout
│   │   ├── page.js              # Renders "/blog" (blog index page)
│   │   ├── [slug]/              # Dynamic routing for blog posts (e.g., /blog/my-post)
│   │   │   ├── page.js          # Renders specific blog post
│   │   │   ├── loading.js       # Loading state for this route
│   │   │   └── error.js         # Error state specific to blog post route
│   │   ├── components/          # Blog-specific components
│   │   │   ├── BlogCard.js
│   │   │   ├── BlogList.js
│   │   │   └── BlogSidebar.js
│   │   ├── styles/              # Blog-specific styles
│   │       ├── blog.module.scss
│   │       └── post.module.scss
│   │
│   ├── course/                  # Course section (another product)
│   │   ├── layout.js            # Course-specific layout
│   │   ├── page.js              # Renders "/course" (course list page)
│   │   ├── [id]/                # Dynamic routing for individual courses ("/course/:id")
│   │   │   ├── page.js          # Renders specific course details
│   │   │   └── styles.module.scss
│   │   ├── components/          # Course-specific components
│   │   │   ├── CourseCard.js
│   │   │   ├── CourseList.js
│   │   │   └── CourseDetail.js
│   │   ├── styles/              # Course-specific styles
│   │       ├── course.module.scss
│   │       ├── course-list.module.scss
│   │       └── course-card.module.scss
│   │
│   ├── product/                 # Additional product section (e.g., e-commerce)
│   │   ├── layout.js            # Product-specific layout
│   │   ├── page.js              # Renders "/product" (product catalog)
│   │   ├── [id]/                # Dynamic route for product details ("/product/:id")
│   │   │   ├── page.js          # Renders product detail page
│   │   │   └── styles.module.scss
│   │   ├── components/
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductList.js
│   │   │   └── ProductDetail.js
│   │   ├── styles/
│   │       ├── product.module.scss
│   │       └── product-card.module.scss
│   │
│   ├── api/                     # API routes (coming soon in the App Router)
│   │   ├── auth/                # Example API for authentication (e.g., `/api/auth/login`)
│   │       └── route.js
│   │   └── products/            # Example API for fetching products
│   │       └── route.js
│   │
│   └── styles/                  # Global styles (optional, for top-level organization)
│       ├── index.scss           # Imports all SCSS styles from `styles/global/`
│       └── global/              # Shared/global SCSS utilities
│           ├── _variables.scss  # Variables: colors, fonts, spacing, etc.
│           ├── _mixins.scss     # SCSS mixins for reusability
│           ├── _typography.scss # Global typography (headings, paragraphs)
│           ├── _reset.scss      # Reset/normalize styles
│           └── _utilities.scss  # Helper classes or shared utilities
│
├── components/                  # Shared/common components
│   ├── Header.js                # Header (used globally)
│   ├── Footer.js                # Footer (used globally)
│   ├── Button.js                # Reusable Button component
│   ├── Modal.js                 # Reusable Modal component
│   └── styles/                  # Shared component styles
│       ├── header.module.scss
│       ├── footer.module.scss
│       └── modal.module.scss
│
├── lib/                         # Utilities (business logic, helpers)
│   ├── api.js                   # API fetch functions (e.g., `getCourses`, `getPosts`)
│   ├── auth.js                  # Authentication utilities
│   ├── config.js                # Project configuration (e.g., URLs, settings)
│   └── helpers.js               # Utility functions (e.g., `formatDate`, `capitalize`)
│
├── public/                      # Public/static assets (images, fonts)
│   ├── images/                  # App-wide images (logos, banners, icons)
│   │   ├── logo.png
│   │   ├── blog/
│   │   │   ├── post1.jpg
│   │   │   └── post2.jpg
│   │   ├── course/
│   │   │   ├── course1.jpg
│   │   │   └── course2.jpg
│   │   └── product/
│   │       ├── product1.jpg
│   │       └── product2.jpg
│   └── fonts/                   # Custom/project fonts
│       ├── OpenSans-Regular.woff2
│       └── Roboto-Bold.woff2
│
├── styles/                      # Top-level styles directory (optional, non-app-specific styles)
│   └── tailwind.css             # Example TailwindCSS file (or any global overrides)
│
├── next.config.js               # Next.js configuration (e.g., images, domains, etc.)
├── package.json                 # Dependencies and scripts
├── README.md                    # Project documentation
└── .env                         # Environment variables for API keys, secrets, etc.
```