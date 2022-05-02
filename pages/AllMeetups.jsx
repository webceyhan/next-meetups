import { useEffect, useState } from 'react';
import { getMeetups } from '../api';
import { MeetupList } from '../components/MeetupList';

export const AllMeetupsPage = () => {
    const [loading, setLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    // note: without useEffect component will be re-rendered 
    // on every change of meetups which will cause the infinite loop
    useEffect(() => {
        getMeetups()
            .then(setMeetups)
            .then(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </div>
    );
};
