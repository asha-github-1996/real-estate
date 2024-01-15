# MERN Stack - Real Estate

> Real Estate Marketplace website built with the MERN stack with React, Redux for state management, Tailwind CSS for style

- features:
  - Node provides the backend environment for this application
  - Express middleware is used to handle requests, routes
  - Mongoose schemas to model the application data
  - React for displaying UI components
  - Redux to manage application's state

## Demo: https://real-estate-ds9g.onrender.com/

## Installation process

1. #### clone the repo using this command

   ```bash
   git clone https://github.com/ashraf-kabir/mern-ecommerce.git
   ```

2. #### install npm packages

   1. install backend packages

   ```bash
   cd real-estate
   npm install
   ```

   2. install frontend packages

   ```bash
   cd client
   npm install
   ```

3. go to the parent folder of real-estate & create .env for connection, JWT_SECRET, MONGODB.

   ```bash
   cd real-estate
   sudo nano .env
   ```

   (ctrl+x to save & nano follow instruction there)

   ##### sample code for backend .env

   ```env
   MONGODB=YOUR_MONGODB_URI
   JWT_SECRET=YOUR_JWT_SECRET
   ```

4. create another .env file inside client directory for VITE_FIREBASE_API_KEY.

   ```bash
   cd real-estate/client
   sudo nano .env
   ```

   ##### sample code for frontend .env

   ```env
   VITE_FIREBASE_API_KEY=YOUR_API_KEY
   ```

5. Run the Express server only by using this command

   ```bash
   cd real-estate
   npm run dev
   ```

6. Run the React client only by using this command
   ```bash
   cd real-estate
   cd client
   npm run dev
   ```

### Server runs on http://localhost:3000 and client on http://localhost:5173

## Tech Stack

- MongoDB
- Express.js
- Reactjs
- Nodejs
