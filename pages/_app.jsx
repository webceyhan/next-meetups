import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="container py-5">
            <Component {...pageProps} />
        </div>
    );
}
