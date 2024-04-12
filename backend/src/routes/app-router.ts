import { Router } from "express";
import { AppController } from "../controllers/app-controller";

export class AppRouter {
    private router: Router;
    private app_controller: AppController;
    
    constructor() {
        this.init();
    }

    private init() {
        this.setRouter();
        this.setController();
        this.setRoutes();
    }

    private setRouter() {
        this.router = Router();
    }

    private setController() {
        this.app_controller = new AppController();
    }

    private setRoutes() {
        this.router.get('/onthisday/:month/:day', this.app_controller.getTitle.bind(this.app_controller));
    }

    public getRouter(): Router {
        return this.router;
    }
}