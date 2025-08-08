import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import 'dotenv/config';
import cors from 'cors';
import superjson from 'superjson';

// Import handlers
import { getPersonalInfo } from './handlers/get_personal_info';
import { getSkills } from './handlers/get_skills';
import { getWorkExperience } from './handlers/get_work_experience';
import { getEducation } from './handlers/get_education';
import { getProjects } from './handlers/get_projects';
import { getAchievements } from './handlers/get_achievements';

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  // Health check endpoint
  healthcheck: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),

  // Resume data endpoints
  personalInfo: publicProcedure
    .query(() => getPersonalInfo()),

  skills: publicProcedure
    .query(() => getSkills()),

  workExperience: publicProcedure
    .query(() => getWorkExperience()),

  education: publicProcedure
    .query(() => getEducation()),

  projects: publicProcedure
    .query(() => getProjects()),

  achievements: publicProcedure
    .query(() => getAchievements()),
});

export type AppRouter = typeof appRouter;

async function start() {
  const port = process.env['SERVER_PORT'] || 2022;
  const server = createHTTPServer({
    middleware: (req, res, next) => {
      cors()(req, res, next);
    },
    router: appRouter,
    createContext() {
      return {};
    },
  });
  server.listen(port);
  console.log(`TRPC server listening at port: ${port}`);
}

start();