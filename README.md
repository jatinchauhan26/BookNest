# 📚 BookNest — Read. Explore. Discover.

A simple and user-friendly book platform built with **React.js, Node.js, Express.js, and MongoDB**. BookNest lets users explore books, preview PDFs, and download available free books.

---

## ✨ Features

- 📖 Browse available books
- 🔍 Search for books
- 📄 Preview books in PDF format
- ⬇️ Download free books when PDFs are available
- 🔐 User signup and login
- 💎 Paid-book access interface (checkout coming soon)

## 🛠️ Tech Stack

| Frontend | Backend | Database |
|---|---|---|
| React.js | Node.js | MongoDB |
| Vite | Express.js | Mongoose |
| JavaScript | REST APIs | — |
| HTML & CSS | — | — |

## 📂 Project Structure

```text
BookNest/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## 🚀 Getting Started

Follow these steps to run BookNest on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/try/download/community) or MongoDB Atlas

### 1. Clone the Repository

```bash
git clone https://github.com/jatinchauhan26/BookNest.git
cd BookNest
```

### 2. Start the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=4001
MongoDBURI=mongodb://127.0.0.1:27017/bookStore
```

Make sure MongoDB is running, then start the server:

```bash
node index.js
```

### 3. Start the Frontend

Open a new terminal in the main `BookNest` folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in your terminal to use the website.

## 🔐 Authentication

Users can create an account and log in to access protected features. Free books can be previewed or downloaded when their PDF files are available.

## 🔮 Future Improvements

- 💳 Add payment functionality for paid books
- 📚 Expand the book collection
- 🔎 Improve search and filtering
- 👤 Add more user features
- 🌐 Deploy the website online

## 👨‍💻 Author

**Jatin Chauhan**

[![GitHub](https://img.shields.io/badge/GitHub-jatinchauhan26-181717?style=for-the-badge&logo=github)](https://github.com/jatinchauhan26)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/jatin-chauhan-25453735a/)

---

⭐ If you like this project, consider giving the repository a star!

