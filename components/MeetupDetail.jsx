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
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className='me-2'>{meetup.title}</h4>

                    <button
                        className="btn btn-outline-primary text-nowrap"
                        onClick={toggleFavoriteHandler}
                    >
                        {isFavorite ? '❤️ Remove' : '❤️ Add'}
                    </button>
                </div>

                <p className="mb-3">{meetup.description}</p>
            </section>
        </>
    );
};
