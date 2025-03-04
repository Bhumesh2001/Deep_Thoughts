# Node.js User API

## Overview

This is a RESTful API for managing users, built with Node.js, Express.js, and MongoDB. The API provides CRUD operations for user management.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Swagger for API Documentation**
- **Helmet & CORS for Security**
- **Express Validator for Input Validation**

## Installation

### Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/nodejs-user-api.git
   cd nodejs-user-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables in a `.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/DeepThought
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Base URL

```
http://localhost:3000/api
```

### Users API

#### 1. Get All Users

```http
GET /api/users
```

- **Response**: List of all users

#### 2. Get User by ID

```http
GET /api/users/{id}
```

- **Path Parameter**: `id` (string) - User ID
- **Response**: User object or error message

#### 3. Create a New User

```http
POST /api/users
```

- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
  ```
- **Response**: Created user object

#### 4. Update a User

```http
PUT /api/users/{id}
```

- **Path Parameter**: `id` (string) - User ID
- **Request Body**:
  ```json
  {
    "name": "John Updated",
    "email": "john.updated@example.com",
    "age": 26
  }
  ```
- **Response**: Updated user object

#### 5. Delete a User

```http
DELETE /api/users/{id}
```

- **Path Parameter**: `id` (string) - User ID
- **Response**: Success message

## API Documentation

The API is documented using Swagger.

- Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to view API documentation.

## Project Structure

```
nodejs-user-api/
│── controllers/
│   ├── userController.js
│── middlewares/
│   ├── errorMiddleware.js
│   ├── validationMiddleware.js
│── models/
│   ├── User.js
│── routes/
|   ├── index.js
│   ├── userRoutes.js
│── utils/
│   ├── responseHandler.js
│── server.js
│── .gitignore
│── swagger.json
│── package.json
│── .env
│── README.md
```

## Contributing

Pull requests are welcome! Please open an issue first to discuss any changes.

## License

This project is open-source and available under the MIT License.
