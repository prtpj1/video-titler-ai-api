import { FastifyInstance } from 'fastify';
import { prisma } from '../libs/script';
import { z } from 'zod';
import { createReadStream } from 'node:fs';
import { openai } from '../libs/openai';


export async function createTranscriptionRoute(app: FastifyInstance) {
    app.post('/videos/:videoId/transcription', async (req) => {
        const paramsSchema = z.object({ videoId: z.string().uuid() })
        const bodySchema = z.object({ prompt: z.string() })

        const { videoId } = paramsSchema.parse(req.params)
        const { prompt } = bodySchema.parse(req.body)

        const video = await prisma.video.findUniqueOrThrow({
            where: { id: videoId },
        })
        const videoPath = video.path
        const audioReadStream = createReadStream(videoPath)

        const response = await openai.audio.transcriptions.create({
            file: audioReadStream,
            model: 'whisper-1',
            language: 'pt' || 'en',
            response_format: 'json',
            temperature: 0,
            prompt,
        })

        const transcription = response.text

        await prisma.video.update({
            where: { id: videoId },
            data: { transcription },
        })

        return { transcription }
    })
}