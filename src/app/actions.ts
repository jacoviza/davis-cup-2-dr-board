// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function create(formData: FormData) {
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);

    const jsonObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    console.log('jsonObject:', jsonObject);

    await sql('UPDATE match_board SET form = $1::jsonb WHERE game = \'dom-bol-02-2025\'',
        [JSON.stringify(jsonObject)]);
}

export async function getData() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const data = await sql('SELECT form FROM match_board WHERE game = \'dom-bol-02-2025\'');
    return data[0].form;
}