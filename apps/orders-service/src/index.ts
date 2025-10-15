import Fastify from "fastify";
import { env } from "@config/env";
import { Order, ApiResponse } from "@shared/index";

const app = Fastify();
const orders: Order[] = [{ id: "o1", userId: "u1", total: 99.9 }];

app.get("/health", () => ({ ok: true, service: "orders" }));
app.get<{
  Reply: ApiResponse<Order[]>;
}>("/", () => ({ ok: true, data: orders }));

app.listen({ port: 4002, host: "0.0.0.0" });
