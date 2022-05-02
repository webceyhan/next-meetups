import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ children, ...props }) => {
    const router = useRouter();
    const isActive = router.pathname === props.href;
    const activeClass = isActive ? 'active' : '';

    return (
        <NextLink {...props}>
            <a className={`nav-link ${activeClass}`}>{children}</a>
        </NextLink>
    );
};
