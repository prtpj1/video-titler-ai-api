import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.prompt.deleteMany()

    await prisma.prompt.create({
        data: {
            title: 'Video title',
            template: `Your role is generate 3 titles for the uploaded video.

Below you will receive the transcription of the video, use this transcription to generate the titles.
Below you will also receive a list of titles, use this list as a reference for the titles to be generated.

The titles must have a maximum of 60 characters.
The titles must be catchy and attractive to maximize clicks.

Return ONLY the 3 titles in list format as in the example below:
'''
- Title 1
- Title 2
- Title 3
'''

Transcription:
'''
{transcription}
'''`.trim()
        }
    })

    await prisma.prompt.create({
        data: {
            title: 'Video description',
            template: `Your role is generate a succinct description for the uploaded video.

Below you will receive a transcription of this video, use it to generate the description.

The description must have a maximum of 80 words in first person containing the main points of the video.

Use catchy words that captive the attention of who is reading.

Besides this, at the end of the description include a list of 3 to 10 hashtags in lowercase containing keywords of the video.

The return must follow the following format:
'''
Description:

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcription:
'''
{transcription}
'''`.trim()
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })