# Charlotte's Blog

Source code repository for **Yaffleria**, providing corporate analysis and investment insights for individual investors.

## 🌟 Project Overview

This project is a **Next.js** based static blog focusing on deep investment analysis and data visualization.

Key Features:

- **MDX-based Blog**: Investment reports written in Markdown (MDX) for rich visualization.
- **Data Visualization**: Dynamic charts and data representation using Recharts.
- **English-Only**: Content and interface optimized for a global audience.

---

## 🏗️ Project Architecture

The project follows a **Hybrid Vertical Architecture** for scalability and maintainability.

### 📂 Directory Overview

#### `/app`

Core structure using Next.js App Router.

- **`blog/`**: Blog-related page routes and layouts.
- **`tags/`**: Tag listing and filtering functionality.
- **`about/`**: Author information and blog overview.

#### `/features`

Slightly isolated code base for specific domains or functionalities.

- **`charts/`**: Chart components used in specific corporate analyses or reports.
  - `[domain-name]/`: Sub-directories for individual analysis topics (e.g., `kraken-geopolitical`, `mastercard-earnings`).

#### `/components`

Reusable components used across the site.

- **`layout/`**: Global layouts (Header, Footer, Navigation, etc.).
- **`ui/`**: Universal UI components (Button, Card, Link, Tag, etc.).
- **`mdx/`**: MDX-specific components used inside blog posts.

#### `/lib` & `/data`

- **`/lib`**: Shared utility functions and configurations.
- **`/data`**: Site metadata, navigation links, and blog content.

### 📐 Design Principles

1.  **Vertical Slicing**
    - Code related to specific features (e.g., charts for a specific report) is grouped in `/features` to increase cohesion.
2.  **Clear Scope**
    - `components/ui` contains only globally reusable UI elements. Feature-specific UI resides in the respective feature folder.
