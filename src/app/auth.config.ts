import { NextAuthConfig } from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";

export default {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    EmailProvider({
      id: "email",
      name: "email",
      server: {
        host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
        port: Number(process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT),
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    }),
  ],
} satisfies NextAuthConfig;
