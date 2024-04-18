## Wikipedia On This Day

Welcome to the Wikipedia On This Day project!
This repository contains both the backend and frontend code for a web application that dynamically displays "on this day" entries from the Wikipedia API. 

- Production: https://selected-daily-values-web-frontend.onrender.com

## Requirements
- Node.js v20.11.0
- npm v10.2.4

## Backend
### Technologies used:
- Express
- TypeScript
- Dotenv

### Endpoints:
- `GET /onthisday/:month/:day`: This endpoint retrieves events from Wikipedia for a specific day.

### Setup

To run the backend project, you need to create a `.env` file at the root of the backend folder. 
Here is a template for the `.env` file:

```
PORT=3001
```

## Frontend
### Technologies used:
- React
- TypeScript
- MUI
- CSS

## Usage

1. Clone this repository.
2. Navigate to the `backend` directory and follow the setup instructions.
3. Navigate to the `frontend` directory and follow the setup instructions.

## Local Development

### Backend Development

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Start the server: `npm start`.

### Frontend Development

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

## Contributors

- Hila Itzhak