import { NextResponse } from 'next/server';
import { youtubeTranscript } from 'youtube-transcript-api';

export async function POST(request) {
//    try {
    const { links } = await request.json();
    const transcripts = await Promise.all(
        links.map(async (link) => {
            const videoId = link.split('v=')[1];
            if (!videoId) {
                throw new Error('Invalid YouTube link');
            }
            const transcript = await youtubeTranscript(videoId);
            return transcript;
        })
    );
    console.log('Transcipts:', transcripts);
    return NextResponse.json({ 
        message: transcripts,
    });
//    } catch (error) {
//        console.error('Error retrieving transcripts:', error);
//        return NextResponse.json({ error: error.message }, { status: 500 });
//    }
}

