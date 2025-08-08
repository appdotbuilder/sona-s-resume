import { type Project } from '../schema';

export const getProjects = async (): Promise<Project[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all research projects from the database.
    return Promise.resolve([
        {
            id: 1,
            title: "A study on the Socio-Economic Impacts of Demographic Transition in Elderly Women in Bharananganam Panchayath",
            description: "Mini research project examining the socio-economic effects of demographic changes on elderly women in a specific panchayath, focusing on their quality of life, support systems, and economic challenges.",
            type: "Mini Research",
            category: "Academic Research",
            created_at: new Date()
        },
        {
            id: 2,
            title: "A study on Perceived Stress and Work-Life Balance Among IT Professionals in Kerala",
            description: "Comprehensive research study investigating the relationship between perceived stress levels and work-life balance among information technology professionals in Kerala, examining factors affecting their psychological well-being.",
            type: "Research Study",
            category: "Academic Research",
            created_at: new Date()
        },
        {
            id: 3,
            title: "Shalabham Project",
            description: "Community development project conceptualized and launched to promote the holistic development and well-being of children in Nalppathimala Village, focusing on life skills training and community engagement.",
            type: "Community Project",
            category: "Field Practicum",
            created_at: new Date()
        }
    ] as Project[]);
};