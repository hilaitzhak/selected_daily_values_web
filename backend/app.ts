import { AppServer } from "./src/server";

const main = async () => {
    const server = new AppServer();
    await server.init();
    server.listen();
}

main();