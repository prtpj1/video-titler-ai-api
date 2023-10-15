import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideosRoute } from './routes/upload-videos';

const app = fastify()
const port = parseInt(process.env.PORT || '3333')

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideosRoute)

app.get('/', () => {
    return 'Hello World!'
})

app.listen({
    port: port,
}).then(() => {
    console.log('🌎 HTTP Server is running!');

})