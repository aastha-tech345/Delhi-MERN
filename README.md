# Delhi-MERN

A full-stack MERN (MongoDB, Express.js, React, Node.js) project.

## Getting Started

Follow these steps to set up and run the project.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (if running locally)
- npm or yarn

---

## Installation and Running the Project

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/Delhi-MERN.git
cd Delhi-MERN

2. Backend Setup
cd Backend
npm install
npm start

The backend will start on http://localhost:4142 (or your configured port).

3. Frontend Setup
Open a new terminal, then:
cd Frontend
npm install
npm start

The frontend will start on http://localhost:3000.

Environment Variables
Create a .env file in the backend directory with:
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key

Delhi-MERN/
│── backend/       # Node.js (Express) API
│── frontend/      # React application
│── README.md      # Project documentation


Available Scripts
In the backend directory:

npm start - Starts the backend server
npm run dev - Starts the server with Nodemon (for development)
In the frontend directory:

npm start - Starts the React development server
