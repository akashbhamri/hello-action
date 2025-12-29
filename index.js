const core = require('@actions/core');

try {

 const who = core.getInput('who-to-greet');

 if (!who || who.trim() === '') {
   throw new Error('Input "who-to-greet' is required and cannot be empty');
}

const message = 'Hello, ${who}! ;

core.info(`Greeting generated: ${message}`);

core.setOutput('greeting', message);
}catch (error) {
core.setFailed(error.message);
}
