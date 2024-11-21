import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/lib/prisma";

export const authConfig: NextAuthConfig = {
  providers: [
    Google,
  ], // 後ほどここにGoogle プロバイダを追加していきます
  adapter: PrismaAdapter(prisma),
};

