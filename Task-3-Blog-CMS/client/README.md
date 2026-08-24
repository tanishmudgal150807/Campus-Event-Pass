# Task 3 — Blog/CMS Mini App

## 1. Project Title

Blog/CMS Mini App

## 2. Objective

To build a full-stack mini Content Management System that allows users to create, view, edit, delete, and search blog posts.

## 3. Problem Statement

Managing blog content requires an interface for creating, viewing, editing, and deleting posts, along with a backend for storing and retrieving the data.

This project demonstrates how a React frontend can communicate with a Node.js and Express backend through REST APIs.

## 4. Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- REST API
- JSON file storage
- CORS

## 5. Implementation Approach

The frontend is developed using React and organized into reusable components such as:

- PostForm
- PostCard
- PostList

The backend is developed using Node.js and Express.js.

REST API endpoints are implemented for creating, reading, updating, and deleting blog posts.

Blog posts are stored in a JSON file on the server.

The React frontend communicates with the Express backend using HTTP requests.

### Application Architecture

```text
                 React Frontend
                  localhost:5173
                        |
                        | HTTP Requests
                        ↓
                 Express Backend
                  localhost:5000
                        |
                        ↓
                   posts.json
## 6. Features:
- Create blog posts
- View individual blog posts
- Edit existing posts
- Delete posts
- Search posts by keyword
- Form validation
- Responsive grid layout
- Reusable React components
- Frontend-backend integration
- CRUD operations

## 7. How to Run

Task 3 requires both the backend and frontend to be running.

Start the Backend

Open a terminal and navigate to the server folder:

cd Task-3-Blog-CMS/server

Install the backend dependencies:

npm install

Start the backend:

node server.js

The backend runs on:

http://localhost:5000
Start the Frontend

Open a second terminal and navigate to the client folder:

cd Task-3-Blog-CMS/client

Install the frontend dependencies:

npm install

Start the React development server:

npm run dev

The frontend normally runs on:

http://localhost:5173

Both the frontend and backend must be running for the Blog/CMS application to work correctly.

8. Future Improvements
- Add user authentication and authorization.
- Add image upload functionality.
- Add categories and tags.
- Add pagination for large numbers of posts.
- Replace JSON storage with MongoDB or SQLite.
- Add a rich text editor.
- Add comments and reactions.
- Add post scheduling.
- Deploy the frontend and backend online.
- Improve accessibility and mobile responsiveness.