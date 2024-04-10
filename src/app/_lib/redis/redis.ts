import { Redis } from "@upstash/redis";

export const client = new Redis({
  url: process.env.NEXT_PUBLIC_REDIS_URL || "",
  token: process.env.NEXT_PUBLIC_REDIS_TOKEN || "",
});
