import { Router } from "express";
import { EventsController } from "../controllers/events-controller";

export class AppRouter {
    private router: Router;
    private events_controller: EventsController;
    
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
        this.events_controller = new EventsController();
    }

    private setRoutes() {
        this.router.get('/onthisday/:month/:day', this.events_controller.getThisDayEvents.bind(this.events_controller));
    }

    public getRouter(): Router {
        return this.router;
    }
}