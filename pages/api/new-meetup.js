// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createMeetup } from '../../lib/create-meetups';

export default async function handler(req, res) {
    // Process a POST request
    if (req.method === 'POST') {
        // insert the meetup into the database
        await createMeetup(req.body);

        // return a 201 (created) status code
        return res.status(201).json({
            message: 'Meetup created',
        });
    }
}
