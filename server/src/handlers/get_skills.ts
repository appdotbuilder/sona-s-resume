import { type Skill } from '../schema';

export const getSkills = async (): Promise<Skill[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all skills categorized by type from the database.
    return Promise.resolve([
        // Core Competence Skills
        {
            id: 1,
            category: "Core Competence",
            name: "Case Management & Care Coordination",
            level: null,
            created_at: new Date()
        },
        {
            id: 2,
            category: "Core Competence",
            name: "Psychosocial Assessments & Intervention",
            level: null,
            created_at: new Date()
        },
        {
            id: 3,
            category: "Core Competence",
            name: "Patient Advocacy & Counseling",
            level: null,
            created_at: new Date()
        },
        // Technical Skills
        {
            id: 4,
            category: "Technical Skills",
            name: "Microsoft Office Suite (Word, Excel, PowerPoint)",
            level: null,
            created_at: new Date()
        },
        // Languages
        {
            id: 5,
            category: "Languages",
            name: "English",
            level: "Fluent (Read, Write, Speak)",
            created_at: new Date()
        },
        {
            id: 6,
            category: "Languages",
            name: "Malayalam",
            level: "Native",
            created_at: new Date()
        },
        {
            id: 7,
            category: "Languages",
            name: "Hindi",
            level: "Conversational speaking, Basic Writing",
            created_at: new Date()
        },
        {
            id: 8,
            category: "Languages",
            name: "Tamil",
            level: "Conversational",
            created_at: new Date()
        }
    ] as Skill[]);
};