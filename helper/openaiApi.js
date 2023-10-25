const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = async (prompt) => {

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system", content: 'You are a helpful assistant.' },
        { role: "user", content: prompt }
      ],
      model: "gpt-4",
      max_tokens: 1080,
      temperature: 0.8,

    });

    let content = response.choices[0].message.content;

    return {
      status: 1,
      response: content
    };
  } catch (error) {
    return {
      status: 0,
      response: 'Please check openai API key.'
    };
  }
};

module.exports = {
  chatCompletion
};
