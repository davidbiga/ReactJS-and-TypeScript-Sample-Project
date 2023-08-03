import axios from "axios";
import APOD from "../types/apod";

// move this to an ENV like dotenv
export const NASA_KEY = 'PLACE ME';
export const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&count=5`;


export async function getApods(): Promise<APOD> {
    const response = await axios.get(NASA_API_URL);
    const { data } = response;

    const apods = data.map((apod: APOD) => {
        return {
            url: apod.url,
            media_type: apod.media_type,
            title: apod.title,
            explanation: apod.explanation,
            service_version: apod.service_version,
            date: apod.date
        }
    });

    return apods
}