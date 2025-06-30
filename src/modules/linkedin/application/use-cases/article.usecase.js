import { OpenAIService } from '../../../AI/Infrastructure/Services/service.index.js';

export class ArticeUseCase {
  constructor() {
    this.OpenAIService = new OpenAIService();
  }

  async postArticle() {
    const response = await this.OpenAIService.generatePost();
  }
}
