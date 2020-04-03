const { createNowBeginHandler } = require('netlify-cms-oauth-provider-node');
console.log("process.env", process.env);
module.exports = createNowBeginHandler({}, { useEnv: true });