const core = require("@actions/core");
const psi = require("psi");

const run = async () => {
  try {
    const url = core.getInput("url");
    // Output a formatted report to the terminal
    console.log(`Running Page Speed Insights for ${url}`);
    await psi.output(url, {
      nokey: "true",
      strategy: "mobile",
      format: "cli",
      threshold: 70
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
