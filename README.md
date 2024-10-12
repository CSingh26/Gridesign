
# Project Overview

This project is built using Next.js with TypeScript and Tailwind CSS. It is structured to efficiently handle various sections of a website, including Home, About, Services, and Contact pages. The project also utilizes JSON files to manage content dynamically and incorporates components for easy code reusability.

## Folder & File Structure

Here’s an overview of the files and directories in this project:

```
.
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── assets
│   ├── data
│   └── fonts
├── src
│   └── app
│       ├── Component
│       ├── about
│       ├── contact
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       └── services
├── tailwind.config.ts
└── tsconfig.json
```

### Root Directory (`/`)

- **README.md**: The documentation file you're reading right now, providing a project overview.
- **next-env.d.ts**: Auto-generated file by Next.js for TypeScript support.
- **next.config.mjs**: Configuration file for Next.js, where custom settings such as Webpack, image optimization, and environment variables can be defined.
- **package-lock.json**: Ensures consistent installation of dependencies across environments by locking specific package versions.
- **package.json**: Contains metadata about the project, including dependencies and scripts used for building and running the project.
- **postcss.config.mjs**: Configuration file for PostCSS, which allows the usage of various CSS transformations.

### Public Directory (`/public`)

- **/assets**: Contains static assets like images and logos.
  - `Logo.png`, `Logo.svg`: Images of the logo used in the website.
  - `achievements.png`, `mission.png`, `vision.png`: Visuals representing company achievements, mission, and vision.
  - `person.jpg`: Likely used for testimonial or team sections.
  - `website-branding.png`: General branding image for the website.

- **/data**: Stores JSON files that provide content for various pages.
  - `aboutCards.json`: Data for the "About" page cards.
  - `contact.json`: Contact information used in the "Contact" page.
  - `homePage.json`: Data for the homepage, such as featured sections and highlights.
  - `services.json`: Contains details about the services offered.

- **/fonts**: Contains custom fonts used on the website.

### Source Directory (`/src`)

This is where the core logic and structure of the application reside.

- **/app/Component**: Contains components used across various pages.
  - **AboutPageComponents/**: Contains components specifically for the "About" page.
    - `HeaderSection.tsx`: Component for the header section of the About page.
    - `InfoCardSection.tsx`: Displays information in card format.
    - `RootsSection.tsx`: Represents the company's roots and history.
    - `TeamSection.tsx`: Component showcasing the team.
  
  - **ContactPageComponents/**: Contains components for the "Contact" page.
    - `ContactForm.tsx`: Form component for users to submit their contact details.
    - `ContactInfo.tsx`: Displays contact details (address, phone number, etc.).
    - `MapContainer.tsx`: Contains the map showing the company's location.
  
  - **HomePageComponents/**: Contains components for different sections of the homepage.
    - `ExpertiseSection.tsx`: Displays expertise and specialties.
    - `FeaturesSection.tsx`: Highlights key features of the business.
    - `FormComponent.tsx`: General form component for collecting information.
    - `HeroSection.tsx`: The hero banner component for the homepage.
    - `HomePageContactSection.tsx`: Contact section on the homepage.
    - `MapComponent.tsx`: Renders a map on the homepage.
    - `ServiceSection.tsx`: Section that displays available services.
    - `Testimonial.tsx`: Testimonial section displaying customer feedback.

  - **LoadingComponent/**: Components related to the loading screen.
    - `loading.css`: CSS file for loading screen styles.
    - `loading.tsx`: Component that shows a loading animation or message.

  - **NavbarComponent**: Contains the navigation bar for the site.
    - `Navbar.tsx`: Main navigation bar component.

  - **ServicePageComponents**: Contains components for the "Services" page.
    - `serviceCard.tsx`: Component for displaying individual service cards.
    - `serviceForm.tsx`: Form for users to inquire about services or request a quote.

- **about/page.tsx**: Renders the "About" page, using components from `AboutPageComponents`.
- **contact/page.tsx**: Renders the "Contact" page, using components from `ContactPageComponents`.
- **favicon.ico**: The website’s favicon (the small icon displayed on the browser tab).
- **globals.css**: Contains global CSS styles for the entire application.
- **layout.tsx**: Defines the layout of the website, including header, footer, and the main content area.
- **page.tsx**: Represents the root page (likely the homepage) of the application.
- **services/page.tsx**: Renders the "Services" page using components from `ServicePageComponents`.

### Configuration Files

- **tailwind.config.ts**: Configuration for Tailwind CSS, where utility classes are customized.
- **tsconfig.json**: TypeScript configuration file, defining the settings for the TypeScript compiler, including path aliases and type checking.

## Key Features

- **Modular Design**: The project uses a component-based approach for reusability and maintainability.
- **Content Management**: Dynamic data for services, about cards, and other sections are managed through JSON files stored in `/public/data`.
- **TypeScript Support**: The project is fully typed with TypeScript for improved code safety and developer experience.
- **Next.js**: A powerful React framework that provides server-side rendering, static site generation, and routing out of the box.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid styling of components.

---

This structure helps keep the project modular, maintainable, and easily extendable, making it easy for others to contribute or understand the codebase.
