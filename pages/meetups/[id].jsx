import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { findMeetup } from '../../api';

export default function MeetupDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [meetup, setMeetup] = useState({});

    // note: without useEffect component will be re-rendered
    // on every change of meetups which will cause the infinite loop
    useEffect(() => {
        findMeetup(id)
            .then(setMeetup)
            .then(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Meetup Detail Page</h1>
            <MeetupDetail meetup={meetup} />
        </div>
    );
}
