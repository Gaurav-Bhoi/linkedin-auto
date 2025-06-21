import { OpenAIService } from '../../../AI/Infrastructure/Services/service.index.js';

export class ArticeUseCase {
  constructor() {
    console.log('this is from usecase article class');
    this.OpenAIService = new OpenAIService();
  }

  async postArticle() {
    const response = await this.OpenAIService.generatePost();
    console.log('this is response from application layer', response);
  }
}
