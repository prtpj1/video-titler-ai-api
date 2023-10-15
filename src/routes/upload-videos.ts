import { FastifyInstance } from 'fastify';
import { fastifyMultipart } from '@fastify/multipart';
import { promisify } from 'node:util';
import { prisma } from '../libs/script';
import { pipeline } from 'node:stream';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import fs from 'node:fs';


export async function uploadVideosRoute(app: FastifyInstance) {
    const pump = promisify(pipeline)

    app.register(fastifyMultipart, {
        limits: {
            fileSize: 1048576 * 25, // 25mb max size allowed by OpenAI API
        }
    })

    app.post('/videos', async (req, res) => {
        const data = await req.file()

        if (!data) {
            return res.status(400).send({ error: 'No file uploaded' })
        }

        const extension = path.extname(data.filename)
        if (extension !== '.mp3') {
            return res.status(400).send({ error: 'The file must be a mp3' })
        }

        const fileBaseName = path.basename(data.filename, extension)
        const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`
        const uploadDestination = path.resolve(__dirname, '../../uploaded-files', fileUploadName)

        await pump(data.file, fs.createWriteStream(uploadDestination))

        const video = await prisma.video.create({
            data: {
                name: data.filename,
                path: uploadDestination,
            }
        })

        return { video }
    })
}