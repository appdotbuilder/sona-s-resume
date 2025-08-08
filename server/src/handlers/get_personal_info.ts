import { type PersonalInfo } from '../schema';

export const getPersonalInfo = async (): Promise<PersonalInfo> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching personal information (contact details + summary) from the database.
    return Promise.resolve({
        id: 1,
        name: "Sona S",
        address: "Sreenikethan, Ettumanoor P.O, Kottayam",
        email: "sonasreenivasan2002@gmail.com",
        phone: "9496742175",
        summary: "Highly motivated and compassionate individual with a Master of Social Work and a strong background in medical and psychiatric social work. Possesses hands-on experience in case management, counseling, crisis intervention, and community organization. Proven ability to work collaboratively in multidisciplinary teams and advocate for patient rights.",
        created_at: new Date()
    } as PersonalInfo);
};