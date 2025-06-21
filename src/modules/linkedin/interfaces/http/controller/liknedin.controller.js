import { ArticeUseCase } from '../../../application/use-cases/article.usecase.js';

const articleUseCase = new ArticeUseCase();

export const linkedinPostController = async (req, res) => {
  try {
    articleUseCase.postArticle();
  } catch {
    res.json('Error');
  }
};
