import OpenAI from 'openai';

export class OpenAIService {
  constructor() {
    this.openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async generatePost() {
    try {
      const response = await this.openaiClient.images.generate({
        model: 'dall-e-2',
        prompt:
          'A gray tabby cat hugging an otter with an orange scarf, cozy and heartwarming, high detail, realistic style',
        n: 1,
        size: '1024x1024',
      });
      // response = await this.openaiClient.responses.create({
      //   model: 'dall-e-3',
      //   input: 'Generate an image of gray tabby cat hugging an otter with an orange scarf',
      //   tools: [{ type: 'image_generation' }],
      // });

      return response;
    } catch (error) {}
  }
}
