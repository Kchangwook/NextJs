import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    try {
        await response.revalidate("/");
        return response.json({ revalidated: true });
    } catch (error) {
        response.status(500).send("Error revalidating");
    }
}