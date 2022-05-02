import { DUMMY_DATA } from './data';

const API_URL =
    'https://react-meetups-729a4-default-rtdb.europe-west1.firebasedatabase.app/meetups';

export const createMeetup = async (meetup) => {
    const response = await fetch(`${API_URL}.json`, {
        method: 'POST',
        body: JSON.stringify(meetup),
    });

    return response.json();
};

export const getMeetups = async () => {
    const response = await fetch(`${API_URL}.json`);
    const data = await response.json();

    // normalize data as an array
    return Object.entries(data).map(([id, meetup]) => ({
        ...meetup,
        id,
    }));
};

export const findMeetup = async (id) => {
    const response = await fetch(`${API_URL}/${id}.json`);
    const data = await response.json();

    return data;
};

export const migrateDummyData = async () => {
    DUMMY_DATA.forEach(createMeetup);
};
