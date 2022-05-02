import { MainNavigation } from './MainNavigation';

export const Layout = ({ children }) => {
    return (
        <>
            <MainNavigation />
            <main className="container">{children}</main>
        </>
    );
};
