import { fetchMeetups } from '../lib/fetch-meetups';
import { MeetupList } from '../components/MeetupList';
import Head from 'next/head';

export default function Home({ meetups }) {
    return (
        <>
            <Head>
                <title>Next.js Meetups</title>
            </Head>

            <h1>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </>
    );
}

/**
 * This is the code which only runs on the server side.
 * It only runs once during the build process and Next.js will generate a static
 * version of the page. It will provide the data that it needs to render the page.
 *
 * This is very good for SEO and performance.
 * And our Meetup data barely changes so it's a good idea to cache it.
 */
export async function getStaticProps() {
    const meetups = await fetchMeetups();

    // this props will be passed to the page component as props
    return {
        props: { meetups },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}

// /**
//  * This is an alternative to getStaticProps which will be called on EVERY request.
//  * Here you have access to the context object which contains the request.
//  *
//  * But here we don't use this method, because Meetups data is not changing frequently.
//  * So it doesn't make sense to re-generate the page every time.
//  */
// export async function getServerSideProps({ req }) {
//     const meetups = await getMeetups();

//     // this props will be passed to the page component as props
//     return {
//         props: { meetups },
//     };
// }
