import { useRouter } from 'next/router';
import { useFavoritesContext } from '../store/FavoritesContext';
import { Card } from './ui/Card';
import { CardBody } from './ui/CardBody';

export const MeetupCard = ({ meetup }) => {
    const router = useRouter();
    const favoritesCtx = useFavoritesContext();
    const isFavorite = favoritesCtx.isFavorite(meetup);

    const clickDetailHandler = () => {
        router.push(`/meetups/${meetup.id}`);
    };

    const toggleFavoriteHandler = () => {
        if (isFavorite) {
            favoritesCtx.removeFavorite(meetup);
        } else {
            favoritesCtx.addFavorite(meetup);
        }
    };

    return (
        <Card>
            <img
                src={meetup.image}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
                alt={meetup.title}
            />
            <CardBody>
                <h6 className="card-title">
                    {/* truncate long title */}
                    {meetup.title.length > 20
                        ? meetup.title.substring(0, 20) + '...'
                        : meetup.title}
                </h6>

                <p className="card-text text-muted">
                    {/* truncate long descriptions */}
                    {meetup.description.length > 100
                        ? meetup.description.substring(0, 100) + '...'
                        : meetup.description}
                </p>

                <button
                    className="btn btn-primary me-2"
                    onClick={clickDetailHandler}
                >
                    Show Details
                </button>

                <button
                    className={`btn btn-${isFavorite ? 'danger' : 'primary'}`}
                    onClick={toggleFavoriteHandler}
                >
                    {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </CardBody>
        </Card>
    );
};
