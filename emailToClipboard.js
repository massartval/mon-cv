let email = document.getElementById("email");

/**
 * Display help text on hover
 */
email.addEventListener("mouseover", (event) => {
  event.target.setAttribute("title", "click to copy email");
});
email.addEventListener("mouseout", (event) => {
  event.target.removeAttribute("title");
});

/**
 * Copy email to clipboard
 */
email.addEventListener("click", (event) => {
  // BugFix: Prevent console clearing
  event.preventDefault();
  // BugFix: Prevent clipboard stubbornness
  window.getSelection().empty();
  // Initialize range
  let range = document.createRange();
  // Select email node
  range.selectNode(email);
  // Add node to selection
  window.getSelection().addRange(range);

  try {
    // Execute the copy command
    var successful = document.execCommand("copy");
    // Log command status
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copy email command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }

  // Remove range from selection
  window.getSelection().removeAllRanges();
});
