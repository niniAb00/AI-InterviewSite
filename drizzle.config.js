/** @type {import ("drizzle-kit").config} */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview_owner:u2UzBs6tLojD@ep-red-hill-a57f6608.us-east-2.aws.neon.tech/ai-interview?sslmode=require",
  },
};
