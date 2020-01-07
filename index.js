const core = require("@actions/core");
const psi = require("psi");

const run = async () => {
  try {
    // Get the PageSpeed Insights report
    const { data } = await psi("https://theverge.com");
    console.log(
      "Speed score:",
      data.lighthouseResult.categories.performance.score
    );

    // Output a formatted report to the terminal
    await psi.output("https://theverge.com");
    console.log("Done");

    // Supply options to PSI and get back speed
    const data2 = await psi("https://theverge.com", {
      nokey: "true",
      strategy: "desktop"
    });
    console.log(
      "Speed score:",
      data2.data.lighthouseResult.categories.performance.score
    );
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
