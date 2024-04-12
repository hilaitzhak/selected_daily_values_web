import express, { Express } from "express";
import dotenv from 'dotenv';
import cors from "cors";
import { AppRouter } from "./routes/app-router";

export class AppServer {
    public app: Express;

    constructor () {}

    // Initialize the server
    public async init() {
        dotenv.config();
        this.setApp();
        this.setMiddlewares();
        this.setRouter();
    }

    // Set up the Express app
    private setApp() {
        this.app = express();
    }

    // Set up middleware
    private setMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    // Set up routing
    private setRouter() {
        const app_router = new AppRouter();
        this.app.use('/', app_router.getRouter());
    }

    // Start listening for incoming requests
    public listen() {
        const PORT = process.env.PORT || 5000;
        this.app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}!`);
        });
    }
}