import { type Achievement } from '../schema';

export const getAchievements = async (): Promise<Achievement[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all achievements and certifications from the database.
    return Promise.resolve([
        {
            id: 1,
            title: "Child Abuse in Diverse Situations: A Global Perspective of Prevalent, Impact, and Social Work Intervention",
            description: "Presented research paper at an International Conference addressing child abuse from a global perspective and social work interventions.",
            type: "Paper Presentation",
            category: "International Conference",
            created_at: new Date()
        },
        {
            id: 2,
            title: "Navigating Ethics in Fieldwork: A Competency-Based Approach to Social Work Practice",
            description: "Presented paper focusing on ethical considerations in social work fieldwork at the IX Kerala Social Work Students Congress.",
            type: "Paper Presentation",
            category: "State Conference",
            created_at: new Date()
        },
        {
            id: 3,
            title: "Green Social Work: Climate Change and the WASH Sector",
            description: "Presented paper on environmental social work and its intersection with Water, Sanitation, and Hygiene (WASH) sector at a national seminar.",
            type: "Paper Presentation",
            category: "National Seminar",
            created_at: new Date()
        },
        {
            id: 4,
            title: "Breaking the Silence: Addressing Human Rights Violations and Violence Against Women",
            description: "Presented research addressing human rights violations and gender-based violence, focusing on social work interventions and advocacy.",
            type: "Paper Presentation",
            category: "Conference",
            created_at: new Date()
        },
        {
            id: 5,
            title: "Employability Skills Training Program",
            description: "Successfully completed comprehensive training program focused on developing essential skills for professional employment.",
            type: "Certification",
            category: "Training Program",
            created_at: new Date()
        },
        {
            id: 6,
            title: "Walk for Freedom - Human Trafficking Awareness",
            description: "Participated in awareness campaign to raise consciousness about human trafficking and modern slavery issues.",
            type: "Participation",
            category: "Social Awareness",
            created_at: new Date()
        },
        {
            id: 7,
            title: "Awake 2023 Cultural Fest Coordinator",
            description: "Coordinated state-level cultural festival for differently-abled children, demonstrating leadership and organizational skills in inclusive event management.",
            type: "Coordination",
            category: "Cultural Event",
            created_at: new Date()
        },
        {
            id: 8,
            title: "Advanced SPSS Insights Workshop",
            description: "Participated in advanced statistical analysis workshop with Community Solution Consultants, Tamil Nadu, enhancing research methodology skills.",
            type: "Workshop Participation",
            category: "Technical Training",
            created_at: new Date()
        }
    ] as Achievement[]);
};