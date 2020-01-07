const core = require("@actions/core");
const psi = require("psi");

const run = async () => {
  try {
    const url = core.getInput("url");
    // Output a formatted report to the terminal
    await psi.output(url);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
