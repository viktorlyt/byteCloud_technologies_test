import {
  storage,
  transfer,
  hddBtn,
  ssdBtn,
  multiBtn,
  singleBtn,
  backblaze,
  bunny,
  scaleway,
  vultr,
} from "./companies.js";

const spanStorage = document.getElementById("spanStorage");
const spanTransfer = document.getElementById("spanTransfer");
spanStorage.innerText = storage.value;
spanTransfer.innerText = transfer.value;

const data = function () {
  return [
    backblaze.getValue(),
    bunny.getValue(),
    scaleway.getValue(),
    vultr.getValue(),
  ];
};

const drawChart = function () {
  const ctx = document.getElementById("myChart");

  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

  Chart.defaults.font.size = 24;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["", "", "", ""],
      datasets: [
        {
          label: "",
          data: data(),
          borderWidth: 2,
          backgroundColor: [
            getColor(backblaze),
            getColor(bunny),
            getColor(scaleway),
            getColor(vultr),
          ],
          fontSize: 16,
        },
      ],
    },
    options: {
      indexAxis: window.innerWidth > 768 ? "y" : "x",
      fontSize: 30,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
drawChart();
storage.addEventListener("input", () => {
  spanStorage.innerText = storage.value;
  spanTransfer.innerText = transfer.value;
  drawChart();
});
transfer.addEventListener("input", () => {
  spanStorage.innerText = storage.value;
  spanTransfer.innerText = transfer.value;
  drawChart();
});
hddBtn.addEventListener("input", () => {
  drawChart();
});
ssdBtn.addEventListener("input", () => {
  drawChart();
});
multiBtn.addEventListener("input", () => {
  drawChart();
});
singleBtn.addEventListener("input", () => {
  drawChart();
});

function getColor(company) {
  const min = Math.min(...data());
  const color = min === company.getValue() ? company.color : "gray";
  return color;
}
