const core = require('@actions/core');

try {
  const who = core.getInput('who-to-greet') || 'World';
  const msg = `Hello, ${who}!`;
  core.info(msg);                 // appears in the workflow log
  core.setOutput('greeting', msg);
} catch (err) {
  core.setFailed(err.message);
}

