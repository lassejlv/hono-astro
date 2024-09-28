import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = new Hono();
app.use("/*", serveStatic({ root: "./dist/client" }))
app.use(ssrHandler)

console.log("Server listening on http://localhost:3000")

export default {
  fetch: app.fetch,
  port: 3000
}
