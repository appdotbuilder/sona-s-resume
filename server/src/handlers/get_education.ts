import { type Education } from '../schema';

export const getEducation = async (): Promise<Education[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all education entries from the database.
    return Promise.resolve([
        {
            id: 1,
            degree: "Master of Social Work (MSW)",
            field_of_study: "Medical and Psychiatry",
            institution: "Kuriakose Elias College, Mannanam",
            university: "Mahatma Gandhi University",
            duration: "2023-2025",
            status: "In Progress",
            created_at: new Date()
        },
        {
            id: 2,
            degree: "Bachelor of Arts",
            field_of_study: "Economics",
            institution: "Alphonsa College, Pala",
            university: "Mahatma Gandhi University",
            duration: "2020-2023",
            status: "Completed",
            created_at: new Date()
        },
        {
            id: 3,
            degree: "Certificate Course",
            field_of_study: "Counseling and Psychotherapy",
            institution: null,
            university: null,
            duration: "2023",
            status: "Completed",
            created_at: new Date()
        }
    ] as Education[]);
};