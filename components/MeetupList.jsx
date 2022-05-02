import { MeetupCard } from './MeetupCard';

export const MeetupList = ({ meetups }) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {meetups.map((meetup) => (
                <div className="col" key={meetup.id}>
                    <MeetupCard meetup={meetup} />
                </div>
            ))}
        </div>
    );
};
