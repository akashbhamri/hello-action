import * as core from '@actions/core';

try {
  const who = core.getInput('who-to-greet');

  if (!who || who.trim() === '') {
    throw new Error('Input "who-to-greet" is required and cannot be empty');
  }

  const message = `Hello, ${who}! ��`;

  core.info(`Greeting generated: ${message}`);
  core.setOutput('greeting', message);
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed('Unknown error');
  }
}

