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
                <h5 className="card-title">{meetup.title}</h5>
                <p className="card-text">{meetup.description}</p>

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
