import { z } from "zod";
const schema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().default(3000),
  USERS_URL: z.string().default("http://localhost:4001"),
  ORDERS_URL: z.string().default("http://localhost:4002"),
});
export const env = schema.parse(process.env);
