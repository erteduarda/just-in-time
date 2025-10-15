import Fastify from "fastify";
import { env } from "@config/env";
import { User, ApiResponse } from "@shared/index";

const app = Fastify();
const users: User[] = [{ id: "u1", email: "test@example.com" }];

app.get("/health", () => ({ ok: true, service: "users" }));
app.get<{
  Reply: ApiResponse<User[]>;
}>("/", () => ({ ok: true, data: users }));

app.listen({ port: 4001, host: "0.0.0.0" });
