import fastifyCors from '@fastify/cors';
import fastify from 'fastify';

const app = fastify()
const port = parseInt(process.env.PORT || '3333')

app.register(fastifyCors, {
    origin: '*',
})

app.get('/', () => {
    return 'Hello World!'
})

app.listen({
    port: port,
}).then(() => {
    console.log('🌎 HTTP Server is running!');

})