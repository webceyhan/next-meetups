import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = (props) => {
    return (
        <RouterNavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to={props.to}
        >
            {props.children}
        </RouterNavLink>
    );
};
