import Fastify from "fastify";
import proxy from "@fastify/http-proxy";
import { env } from "@config/env";

const app = Fastify();

await app.register(proxy, {
  upstream: env.USERS_URL,
  prefix: "/users",
  rewritePrefix: "/",
});
await app.register(proxy, {
  upstream: env.ORDERS_URL,
  prefix: "/orders",
  rewritePrefix: "/",
});

app.get("/health", async () => ({ ok: true, service: "api-gateway" }));

app.listen({ port: env.PORT, host: "0.0.0.0" });
