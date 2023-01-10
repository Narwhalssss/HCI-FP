var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDate() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // January is 0
    var year = currentDate.getFullYear();
    var day = currentDate.getDay();

    var element = document.getElementById("current_date");

    // Update the text of the element with the ID "current_date"
    element.innerHTML = ": " + days[day] + " " + date + "/" + month + "/" + year;
  }

  // Update the date every 1 second
  setInterval(updateDate, 1000);
