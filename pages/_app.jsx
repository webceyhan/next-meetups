import '../styles/globals.css';
import { Layout } from '../components/layout/Layout';
import { FavoritesContextProvider } from '../store/FavoritesContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <FavoritesContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </FavoritesContextProvider>
    );
}
