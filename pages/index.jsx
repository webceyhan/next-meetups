import { getMeetups } from '../api';
import { MeetupList } from '../components/MeetupList';

export default function Home({ meetups }) {
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </div>
    );
}

/**
 * This is the code which only runs on the server.
 * During the build process, Next.js will generate a static version of the page.
 * It will provide the data that it needs to render the page.
 */
export async function getStaticProps() {
    const meetups = await getMeetups();

    // this props will be passed to the page component as props
    return {
        props: { meetups },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
