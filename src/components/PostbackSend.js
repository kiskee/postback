import { useEffect } from "react";
import React from "react";

const PostbackSend = () => {
  // STEP 2: Get the clickid value from the cookie and send it to Talent.com with the tracker and the apply_step

  /**
   * Function to send the clickid, the tracker, and the apply_step to Talent.com
   */
  useEffect(() => {
    // Get the clickid from the cookie and store it in a variable
    var clickid = getCookie("clickidValue");
    // Store the tracker in a variable from the URL provided by your point of contact in Talent.com
    // https://www.talent.com/tracker/postback.php?tracker=XXXXXX
    var tracker = "reactPostbackTest";

    // Define the apply_step, or initiate it to an empty value
    // Example: var apply_step = "thankfulPage";
    // In this example, we are going to initiate it as an empty value
    var apply_step = "";
    // Create a paragraph element to wrapped all the process
    var paragrapWrapper = document.createElement("p");
    // Create an image element to trigger the action
    var talentImage = document.createElement("IMG");
    // The postbackURL will be the URL provided by your talent account representative. Ensure that contains
    // the GET parameters "tracker" with your company name/alias, the clickid and the apply_step (optional).
    var postbackURL =
      "https://www.talent.com/tracker/postback.php?tracker=" +
      tracker +
      "&clickid=" +
      clickid +
      "&apply_step=" +
      apply_step;
    // Set the target link
    talentImage.setAttribute("src", postbackURL);
    // Append the image element to the paragraph element
    paragrapWrapper.appendChild(talentImage);
    // Append the paragraph element either to the body element of your page or another element
    document.body.appendChild(paragrapWrapper);
  }, []);

  /**
   * Function to get the value stored in a cookie
   * @param {string} name Name of the cookie
   * @returns {string|null}
   */
  function getCookie(name) {
    let cookie = document.cookie
      .split(";")
      .filter((temp) => temp.search(RegExp(name)) > -1);
    return cookie.length > 0
      ? cookie[0].split("=").pop().replace(/%20/g, " ").trim()
      : null;
  }

  return <div></div>;
};

export default PostbackSend;
