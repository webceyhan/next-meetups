import { DUMMY_DATA } from './data';

const API_URL =
    'https://react-meetups-729a4-default-rtdb.europe-west1.firebasedatabase.app/meetups';

export const findMeetup = async (id) => {
    const response = await fetch(`${API_URL}/${id}.json`);
    const data = await response.json();

    return data;
};

export const migrateDummyData = async () => {
    DUMMY_DATA.forEach(createMeetup);
};
