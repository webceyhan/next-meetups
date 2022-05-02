import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ brand, children, ...props }) => {
    const router = useRouter();
    const isActive = router.pathname === props.href;
    const activeClass = isActive ? 'active' : '';
    const navClass = brand ? 'navbar-brand' : 'nav-link';

    return (
        <NextLink {...props}>
            <a className={`${navClass} ${activeClass}`}>{children}</a>
        </NextLink>
    );
};
