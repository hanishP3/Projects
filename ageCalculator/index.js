const calbtn = document.querySelector("#cal");
const dateform = document.querySelector("#dateform");
const result = document.querySelector("#result");

// present date codes
const presentDate = new Date();
const year = presentDate.getFullYear();
const month = presentDate.getMonth();
const todaydate = presentDate.getDate();

calbtn.addEventListener("click", () => {
  // user date codes
  // declaring inside of click event because if we declare it outside the initialization begins even before we activate the click event
  const userdob = new Date(dateform.value);

  // validation checks
  if (
    userdob.getFullYear() <= 0 ||
    userdob.getMonth() < 0 ||
    userdob.getMonth() > 11 ||
    userdob.getDate() <= 0 ||
    userdob.getDate() > 31 || // Ensure date is within a valid range
    isNaN(userdob.getTime()) // Ensure it's a valid date
  ) {
    alert("Please Enter a Valid Date");
  } else {
    const age = year - userdob.getFullYear(); // Calculate age
    const pmonth = month - userdob.getMonth(); // Calculate month difference
    const pdate = todaydate - userdob.getDate(); // Calculate day difference

    // Adjust age if the birth month hasn't occurred yet
    if (pmonth < 0 || (pmonth === 0 && pdate < 0)) {
      age--; // If birth month or day hasn't occurred yet, decrement age
    }

    // result
    result.innerHTML = `Your are ${age} years ${pmonth} months and ${pdate} days old`;
  }
});
