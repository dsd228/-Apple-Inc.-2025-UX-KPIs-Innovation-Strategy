// Modo oscuro toggle y persistencia local
const darkModeBtn = document.getElementById('darkmode-btn');
const body = document.body;

function setDarkMode(enabled) {
  if(enabled) {
    body.classList.add('darkmode');
    darkModeBtn.textContent = 'Modo Claro';
    localStorage.setItem('darkmode', 'enabled');
  } else {
    body.classList.remove('darkmode');
    darkModeBtn.textContent = 'Modo Oscuro';
    localStorage.setItem('darkmode', 'disabled');
  }
}

// Cargar estado previo modo oscuro
const savedMode = localStorage.getItem('darkmode');
if(savedMode === 'enabled') setDarkMode(true);
else setDarkMode(false);

darkModeBtn.addEventListener('click', () => {
  setDarkMode(!body.classList.contains('darkmode'));
});

// Sidebar toggle en móvil
const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  hamburger.classList.toggle('open');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});

// Cerrar menú al click en enlace
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 768) {
      sidebar.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});

// Gráficos Chart.js ejemplos simples

// Usuarios nuevos
const ctx1 = document.getElementById('insightChart1').getContext('2d');
const insightChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Oct', 'Nov', 'Dic', 'Ene'],
    datasets: [{
      label: 'Usuarios Nuevos (M)',
      data: [12, 13, 13.2, 13.6],
      borderColor: '#007aff',
      backgroundColor: 'rgba(0, 122, 255, 0.2)',
      fill: true,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#007aff'
    }]
  },
  options: {
    responsive: true,
    plugins: {legend: {display: false}},
    scales: {
      y: {beginAtZero: true}
    }
  }
});

// Ventas trimestrales
const ctx2 = document.getElementById('insightChart2').getContext('2d');
const insightChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Ingresos (Billones USD)',
      data: [0.9, 1.1, 1.3, 1.5],
      backgroundColor: '#34c759'
    }]
  },
  options: {
    responsive: true,
    plugins: {legend: {display: false}},
    scales: {
      y: {beginAtZero: true}
    }
  }
});

// Satisfacción cliente
const ctx3 = document.getElementById('insightChart3').getContext('2d');
const insightChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Positivo', 'Negativo'],
    datasets: [{
      label: 'Satisfacción',
      data: [75, 25],
      backgroundColor: ['#007aff', '#d1d1d6']
    }]
  },
  options: {
    responsive: true,
    cutout: '70%',
    plugins: {legend: {position: 'bottom'}}
  }
});

// Estadísticas financieras (más simple)
const ctx4 = document.getElementById('financialChart').getContext('2d');
const financialChart = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Ingresos (Billones USD)',
        data: [2.7, 3.1, 3.6, 4.0, 4.4, 4.9],
        borderColor: '#007aff',
        backgroundColor: 'rgba(0, 122, 255, 0.15)',
        fill: true,
        tension: 0.3,
        yAxisID: 'y'
      },
      {
        label: 'Beneficio Neto (Billones USD)',
        data: [0.6, 0.7, 0.9, 1.1, 1.2, 1.3],
        borderColor: '#34c759',
        backgroundColor: 'rgba(52, 199, 89, 0.15)',
        fill: true,
        tension: 0.3,
        yAxisID: 'y1'
      }
    ]
  },
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    stacked: false,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        title: {display: true, text: 'Ingresos (Billones USD)'}
      },
      y1: {
        type: 'linear',
        position: 'right',
        beginAtZero: true,
        grid: {drawOnChartArea: false},
        title: {display: true, text: 'Beneficio Neto (Billones USD)'}
      }
    }
  }
});
