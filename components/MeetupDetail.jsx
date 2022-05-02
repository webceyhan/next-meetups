import { useFavoritesContext } from '../store/FavoritesContext';

export const MeetupDetail = ({ meetup }) => {
    const favoritesCtx = useFavoritesContext();
    const isFavorite = favoritesCtx.isFavorite(meetup);

    const toggleFavoriteHandler = () => {
        if (isFavorite) {
            favoritesCtx.removeFavorite(meetup);
        } else {
            favoritesCtx.addFavorite(meetup);
        }
    };

    return (
        <>
            <img
                src={meetup.image}
                className="img-fluid"
                style={{ height: '250px', objectFit: 'cover' }}
                alt={meetup.title}
            />

            <section>
                <h1 className="display-5">{meetup.title}</h1>

                <p className="lead">{meetup.description}</p>

                <button
                    className={`btn btn-${isFavorite ? 'danger' : 'primary'}`}
                    onClick={toggleFavoriteHandler}
                >
                    {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </section>
        </>
    );
};
