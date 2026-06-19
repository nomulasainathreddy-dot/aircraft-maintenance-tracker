function toggleDark() {
  document.body.classList.toggle("dark");
}

const aircraftData = {
  boeing: {
    "Boeing 737": {
      type: "Narrow-body aircraft",
      range: "6,110 km",
      capacity: "160–215 passengers",
      use: "Domestic and short international flights",
      status: "Maintenance Due"
    },
    "Boeing 747": {
      type: "Wide-body aircraft",
      range: "13,450 km",
      capacity: "366–524 passengers",
      use: "Long-haul international flights",
      status: "Active"
    },
    "Boeing 777": {
      type: "Wide-body aircraft",
      range: "15,840 km",
      capacity: "314–396 passengers",
      use: "Long-distance routes",
      status: "Inspection Soon"
    },
    "Boeing 787 Dreamliner": {
      type: "Wide-body aircraft",
      range: "14,140 km",
      capacity: "242–330 passengers",
      use: "Fuel-efficient long-haul flights",
      status: "Active"
    }
  },

  airbus: {
    "Airbus A320": {
      type: "Narrow-body aircraft",
      range: "6,300 km",
      capacity: "150–186 passengers",
      use: "Domestic and regional routes",
      status: "Active"
    },
    "Airbus A330": {
      type: "Wide-body aircraft",
      range: "13,450 km",
      capacity: "250–290 passengers",
      use: "Medium and long-haul flights",
      status: "Inspection Soon"
    },
    "Airbus A350": {
      type: "Wide-body aircraft",
      range: "15,000 km",
      capacity: "300–410 passengers",
      use: "Modern long-haul routes",
      status: "Active"
    },
    "Airbus A380": {
      type: "Double-deck wide-body aircraft",
      range: "15,200 km",
      capacity: "500–850 passengers",
      use: "High-capacity international routes",
      status: "Maintenance Due"
    }
  }
};

function loadModels() {
  let company = document.getElementById("companySelect").value;
  let modelSelect = document.getElementById("modelSelect");
  let details = document.getElementById("aircraftDetails");

  modelSelect.innerHTML = '<option value="">-- Select Model --</option>';

  details.innerHTML = `
    <div class="moving-flight">✈️</div>
    <h3>Aircraft details will appear here</h3>
  `;

  if (company === "") return;

  let models = Object.keys(aircraftData[company]);

  models.forEach(function(model) {
    let option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
}

function showAircraftDetails() {
  let company = document.getElementById("companySelect").value;
  let model = document.getElementById("modelSelect").value;
  let details = document.getElementById("aircraftDetails");

  if (model === "") return;

  let data = aircraftData[company][model];

  let statusClass = "safe";

  if (data.status === "Maintenance Due") {
    statusClass = "danger";
  }

  if (data.status === "Inspection Soon") {
    statusClass = "warning";
  }

  details.innerHTML = `
    <div class="moving-flight">✈️</div>
    <h3>${model}</h3>
    <p><b>Type:</b> ${data.type}</p>
    <p><b>Range:</b> ${data.range}</p>
    <p><b>Capacity:</b> ${data.capacity}</p>
    <p><b>Common Use:</b> ${data.use}</p>
    <p><b>Status:</b> <span class="${statusClass}">${data.status}</span></p>
  `;

  details.classList.remove("pop-animation");
  void details.offsetWidth;
  details.classList.add("pop-animation");
}

function addDefect() {
  let input = document.getElementById("defectInput");
  let list = document.getElementById("defectList");

  if (input.value.trim() === "") {
    alert("Please enter a defect");
    return;
  }

  let li = document.createElement("li");
  li.textContent = "⚠️ " + input.value;
  li.style.margin = "10px";
  li.style.padding = "12px";
  li.style.background = "#ffe5e5";
  li.style.borderLeft = "5px solid red";
  li.style.borderRadius = "8px";

  list.appendChild(li);
  input.value = "";
}

function checkMaintenance() {
  let flightHours = 520;
  let alertBox = document.getElementById("alertBox");

  if (flightHours >= 500) {
    alertBox.textContent = "⚠️ Alert: Aircraft A101 maintenance is required!";
  } else {
    alertBox.textContent = "✅ Aircraft is safe.";
  }
}

function searchAircraft() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let table = document.getElementById("aircraftTable");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let model = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();

    if (model.includes(input)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}