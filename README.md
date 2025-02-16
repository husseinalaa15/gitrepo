# GitHub Repository Explorer

## 📌 Overview

GitHub Repository Explorer is a React-based application that allows users to search for GitHub repositories, view key details, and star/unstar repositories directly from the UI. The project utilizes Zustand for state management and the GitHub REST API for fetching and updating repository data.

## 🚀 Features

- 🔍 **Search Repositories**: Users can search for GitHub repositories by entering a keyword.
- 📄 **Repository Details**: Displays the repository name, owner's username, description, number of stars, and forks.
- ⭐ **Star/Unstar Functionality**: Users can star/unstar repositories, with the UI updating instantly.
- ⚡ **Optimized State Management**: Zustand is used for managing search results and starred repositories.
- 🎨 **Modern UI**: Styled with Tailwind CSS for a responsive and visually appealing interface.

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Zustand
- **API**: GitHub REST API
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📂 Project Structure

```
📦 github-repo-explorer
├── 📁 src
│   ├── 📁 api          # API configuration
│   ├── 📁 components   # Reusable UI components
│   ├── 📁 hooks        # Custom hooks
│   ├── 📁 store        # Zustand store
│   ├── 📁 types        # TypeScript types
│   ├── 📁 utils        # Utility functions
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── .env.example       # Example environment variables
├── package.json       # Dependencies & scripts
├── README.md          # Project documentation
└── vite.config.ts     # Vite configuration
```

## 🔧 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/husseinalaa15/gitrepo.git
   cd gitrepo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file based on `.env.example`.
   - Add your **GitHub API Token**.
   ```sh
   GITHUB_API_TOKEN=your_github_personal_access_token
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🚀 Deployment

This project is deployed on **Vercel**. You can access the live version here:

## 📌 Notes

- Ensure you have a valid **GitHub Personal Access Token** with `public_repo` scope.

## 🤝 Contact

For any questions or issues, feel free to reach out!

### 🌐 Portfolio

Check out my other work: [Husseinalaa](https://husseinalaa.com)
