import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Sophisticated AI Tweet power
export const makeHighIQTweet = async (topic: string) => {
    const prompt = "Write a witty tweet about: " + topic;
    const completion = await openai.createCompletion(
        {
            model: "text-davinci-003",
            prompt,
            max_tokens: 55, // Roughly tweet max length
        },
        {
            timeout: 10000,
        }
    );
    return completion.data;
};
