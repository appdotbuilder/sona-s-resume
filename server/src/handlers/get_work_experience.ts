import { type WorkExperience } from '../schema';

export const getWorkExperience = async (): Promise<WorkExperience[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all work experience entries from the database.
    return Promise.resolve([
        {
            id: 1,
            title: "Medical and Psychiatric Social Work Intern",
            organization: "Holy Family Hospital",
            location: "Okhla, New Delhi",
            start_date: "2024",
            end_date: null,
            description: "Gained multidisciplinary exposure working in inpatient and outpatient departments, including nephrology, antenatal care, community health, Ayurveda, and Homeopathy. Participated in early intervention for pediatric psychotherapy and managed administrative responsibilities, such as patient feedback collection. Strengthened core social work skills, including documentation, ethical practice, resource mobilization, and psychoeducation to promote patient rights.",
            type: "Internship",
            created_at: new Date()
        },
        {
            id: 2,
            title: "Medical Social Work Intern",
            organization: "Caritas Hospital & Institute of Health Sciences",
            location: "Thellakom, Kerala",
            start_date: "2024",
            end_date: "2024",
            description: "Actively participated in ward rounds, engaging with patients, addressing concerns, and supporting clinical tasks like documentation and medical camp registration. Applied the biopsychosocial model to assess comprehensive patient needs and deliver individualized, client-centered care. Gained hands-on experience in case management, discharge planning, and crisis intervention. Presented a project proposal on Enhancing Internal Navigation, a Patient Guidance System, and Establishing Psychosocial Support for Patients.",
            type: "Internship",
            created_at: new Date()
        },
        {
            id: 3,
            title: "Psychiatric Social Work Intern",
            organization: "Cardinal Speciality Hospital",
            location: "Cheenkallel, Monipally, Kottayam",
            start_date: "2024",
            end_date: "2024",
            description: "Gained hands-on experience in psychiatry, clinical psychology, and de-addiction services. Strengthened competencies in conducting Mental Status Examinations (MSE), collecting detailed case histories, and performing comprehensive psychosocial assessments. Facilitated sessions on psychosocial topics to enhance patient awareness and engagement.",
            type: "Internship",
            created_at: new Date()
        },
        {
            id: 4,
            title: "Counseling and De-addiction Intern",
            organization: "Mochana De-addiction and Counselling Centre",
            location: "Manganam, Kottayam",
            start_date: "2023",
            end_date: "2023",
            description: "Acquired hands-on experience in both individual and group counseling sessions, developing core skills in addiction management, rapport-building, and client engagement. Provided therapeutic support through individual and group interventions and family sessions. Worked collaboratively with multidisciplinary teams.",
            type: "Internship",
            created_at: new Date()
        },
        {
            id: 5,
            title: "Community Organization Practicum",
            organization: "Nalppathimala Village, Athirampuzha Grama Panchayat",
            location: "Kottayam District",
            start_date: "2024",
            end_date: "2024",
            description: "Conducted community mapping, need assessments, surveys, and life skill training sessions. Conceptualized and launched the 'Shalabham' project to promote the holistic development and well-being of children.",
            type: "Fieldwork",
            created_at: new Date()
        }
    ] as WorkExperience[]);
};