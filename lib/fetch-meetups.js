const url = process.env.FIREBASE_URL;

export const fetchMeetups = async () => {
    const response = await fetch(`${url}.json`);
    const data = await response.json();

    // normalize data as an array
    return Object.entries(data).map(([id, meetup]) => ({
        ...meetup,
        id,
    }));
};
