// jv.js

function test() {
  // Get form values
  const fullName = document.getElementById("hn").value;
  const gfName = document.getElementById("mn").value;
  const yourAge = parseInt(document.getElementById("ha").value, 10);
  const gfAge = parseInt(document.getElementById("ma").value, 10);
  const daysTogether = parseInt(document.getElementById("rsd").value, 10);
  const anniversaryDate = document.getElementById("slct").selectedIndex;

  // Validation criteria
  const validFullName = "Oussema Ben Nasr";
  const validGfName = "Siwar";
  const validYourAge = 19;
  const validGfAge = 18;
  const validDaysTogether = [966, 967];
  const validAnniversaryDate = 2; // Index starts from 0, so 3 is the third option

  // Check if all conditions are met
  if (
    fullName === validFullName &&
    gfName === validGfName &&
    yourAge === validYourAge &&
    gfAge === validGfAge &&
    validDaysTogether.includes(daysTogether) &&
    anniversaryDate === validAnniversaryDate
  ) {
    window.location.href = "page2.html";
  } else {
    alert(
      "Oops! Some of your answers are incorrect YOU DON'T LOVE ME ? Please try again."
    );
  }

  // Prevent form submission
  return false;
}
