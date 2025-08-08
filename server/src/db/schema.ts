import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

// Personal information table (contact info + summary)
export const personalInfoTable = pgTable('personal_info', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  summary: text('summary').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// Skills table
export const skillsTable = pgTable('skills', {
  id: serial('id').primaryKey(),
  category: text('category').notNull(), // Core Competence, Technical Skills, Soft Skills, Languages
  name: text('name').notNull(),
  level: text('level'), // Nullable for non-language skills
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// Work experience table
export const workExperienceTable = pgTable('work_experience', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  organization: text('organization').notNull(),
  location: text('location').notNull(),
  start_date: text('start_date').notNull(), // Using text for flexible date formats
  end_date: text('end_date'), // Nullable for ongoing positions
  description: text('description').notNull(),
  type: text('type').notNull(), // Internship, Fieldwork, Full-time, etc.
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// Education table
export const educationTable = pgTable('education', {
  id: serial('id').primaryKey(),
  degree: text('degree').notNull(),
  field_of_study: text('field_of_study'), // Nullable
  institution: text('institution').notNull(),
  university: text('university'), // Nullable
  duration: text('duration').notNull(), // e.g., "2023-2025" or "2020-2023"
  status: text('status'), // Nullable - Completed, In Progress, etc.
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// Projects table
export const projectsTable = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  type: text('type').notNull(), // Mini Research, Research Study, etc.
  category: text('category'), // Nullable - Additional categorization if needed
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// Achievements table
export const achievementsTable = pgTable('achievements', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  type: text('type').notNull(), // Paper Presentation, Certification, Participation, etc.
  category: text('category'), // Nullable - Conference, Workshop, Training, etc.
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript types for the table schemas
export type PersonalInfo = typeof personalInfoTable.$inferSelect;
export type NewPersonalInfo = typeof personalInfoTable.$inferInsert;

export type Skill = typeof skillsTable.$inferSelect;
export type NewSkill = typeof skillsTable.$inferInsert;

export type WorkExperience = typeof workExperienceTable.$inferSelect;
export type NewWorkExperience = typeof workExperienceTable.$inferInsert;

export type Education = typeof educationTable.$inferSelect;
export type NewEducation = typeof educationTable.$inferInsert;

export type Project = typeof projectsTable.$inferSelect;
export type NewProject = typeof projectsTable.$inferInsert;

export type Achievement = typeof achievementsTable.$inferSelect;
export type NewAchievement = typeof achievementsTable.$inferInsert;

// Export all tables for proper query building and relations
export const tables = {
  personalInfo: personalInfoTable,
  skills: skillsTable,
  workExperience: workExperienceTable,
  education: educationTable,
  projects: projectsTable,
  achievements: achievementsTable
};