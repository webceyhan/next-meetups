const url = process.env.FIREBASE_URL;

export const createMeetup = async (meetup) => {
    const response = await fetch(`${url}.json`, {
        method: 'POST',
        body: JSON.stringify(meetup),
    });

    return response.json();
};
