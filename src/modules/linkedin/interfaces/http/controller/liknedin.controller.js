import open from 'open';
import axios from 'axios';
import { postCron } from '../../../../../jobs/Linkedin/postCron.js';
class LinkedinController {
  constructor() {}

  handleLogin = async (req, res) => {
    console.log('this is linkedin login invocation');
    try {
      const isAuth = await this.handleAuthentication(req, res);
      console.log('this is isAuth', isAuth);
    } catch (error) {
      console.log('this is linkedin login error', error);
    }
  };

  handleAuthentication = async (req, res) => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.LINKEDIN_REDIRECT_URL)}&scope=w_member_social`;
    // open(authUrl);
    console.log('this is auth url', authUrl);
    res.redirect(authUrl);
    // res.json({ status: 200, message: 'login success' });
  };

  getAccessToken = async (req, res) => {
    const code = req.query.code;
    const accessToken = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URL,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    console.log('this is access token', accessToken);
  };

  makePost = async (req, res) => {
    postCron.start();
    res.json('linkedin post successful');
  };
}
export default new LinkedinController();
