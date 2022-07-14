const core = require("@actions/core");
const psi = require("psi");

const coreWebVitalsTypes = ["FCP", "TTI", "SI", "TBT", "LCP", "CLS", "FMP"];

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
    console.log(`Running Page Speed Insights for ${url}`);

    const params = {
      ...(key ? {key} : undefined),
      ...(key ? undefined : {nokey: "true"}),
      strategy,
      format: "cli",
      threshold
    };

    // Output a formatted report to the terminal
    await psi.output(url, params);

    if (activity_type === "pull_request") {
      // Output a simple report to the pull request comment section
      const output = await psi(url, params);
      const performance = output.data.lighthouseResult.categories.performance;
      core.setOutput("score", JSON.stringify(performance.score));
      const coreWebVitals = getCoreWebVitals(performance.auditRefs);
      setCoreWebVitals(coreWebVitals);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};

const getCoreWebVitals = (refs) => {
  return refs.reduce((acc, ref, _) => {
    if (coreWebVitalsTypes.includes(ref.acronym))
      acc[ref.acronym] = ref.weight;
  }, {});
}

const setCoreWebVitals = (coreWebVitals) => {
  for (const type of coreWebVitalsTypes) 
      core.setOutput(type.toLowerCase(), JSON.stringify(coreWebVitals[type]));
}

run();
