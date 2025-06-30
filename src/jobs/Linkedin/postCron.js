import cron from 'node-cron';

export const postCron = cron.schedule('* * * * *', () => {
  console.log('this cron is working');
});
