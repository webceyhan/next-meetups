import { MeetupDetail } from '../../components/MeetupDetail';
import { findMeetup, getMeetups } from '../../api';

export default function MeetupDetailPage({ meetup }) {
    return (
        <div>
            <h1>Meetup Detail Page</h1>
            <MeetupDetail meetup={meetup} />
        </div>
    );
}

/**
 * This is the code which only runs on the server side.
 * It only runs once during the build process and Next.js will generate a static
 * version of the page. It will provide the data that it needs to render the page.
 */
export async function getStaticProps({ params }) {
    /**
     * u cannot use 'useRouter' in getStaticProps
     * but instead we can get the 'id' from the 'params' object.
     */
    // const router = useRouter();

    /**
     * Here is another trick we have to pay attention to.
     * Id might be changing every time the page is refreshed.
     * So we need to provide all possible id values to the getStaticProps function
     * because everything will be staticly generated. Look for getStaticPaths function below!
     */
    const meetup = await findMeetup(params.id);

    return {
        props: { meetup },
        revalidate: 10, // In seconds
    };
}

/**
 * Here we provide all possible id values to the getStaticProps function.
 *
 * Exmple paths:
 *   { params: { id: '-N10GYlp4ED0ioR6ZqmC' } },
 *   { params: { id: '-N10GYlrKvdsJ6mUZNVv' } },
 *   { params: { id: '-N10GYlt1uDk_bQuEXYn' } },
 */
export async function getStaticPaths() {
    // First we get all the meetups
    const meetups = await getMeetups();

    // Then we generate an array of paths
    const paths = meetups.map(({ id }) => ({ params: { id } }));

    // Finally we return the paths
    return {
        paths,
        fallback: false,
    };
}
