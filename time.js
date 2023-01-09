function updateDate() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // January is 0
    var year = currentDate.getFullYear();

    document.getElementById("current_date").innerHTML = ": " + date + "/" + month + "/" + year;
  }

  // Update the date every 1 second
  setInterval(updateDate, 1000);