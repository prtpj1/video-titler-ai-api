import { OpenAI } from 'openai';
import 'dotenv/config'

const API_KEY = ""
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || API_KEY,
    organization: process.env.OPENAI_ORG,
})