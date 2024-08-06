#LIVE APP
link: https://booksbay.vercel.app/

# Book Search Web Application

This project is a web application that allows users to search for books and get links to download them. The backend is built with Express.js and Axios, and the frontend is created using Create React App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the backend server in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the React frontend in your browser and access the backend at the specified endpoint.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Backend Explanation

The backend of this application is built using Express.js. It provides an API endpoint to search for books on Archive.org and returns the results in a structured format.

### `GET /search`

This endpoint allows users to search for books based on a query parameter.

#### Request Parameters

- `query`: The search term for the books.

#### Response

The response is a JSON array of book objects, each containing the following fields:
- `title`: The title of the book.
- `author`: The author of the book (or 'Unknown' if not available).
- `publishYear`: The year the book was published.
- `link`: A link to the book on Archive.org.
- `cover`: A link to the book's cover image.

### Example

To search for books related to "javascript", you can make a request to:

