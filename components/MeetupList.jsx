import { MeetupListItem } from './MeetupListItem';

export const MeetupList = ({ meetups }) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {meetups.map((meetup) => (
                <div className="col" key={meetup.id}>
                    <MeetupListItem meetup={meetup} />
                </div>
            ))}
        </div>
    );
};
