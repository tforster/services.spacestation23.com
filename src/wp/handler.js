/* eslint-disable no-restricted-syntax */
("use strict");

// Third party dependencies (Typically found in public NPM packages)
const WebProducer = require("@tforster/webproducer");

/**
 * All the code needed to create a Lambda managed webhook to build spacestation23 website in the cloud
 */
module.exports.build = async (event) => {
  // Capture the time for reporting purposes. Not required in real-world use cases
  const appStart = new Date();

  // Create an instance of the WebProducer class
  const wp = new WebProducer("webproducer.yml");

  const options = {
    debugTransform: false,  // True to enable breakpoint debugging in transform.js. 
    snapshot: false         // True to persist a snapshot of retrieved data. Saving is restricted to local meta paths, no S3, etc.
  };

  // Await main
  await wp.main(options);

  // Calculate the total time it took to fetch CMS data, merge with templates, concat, minify, zip, deploy, etc
  const retVal = `elapsed time to end of build ${new Date() - appStart}ms`;

  // Return a response to the caller
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: retVal,
      },
      null,
      2
    ),
  };
};
