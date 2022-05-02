// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchMeetups } from '../../lib/fetch-meetups';

export default async function handler(req, res) {
    // fetch all meetups
    const meetups = await fetchMeetups();

    // respond with the meetups
    res.status(200).json(meetups);
}
