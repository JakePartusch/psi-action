const core = require("@actions/core");
const psi = require("psi");

const run = async () => {
  try {
    const url = core.getInput("url");
    if (!url) {
      core.setFailed("Url is required to run Page Speed Insights.");
      return;
    }

    const key = core.getInput('key');

    const threshold = Number(core.getInput("threshold")) || 70;
    const strategy = core.getInput("strategy") || "mobile";
    // Output a formatted report to the terminal
    console.log(`Running Page Speed Insights for ${url}`);
    const output = await psi.output(url, {
      ...(key ? {key} : undefined),
      ...(key ? undefined : {nokey: "true"}),
      strategy,
      format: "cli",
      threshold
    });

    core.setOutput("result-message", String(output));
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
