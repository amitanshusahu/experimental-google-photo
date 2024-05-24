import { initTRPC } from "@trpc/server";
export {createHTTPHandler} from "@trpc/server/adapters/standalone"


const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;