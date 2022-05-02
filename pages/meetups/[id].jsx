import { useRouter } from 'next/router';

export default function MeetupDetail() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Meetup Detail Page</h1>
            <p>Meetup id: {id}</p>
        </div>
    );
}
