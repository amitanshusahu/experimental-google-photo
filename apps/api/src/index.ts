import { createHTTPHandler } from "@gphoto/trpc/dist/trpc";
import { appRouter } from "@gphoto/trpc/dist/routes/router";
import cors from "cors";
import { createServer } from 'http'

const handler = createHTTPHandler({
  router: appRouter,
  createContext() {
    return {};
  },
});
createServer((req, res) => {
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  }

  handler(req, res);
}).listen(3333);
