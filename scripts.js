// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // Modo oscuro - persistencia con localStorage
  const darkModeBtn = document.getElementById("darkmode-btn");
  const body = document.body;

  if(localStorage.getItem("darkmode") === "enabled") {
    body.classList.add("darkmode");
  }

  darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    if(body.classList.contains("darkmode")) {
      localStorage.setItem("darkmode", "enabled");
    } else {
      localStorage.setItem("darkmode", "disabled");
    }
  });

  // Menú hamburguesa para sidebar en móvil
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });

  // Carga dinámica galería de productos
  const productsGallery = document.querySelector(".products-gallery");
  const products = [
    {
      img: "https://www.apple.com/v/iphone/home/af/images/overview/compare/iphone_14_pro_deep_purple__bx08nd4pi9m6_large.jpg",
      alt: "iPhone 14 Pro"
    },
    {
      img: "https://www.apple.com/v/macbook-air/m/images/overview/hero/hero__dvsx9z7smoi6_large_2x.jpg",
      alt: "MacBook Air M2"
    },
    {
      img: "https://www.apple.com/v/apple-watch-series-9/a/images/overview/hero/hero_static__bsza6x4e4ceq_large.jpg",
      alt: "Apple Watch Series 9"
    }
  ];

  products.forEach(({img, alt}) => {
    const imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.alt = alt;
    imgEl.loading = "lazy";
    imgEl.setAttribute("role", "listitem");
    productsGallery.appendChild(imgEl);
  });

  // Carga dinámica de datos de contacto
  const contactList = document.querySelector(".contact-list");
  const contacts = [
    "Correo: contacto@apple2025.com",
    "Teléfono: +1 800 555 1234",
    "Dirección: 1 Infinite Loop, Cupertino, CA"
  ];

  contacts.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    contactList.appendChild(li);
  });

  // Gráficos con Chart.js

  // Insight Chart 1 - Usuarios Nuevos
  const ctx1 = document.getElementById("insightChart1").getContext("2d");
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["Oct 2024", "Nov 2024", "Dec 2024", "Jan 2025"],
      datasets: [{
        label: "Usuarios Nuevos (millones)",
        data: [9.8, 11.2, 12.5, 13.6],
        borderColor: "#0071e3",
        backgroundColor: "rgba(0,113,227,0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Insight Chart 2 - Ventas
  const ctx2 = document.getElementById("insightChart2").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [{
        label: "Ingresos trimestrales (billones USD)",
        data: [90, 95, 102, 110],
        backgroundColor: "#0071e3"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Insight Chart 3 - Satisfacción Cliente
  const ctx3 = document.getElementById("insightChart3").getContext("2d");
  new Chart(ctx3, {
    type: "doughnut",
    data: {
      labels: ["Satisfacción Positiva", "Otros"],
      datasets: [{
        label: "Satisfacción Cliente",
        data: [75, 25],
        backgroundColor: ["#0071e3", "#d2d2d7"],
        hoverOffset: 30
      }]
    },
    options: {
      responsive: true,
      cutout: "75%",
      plugins: { legend: { position: "bottom" } }
    }
  });

  // Financial Chart
  const ctx4 = document.getElementById("financialChart").getContext("2d");
  new Chart(ctx4, {
    type: "line",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Ingresos (billones USD)",
          data: [260, 274, 294, 315, 365, 400],
          borderColor: "#0071e3",
          backgroundColor: "rgba(0,113,227,0.2)",
          fill: true,
          tension: 0.3,
          yAxisID: "y"
        },
        {
          label: "Beneficios (billones USD)",
          data: [55, 57, 65, 70, 90, 95],
          borderColor: "#34c759",
          backgroundColor: "rgba(52,199,89,0.2)",
          fill: true,
          tension: 0.3,
          yAxisID: "y1"
        }
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: "index", intersect: false },
      stacked: false,
      scales: {
        y: {
          type: "linear",
          position: "left",
          beginAtZero: true,
          title: { display: true, text: "Ingresos (billones USD)" }
        },
        y1: {
          type: "linear",
          position: "right",
          beginAtZero: true,
          grid: { drawOnChartArea: false },
          title: { display: true, text: "Beneficios (billones USD)" }
        }
      }
    }
  });
});
