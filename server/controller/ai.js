const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");
dotenv.config();

const configuration = new Configuration({
  organization: "org-olFJ1o7tCH2K6rGszfWEDqdG",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports.generate = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    res.status(200).json({ url: response.data.data, prompt });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false });
  }
};
