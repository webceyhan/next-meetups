const url = process.env.FIREBASE_URL;

export const findMeetup = async (id) => {
    const response = await fetch(`${url}/${id}.json`);
    const data = await response.json();

    return data;
};
