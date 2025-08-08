document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const sidebar = document.querySelector('nav.sidebar');
  const hamburger = document.querySelector('.hamburger');
  const darkModeBtn = document.getElementById('darkmode-btn');
  const body = document.body;

  // Hamburger toggle menu
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
  });

  // Close sidebar on link click (mobile)
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Dark mode toggle with localStorage
  const savedMode = localStorage.getItem('darkmode');
  if (savedMode === 'enabled') {
    body.classList.add('darkmode');
    darkModeBtn.textContent = 'Modo Claro';
  }

  darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    if (body.classList.contains('darkmode')) {
      darkModeBtn.textContent = 'Modo Claro';
      localStorage.setItem('darkmode', 'enabled');
    } else {
      darkModeBtn.textContent = 'Modo Oscuro';
      localStorage.setItem('darkmode', 'disabled');
    }
  });

  // Chart.js data and config
  const createChart = (ctx, type, data, options) => new Chart(ctx, { type, data, options });

  // Insight Charts
  const insightChart1 = createChart(document.getElementById('insightChart1').getContext('2d'), 'line', {
    labels: ['Oct', 'Nov', 'Dic', 'Ene'],
    datasets: [{
      label: 'Usuarios Nuevos',
      data: [9800000, 10300000, 11500000, 13600000],
      borderColor: '#007aff',
      backgroundColor: 'rgba(0,122,255,0.3)',
      fill: true,
      tension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 6,
    }]
  }, {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { callback: v => (v / 1000000) + 'M' } }
    }
  });

  const insightChart2 = createChart(document.getElementById('insightChart2').getContext('2d'), 'bar', {
    labels: ['Oct', 'Nov', 'Dic', 'Ene'],
    datasets: [{
      label: 'Ventas en Billones USD',
      data: [30.1, 31.5, 35.0, 37.9],
      backgroundColor: '#34c759',
      borderRadius: 8,
      barPercentage: 0.6,
    }]
  }, {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { callback: v => v + 'B' } }
    }
  });

  const insightChart3 = createChart(document.getElementById('insightChart3').getContext('2d'), 'doughnut', {
    labels: ['Soporte Positivo', 'Neutral', 'Negativo'],
    datasets: [{
      label: 'Satisfacción Cliente',
      data: [75, 15, 10],
      backgroundColor: ['#007aff', '#ffc107', '#ff3b30'],
      hoverOffset: 10,
    }]
  }, {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#007aff', font: { weight: '600' } } }
    }
  });

  // Financial Stats Chart
  const financialChart = createChart(document.getElementById('financialChart').getContext('2d'), 'line', {
    labels: ['Oct', 'Nov', 'Dic', 'Ene'],
    datasets: [
      {
        label: 'Ingresos (Billones USD)',
        data: [90.15, 92.55, 95.60, 98.85],
        borderColor: '#007aff',
        backgroundColor: 'rgba(0,122,255,0.15)',
        fill: true,
        tension: 0.3,
        yAxisID: 'y',
      },
      {
        label: 'Beneficio Neto (Billones USD)',
        data: [23.25, 24.20, 24.90, 26.10],
        borderColor: '#ff9500',
        backgroundColor: 'rgba(255,149,0,0.15)',
        fill: true,
        tension: 0.3,
        yAxisID: 'y1',
      }
    ]
  }, {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    stacked: false,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        beginAtZero: false,
        ticks: { callback: v => v + 'B' }
      },
      y1: {
        type: 'linear',
        position: 'right',
        beginAtZero: false,
        grid: { drawOnChartArea: false },
        ticks: { callback: v => v + 'B' }
      }
    },
    plugins: {
      legend: {
        labels: { font: { weight: '600' } }
      }
    }
  });
});
