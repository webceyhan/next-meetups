import { useRouter } from 'next/router';
import { createMeetup } from '../api';
import { MeetupForm } from '../components/MeetupForm';

export default function NewMeetup() {
    const router = useRouter();

    const addMeetupHandler = (formData) => {
        createMeetup(formData).then(() => router.push('/'));
    };

    return (
        <div>
            <h5>NewMeetup Page</h5>
            <MeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}
