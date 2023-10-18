import fastifyCors from '@fastify/cors';
import {fastify} from 'fastify';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideosRoute } from './routes/upload-videos';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify()
const port = parseInt(process.env.PORT || '3333')

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideosRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.get('/', () => {
    return 'Hello World!'
})

app.listen({
    port: port,
}).then(() => {
    console.log('🌎 HTTP Server is running!');

})