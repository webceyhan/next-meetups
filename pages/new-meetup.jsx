import { useRouter } from 'next/router';
import { MeetupForm } from '../components/MeetupForm';

export default function NewMeetup() {
    const router = useRouter();

    const addMeetupHandler = async (formData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        // redirect if successful
        if (response.status === 201) {
            router.push('/');
        }

        // TODO: handle error
    };

    return (
        <div>
            <h5>NewMeetup Page</h5>
            <MeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}
