import { z } from 'zod';

// Contact information schema
export const contactInfoSchema = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  phone: z.string()
});

export type ContactInfo = z.infer<typeof contactInfoSchema>;

// Personal information schema (includes contact + summary)
export const personalInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  summary: z.string(),
  created_at: z.coerce.date()
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;

// Skill schema
export const skillSchema = z.object({
  id: z.number(),
  category: z.string(), // Core Competence, Technical Skills, Soft Skills, Languages
  name: z.string(),
  level: z.string().nullable(), // Fluent, Native, Conversational, etc. (nullable for non-language skills)
  created_at: z.coerce.date()
});

export type Skill = z.infer<typeof skillSchema>;

// Work experience schema
export const workExperienceSchema = z.object({
  id: z.number(),
  title: z.string(),
  organization: z.string(),
  location: z.string(),
  start_date: z.string(), // Using string for flexible date formats
  end_date: z.string().nullable(), // Nullable for ongoing positions
  description: z.string(),
  type: z.string(), // Internship, Fieldwork, Full-time, etc.
  created_at: z.coerce.date()
});

export type WorkExperience = z.infer<typeof workExperienceSchema>;

// Education schema
export const educationSchema = z.object({
  id: z.number(),
  degree: z.string(),
  field_of_study: z.string().nullable(),
  institution: z.string(),
  university: z.string().nullable(),
  duration: z.string(), // e.g., "2023-2025" or "2020-2023"
  status: z.string().nullable(), // Completed, In Progress, etc.
  created_at: z.coerce.date()
});

export type Education = z.infer<typeof educationSchema>;

// Project schema
export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.string(), // Mini Research, Research Study, etc.
  category: z.string().nullable(), // Additional categorization if needed
  created_at: z.coerce.date()
});

export type Project = z.infer<typeof projectSchema>;

// Achievement schema
export const achievementSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.string(), // Paper Presentation, Certification, Participation, etc.
  category: z.string().nullable(), // Conference, Workshop, Training, etc.
  created_at: z.coerce.date()
});

export type Achievement = z.infer<typeof achievementSchema>;

// Input schemas for creating records (if needed for admin functionality)
export const createPersonalInfoInputSchema = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  summary: z.string()
});

export type CreatePersonalInfoInput = z.infer<typeof createPersonalInfoInputSchema>;

export const createSkillInputSchema = z.object({
  category: z.string(),
  name: z.string(),
  level: z.string().nullable()
});

export type CreateSkillInput = z.infer<typeof createSkillInputSchema>;

export const createWorkExperienceInputSchema = z.object({
  title: z.string(),
  organization: z.string(),
  location: z.string(),
  start_date: z.string(),
  end_date: z.string().nullable(),
  description: z.string(),
  type: z.string()
});

export type CreateWorkExperienceInput = z.infer<typeof createWorkExperienceInputSchema>;

export const createEducationInputSchema = z.object({
  degree: z.string(),
  field_of_study: z.string().nullable(),
  institution: z.string(),
  university: z.string().nullable(),
  duration: z.string(),
  status: z.string().nullable()
});

export type CreateEducationInput = z.infer<typeof createEducationInputSchema>;

export const createProjectInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.string(),
  category: z.string().nullable()
});

export type CreateProjectInput = z.infer<typeof createProjectInputSchema>;

export const createAchievementInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.string(),
  category: z.string().nullable()
});

export type CreateAchievementInput = z.infer<typeof createAchievementInputSchema>;