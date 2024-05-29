# Chat App - MERN Stack

This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. The frontend is developed with React.js, while the backend is built with Node.js and Express.js. MongoDB is used as the database to store user information and chat messages.

## Features

1. **User Authentication**: Users can sign up and log in to the application using their email and password.

2. **Real-time Messaging**: Users can send and receive messages in real-time using Socket.IO for bidirectional communication between the client and server.

3. **User Profile**: Each user has a profile page where they can update their personal information, such as name, profile picture, and bio.

4. **Friend Management**: Users can send friend requests to other users and accept or reject incoming requests.

5. **Notifications**: The application sends notifications to users when they receive new messages or friend requests.

## Screenshots

### Login Page

![Login Page](https://github.com/noobcoder-31/ChatApp_Frontend/assets/114940964/7c0bcafa-2123-49cd-9381-b5e8013f36ca)

The login page allows users to enter their email and password to access the application.

### Chat Page

![Chat Page](https://github.com/noobcoder-31/ChatApp_Frontend/assets/114940964/977b79e9-6abb-48d4-92a9-9c33358236ba)

The chat page displays the list of active chats on the left-hand side, and the conversation area on the right. Users can start new chats, send messages, and share files from this page.

### Messages

![Messages](https://github.com/noobcoder-31/ChatApp_Frontend/assets/114940964/278452aa-f751-4b7d-8b6e-0f1ea9a78923)

This screenshot shows the conversation area, where users can see the messages exchanged between them and their friends or groups.

### Profile

![Profile](https://github.com/noobcoder-31/ChatApp_Frontend/assets/114940964/430f6960-0b70-4ba6-b75f-2e3a1c6416ed)

The profile page allows users to view and update their personal information, such as their name, profile picture, and bio.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository
2. Install dependencies for both the frontend and backend:
  - `cd frontend` and run `npm install`
  - `cd backend` and run `npm install`
3. Set up the MongoDB database and configure the connection string in the backend
4. Start the backend server: `cd backend` and run `npm start`
5. Start the frontend development server: `cd frontend` and run `npm start`
6. The application should now be running at `http://localhost:3000`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and the available scripts are the same as those provided by Create React App.

## Technologies Used

- **Frontend**: React.js, React Router, Axios, Socket.IO-Client
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JSON Web Tokens (JWT)
- **Database**: MongoDB

## Learn More

You can learn more about the technologies used in this project from the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Socket.IO Documentation](https://socket.io/docs/)

Feel free to customize and enhance the project according to your needs!
