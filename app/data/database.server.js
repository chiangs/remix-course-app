import { PrismaClient } from '@prisma/client';

/**
 * @type PrismaClient
 */
let prisma;

// Create new connections for prod
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    prisma.$connect();

    // Reuse existing in dev
} else {
    if (!global.__db) {
        global.__db = new PrismaClient();
        global.__db.$connect();
    }
    prisma = global.__db;
}

export { prisma };
