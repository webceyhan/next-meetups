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
                className="img-fluid w-100"
                style={{ height: '350px', objectFit: 'cover' }}
                alt={meetup.title}
            />

            <section className="bg-light bg-opacity-75 p-3">
                <h4 className="mb-3">{meetup.title}</h4>
                <p className="mb-3">{meetup.description}</p>

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
