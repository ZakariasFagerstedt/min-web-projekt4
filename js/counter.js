(function () {
  var counter = [
    { id: a1, hovers: 0 },
    { id: a2, hovers: 0 },
    { id: a3, hovers: 0 },
    { id: b2, hovers: 0 },
    // { id: 5, hovers: 0 },
    // { id: 6, hovers: 0 },
    // { id: 7, hovers: 0 },
    //  { id: 8, hovers: 0 },
    //  { id: 9, hovers: 0 },
  ];

  // Use a named function, not an anonymous function
  // The event {Object} parameter is passed from mouseenter
  function updateHoverCount(event) {
    // Array.forEach is used here because if the order
    // of counter wasn't perfectly defined
    // (EG: id of 3, id of 1, ... id of [0-9])
    // this will find the right object first and
    // then update the hover count
    counter.forEach(function (ele, i) {
      // Match the id against the event target
      if (ele.id === Number(event.target.id)) {
        ele.hovers += 1;

        // Logging to show in example
        console.log("Element", event.target, "Total Hovers:", ele.hovers);
      }
    });
  }

  // Iterate over your counter to find the elements
  counter.forEach(function (ele, i) {
    // Variable storage isn't necessary, it's provided for clarity
    var div = document.getElementById(String(ele.id));

    // Add the mouseenter (not mouseover) event to the div
    div.addEventListener("mouseenter", updateHoverCount);
  });
})();
