import { router } from "./Routes";
import express from "express";

import 'dotenv/config'

const server = express();

server.use(router);

export { server }


