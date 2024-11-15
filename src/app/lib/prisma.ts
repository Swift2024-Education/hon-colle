// lib/prisma.ts
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const PrismaClientSingleton = () => {
    return new PrismaClient().$extends(withAccelerate());
};

declare const globalThis: {
    prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
}& typeof global;

const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;