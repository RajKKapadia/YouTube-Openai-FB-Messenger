require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatCompletion = async (prompt) => {

    try {
        const response = await openai.createChatCompletion(
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { "role": "system", "content": "You are a helpful assistant." },
                    { "role": "user", "content": prompt }
                ]
            }
        );

        let content = response.data.choices[0].message.content;

        return {
            status: 1,
            response: content
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};

module.exports = {
  chatCompletion
};
