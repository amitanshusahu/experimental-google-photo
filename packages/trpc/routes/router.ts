import { publicProcedure, router } from '../trpc';
import { PrismaClient } from '@pkg/prisma';
const db = new PrismaClient;

export const appRouter = router({
  userList: publicProcedure
  .query( async () => {
    const users = await db.user.findMany();

    return users;
  }),

});

export type AppRouter = typeof appRouter;
