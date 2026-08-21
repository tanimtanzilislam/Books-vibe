1.# Book Vibe

Book Vibe is a modern React application for discovering books, exploring detailed information, and organizing reading goals with a clean, user-friendly interface. Built with Vite, React Router, Tailwind CSS, and DaisyUI, the app helps readers browse a curated set of titles and manage personal read and wish lists.

## Features

- Browse a curated catalog of books with cover images and metadata
- View full book details, including description, author, category, rating, pages, and publication year
- Add books to a personal Read List or Wish List
- Persist lists using browser localStorage for a seamless experience
- Sort saved books by pages or rating
- Responsive layout for desktop and mobile browsing
- Clean, polished UI using Tailwind CSS and DaisyUI

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI
- JavaScript

## Project Structure

```bash
project/
├── public/
│   └── booksData.json
├── src/
│   ├── components/
│   ├── context/
│   ├── layout/
│   ├── pages/
│   ├── routes/
│   ├── utils/
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal to view the app in the browser.

## Production Build

To create a production-ready build:

```bash
npm run build
```

The build output will be generated in the `dist` folder.

## Usage

- Open the home page to browse available books.
- Click a book card to view its details.
- Use the actions to add a title to your Read List or Wish List.
- Navigate to the Books page to manage and sort your saved selections.

## License

This project is for educational and portfolio use.

## Author

Book Vibe is designed and developed as a front-end reading app project focused on clean UX and practical book management.