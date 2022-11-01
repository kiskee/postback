import React from "react";

const Postback = () => {
  // STEP 1: Store the clickid in a cookie at the beginning of the application process

  // Get the URL from the browser
  const url = window.location.href;

  // Extract the clickid from the URL
  const clickid = extractUrlValue("clickid", url);
  
  // Check if exist the clickid and create the "clickidValue" cookie to store the clickid value for 15 days
  if (clickid) {
    createCookie("clickidValue", clickid, 15);
  }else{
    return
  }

  // Functions needed during the process
  /**
   * Function to extract a param value from a URL
   * @param {string} key Name of the param that contains the value we are interested in
   * @param {string} url URL where extract the value of the param
   * @returns {string|null}
   */
  function extractUrlValue(key, url) {
    if (typeof url == "undefined") {
      url = window.location.href;
    }
    var match = url.match("[#?&]" + key + "=([^&#]+)");
    return match ? match[1] : null;
  }
  /**
   * Function to create a cookie
   * @param {string} name Name of the cookie
   * @param {string} value Value of the cookie
   * @param {number} days Cookie expiration
   */
  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  return <div></div>;
};

export default Postback;
