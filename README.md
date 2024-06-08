# Next.js TODO App with MongoDB Atlas

This is a TODO application built with Next.js and MongoDB Atlas. The app allows users to create, read, update, and delete TODO items. It uses MongoDB Atlas for data storage and is designed to be deployed easily.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [License](#license)

## Demo

A live demo of the application can be found [here](https://your-deployed-app-url.com).

## Features

- Add new TODO items
- Mark TODO items as completed
- Delete TODO items
- Edit existing TODO items
- Responsive design

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repo:**

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
2. **Navigate to the project directory:**
    cd your-repo-name
3. **Install dependencies:**
    npm install
4. **Start the server:**
    npm run dev
5. **Open the app in your browser:**
    http://localhost:3000
   ```

## Usage

1. **Create a new TODO item:**

   ```sh
   npm run create
   ```

2. **Read all TODO items:**

   ```sh
   npm run read
   ```

3. **Update an existing TODO item:**

## Technologies Used

- Next.js
- MongoDB Atlas
- Node.js
- Express.js
- JavaScript
- HTML
- CSS


## Deployment

To deploy the app, follow these steps:

1. **Create a Vercel account:**

   ```sh
   npm install -g vercel
   ```

2. **Install the Vercel CLI:**

   ```sh
   npm install -g vercel
   ```

3. **Deploy the app:**

   ```sh
   vercel deploy
   ```

## Environment Variables

To deploy the app, you will need to set the following environment variables:

- `MONGODB_URI`: The connection string for your MongoDB Atlas cluster.
- `MONGODB_DB`: The name of the database you want to use.
- `MONGODB_COLLECTION`: The name of the collection you want to use.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.