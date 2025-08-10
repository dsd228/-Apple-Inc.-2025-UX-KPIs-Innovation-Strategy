// Variables globales para charts
let insightChart1, insightChart2, insightChart3, financialChart;

document.addEventListener('DOMContentLoaded', () => {
  const darkmodeBtn = document.getElementById('darkmode-btn');
  const body = document.body;
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  // Toggle modo oscuro
  darkmodeBtn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    if(body.classList.contains('darkmode')){
      darkmodeBtn.textContent = 'Modo Claro';
    } else {
      darkmodeBtn.textContent = 'Modo Oscuro';
    }
  });

  // Toggle sidebar en mobile
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Inicializar charts vacíos
  initCharts();

  // Cargar data.json y actualizar charts y contenidos
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      updateCharts(data);
      updateProducts(data.products);
      updateContact(data.contact);
    })
    .catch(err => console.error('Error cargando data.json:', err));
});

function initCharts() {
  const ctx1 = document.getElementById('insightChart1').getContext('2d');
  insightChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Usuarios Nuevos (millones)',
        data: [],
        borderColor: '#0071e3',
        backgroundColor: 'rgba(0, 113, 227, 0.15)',
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  const ctx2 = document.getElementById('insightChart2').getContext('2d');
  insightChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Ventas Trimestrales (billones USD)',
        data: [],
        backgroundColor: '#34c759'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  const ctx3 = document.getElementById('insightChart3').getContext('2d');
  insightChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        label: 'Satisfacción del Cliente',
        data: [],
        backgroundColor: ['#0071e3', '#d1d1d6']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });

  const ctx4 = document.getElementById('financialChart').getContext('2d');
  financialChart = new Chart(ctx4, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Ingresos (billones USD)',
          data: [],
          borderColor: '#0071e3',
          backgroundColor: 'rgba(0, 113, 227, 0.15)',
          tension: 0.3,
          fill: true,
          yAxisID: 'y'
        },
        {
          label: 'Beneficio Neto (billones USD)',
          data: [],
          borderColor: '#34c759',
          backgroundColor: 'rgba(52, 199, 89, 0.15)',
          tension: 0.3,
          fill: true,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left'
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

function updateCharts(data) {
  // Usuarios nuevos
  insightChart1.data.labels = data.userGrowth.labels;
  insightChart1.data.datasets[0].data = data.userGrowth.data;
  insightChart1.update();

  // Ventas trimestrales
  insightChart2.data.labels = data.quarterlySales.labels;
  insightChart2.data.datasets[0].data = data.quarterlySales.data;
  insightChart2.update
