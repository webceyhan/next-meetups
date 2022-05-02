import { useFavoritesContext } from '../../store/FavoritesContext';
import { NavLink } from './NavLink';

export const MainNavigation = () => {
    const favoritesCtx = useFavoritesContext();
    const favoriteTotal = favoritesCtx.favorites.length;

    return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-purple">
            <div className="container py-1">
                <NavLink href="/" brand>
                    ReactMeetups
                </NavLink>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink href="/">All Meetups</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href="/new-meetup">Add New Meetup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href="/favorites">
                                My Favorites
                                <span className="badge bg-dark bg-opacity-50 ms-2">
                                ❤️ {favoriteTotal}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
