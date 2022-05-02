import { MeetupList } from '../components/MeetupList';
import { useFavoritesContext } from '../store/FavoritesContext';

export const FavoritesPage = () => {
    const favoritesCtx = useFavoritesContext();

    let content;

    if (favoritesCtx.favorites.length === 0) {
        content = <p>You got no favorites yet, Start adding some?</p>;
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />;
    }

    return (
        <section>
            <h5>My Favorites</h5>
            {content}
        </section>
    );
};
