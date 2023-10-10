  // Populate the duration select based on the selected course
  function populateDuration() {
    var course = document.getElementById("course").value;
    var durationSelect = document.getElementById("duration");
    durationSelect.innerHTML = "";

    var durations = {
        
        "Web Design/Development": "Class - 30",
        "Graphics Design": "Class - 20",
        "Digital Marketing": "Class - 20",
        "Office Application": "Class - 20"
    };

    var selectedDuration = durations[course];
    var option = document.createElement("option");
    option.text = selectedDuration;
    durationSelect.add(option);
    
    // Populate the price select based on the selected course
    populatePrice();
    
    // Populate the income select based on the selected course
    populateIncome();
}

// Populate the price select based on the selected course
function populatePrice() {
    var course = document.getElementById("course").value;
    var priceSelect = document.getElementById("price");
    priceSelect.innerHTML = "";

    var prices = {
        
        "Web Design/Development": "1000Tk",
        "Graphics Design": "1500Tk",
        "Digital Marketing": "2000Tk",
        "Office Application": "3000Tk"
    };

    var selectedPrice = prices[course];
    var option = document.createElement("option");
    option.text = selectedPrice;
    priceSelect.add(option);
}
/*
// Populate the income select based on the selected course
function populateIncome() {
    var course = document.getElementById("course").value;
    var incomeSelect = document.getElementById("income");
    incomeSelect.innerHTML = "";
    
    var incomes = {
        "Web Design/Development": "Fixed Salary",
        "Graphics Design": "Work Based",
        "Digital Marketing": "Contractual",
        "Office Application": "Commission Based"
    };
    
    var selectedIncome = incomes[course];
    var option = document.createElement("option");
    option.text = selectedIncome;
    incomeSelect.add(option);
}
*/
// Initially populate the duration, price, and income selects based on the default selected course
populateDuration();