// Control menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('nav.sidebar');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', sidebar.classList.contains('open'));
});
hamburger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});

// Control modo oscuro
const darkmodeBtn = document.getElementById('darkmode-btn');
darkmodeBtn.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  if (document.body.classList.contains('darkmode')) {
    darkmodeBtn.textContent = 'Modo Claro';
  } else {
    darkmodeBtn.textContent = 'Modo Oscuro';
  }
});

// Configuración de gráficos Chart.js
function createInsightCharts() {
  const ctx1 = document.getElementById('insightChart1').getContext('2d');
  const chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Oct 24', 'Nov 24', 'Dic 24', 'Ene 25'],
      datasets: [{
        label: 'Usuarios Nuevos (millones)',
        data: [12.5, 13.1, 13.3, 13.6],
        borderColor: '#007aff',
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 4,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });

  const ctx2 = document.getElementById('insightChart2').getContext('2d');
  const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Q3 FY24', 'Q4 FY24', 'Q1 FY25'],
      datasets: [{
        label: 'Ingresos (billones USD)',
        data: [83.4, 117.2, 94.8],
        backgroundColor: '#34c759',
        borderRadius: 8,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 20 }
        }
      }
    }
  });

  const ctx3 = document.getElementById('insightChart3').getContext('2d');
  const chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Positivos', 'Otros'],
      datasets: [{
        label: 'Satisfacción',
        data: [75, 25],
        backgroundColor: ['#ff9500', '#d1d1d6'],
        hoverOffset: 30
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } },
    }
  });
}

function createFinancialChart() {
  const ctx = document.getElementById('financialChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Q3 FY24', 'Q4 FY24', 'Q1 FY25'],
      datasets: [
        {
          label: 'Ingresos (billones USD)',
          data: [83.4, 117.2, 94.8],
          borderColor: '#007aff',
          backgroundColor: 'rgba(0, 122, 255, 0.2)',
          tension: 0.3,
          fill: true,
          pointRadius: 5,
        },
        {
          label: 'Beneficio Neto (billones USD)',
          data: [20.7, 34.6, 27.7],
          borderColor: '#ff3b30',
          backgroundColor: 'rgba(255, 59, 48, 0.2)',
          tension: 0.3,
          fill: true,
          pointRadius: 5,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
}

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
  createInsightCharts();
  createFinancialChart();
});
