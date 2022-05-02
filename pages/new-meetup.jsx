import { useNavigate } from 'react-router-dom';
import { createMeetup } from '../api';
import { MeetupForm } from '../components/MeetupForm';

export default function NewMeetup() {
    const navigate = useNavigate();

    const addMeetupHandler = (formData) => {
        createMeetup(formData).then(() => navigate('/all'));
    };

    return (
        <div>
            <h5>NewMeetup Page</h5>
            <MeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}
