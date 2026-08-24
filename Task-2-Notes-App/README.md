# Task 2 — Notes App

## 1. Project Title

Notes App

## 2. Objective

To build a Notes application using React that allows users to create, view, edit, delete, and search notes while maintaining the notes after a page refresh.

## 3. Problem Statement

Users need a simple and convenient way to store and organize short pieces of information. This application provides a lightweight digital notes system with CRUD functionality, search capabilities, and persistent browser storage.

## 4. Tech Stack

- React
- Vite
- JavaScript
- HTML
- CSS
- LocalStorage

## 5. Implementation Approach

The application uses React state management to maintain the collection of notes.

The interface is organized into reusable components such as:

- NoteForm
- NoteCard
- NoteList

CRUD operations are implemented using React state.

A search bar is provided to filter notes based on keywords entered by the user.

LocalStorage is used to persist the notes so that they remain available even after refreshing the browser.

## 6. Features

- Create notes
- View notes
- Edit notes
- Delete notes
- Search notes by keyword
- LocalStorage persistence
- Reusable React components
- React state management
- Responsive user interface

## 7. Screenshots
![page](<Screenshot 2026-08-25 000509.png>)
![demo](<Screenshot 2026-08-25 000547.png>)
![alt](<Screenshot 2026-08-25 000601.png>)
## 8. How to Run

Open a terminal and navigate to the Task 2 folder:

```bash
cd Task-2-Notes-App
Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL displayed by Vite.

## 9. Future Improvements

- Add note categories and tags.
- Add note sorting.
- Add dark and light themes.
- Add rich text editing.
- Add cloud synchronization.
- Add user authentication.
- Add note export functionality.
