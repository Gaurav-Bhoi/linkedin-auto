// node-linkedin-v2.d.ts
declare module 'node-linkedin-v2' {
  export class LinkedInClient {
    constructor(config: { clientId: string; clientSecret: string; redirectUri: string });
    setAccessToken(token: string): void;
    // Add more as needed
  }

  export default LinkedInClient;
}
