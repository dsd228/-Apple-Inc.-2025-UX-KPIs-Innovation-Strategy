document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      // Productos
      const productsGallery = document.querySelector(".products-gallery");
      data.products.forEach(({img, alt}) => {
        const imgEl = document.createElement("img");
        imgEl.src = img;
        imgEl.alt = alt;
        imgEl.loading = "lazy";
        imgEl.setAttribute("role", "listitem");
        productsGallery.appendChild(imgEl);
      });

      // Contacto
      const contactList = document.querySelector(".contact-list");
      data.contact.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        contactList.appendChild(li);
      });

      // Gráficos con Chart.js
      const { insights, financials } = data;

      // Insight Chart 1 - Usuarios Nuevos
      const ctx1 = document.getElementById("insightChart1").getContext("2d");
      new Chart(ctx1, {
        type: "line",
        data: {
          labels: insights.newUsers.labels,
          datasets: [{
            label: "Usuarios Nuevos (millones)",
            data: insights.newUsers.data,
            borderColor: "#0071e3",
            backgroundColor: "rgba(0,113,227,0.2)",
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
          }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
      });

      // Insight Chart 2 - Ventas
      const ctx2 = document.getElementById("insightChart2").getContext("2d");
      new Chart(ctx2, {
        type: "bar",
        data: {
          labels: insights.sales.labels,
          datasets: [{
            label: "Ingresos trimestrales (billones USD)",
            data: insights.sales.data,
            backgroundColor: "#0071e3"
          }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
      });

      // Insight Chart 3 - Satisfacción Cliente
      const ctx3 = document.getElementById("insightChart3").getContext("2d");
      new Chart(ctx3, {
        type: "doughnut",
        data: {
          labels: insights.customerSatisfaction.labels,
          datasets: [{
            label: "Satisfacción Cliente",
            data: insights.customerSatisfaction.data,
            backgroundColor: ["#0071e3", "#d2d2d7"],
            hoverOffset: 30
          }]
        },
        options: { responsive: true, cutout: "75%", plugins: { legend: { position: "bottom" } } }
      });

      // Financial Chart
      const ctx4 = document.getElementById("financialChart").getContext("2d");
      new Chart(ctx4, {
        type: "line",
        data: {
          labels: financials.labels,
          datasets: [
            {
              label: "Ingresos (billones USD)",
              data: financials.revenues,
              borderColor: "#0071e3",
              backgroundColor: "rgba(0,113,227,0.2)",
              fill: true,
              tension: 0.3,
              yAxisID: "y"
            },
            {
              label: "Beneficios (billones USD)",
              data: financials.profits,
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
            y: { type: "linear", position: "left", beginAtZero: true, title: { display: true, text: "Ingresos (billones USD)" } },
            y1: { type: "linear", position: "right", beginAtZero: true, grid: { drawOnChartArea: false }, title: { display: true, text: "Beneficios (billones USD)" } }
          }
        }
      });
    })
    .catch(console.error);
});
