// Modo oscuro toggle
const darkModeBtn = document.getElementById('darkmode-btn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    darkModeBtn.textContent = 'Modo Claro';
  } else {
    darkModeBtn.textContent = 'Modo Oscuro';
  }
});

// Sidebar móvil toggle
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', sidebar.classList.contains('open'));
});
function renderProductosTabla(productos) {
  const tbody = document.querySelector('#productosTable tbody');
  tbody.innerHTML = ''; // limpiar tabla

  productos.forEach(({nombre, precio, disponibilidad}) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${disponibilidad}</td>
    `;
    tbody.appendChild(row);
  });
}


// Configuración básica Chart.js para los gráficos

// Usuarios Nuevos (barra)
const ctx1 = document.getElementById('insightChart1').getContext('2d');
const insightChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [{
      label: 'Usuarios Nuevos (millones)',
      data: [13.6, 14.2, 15, 16.4, 17.1],
      backgroundColor: '#007aff',
      borderRadius: 5,
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

// Ventas trimestrales (líneas)
const ctx2 = document.getElementById('insightChart2').getContext('2d');
const insightChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Ingresos (billones USD)',
      data: [123.4, 134.1, 140.2, 150.6],
      borderColor: '#34c759',
      fill: false,
      tension: 0.3,
      pointRadius: 5,
      pointHoverRadius: 7,
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

// Satisfacción cliente (radar)
const ctx3 = document.getElementById('insightChart3').getContext('2d');
const insightChart3 = new Chart(ctx3, {
  type: 'radar',
  data: {
    labels: ['Soporte', 'Fidelidad', 'Calidad', 'Precio', 'Innovación'],
    datasets: [{
      label: 'Satisfacción',
      data: [75, 70, 80, 65, 85],
      backgroundColor: 'rgba(255, 204, 0, 0.5)',
      borderColor: '#ffcc00',
      borderWidth: 2,
      pointBackgroundColor: '#ffcc00',
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 }
      }
    },
    plugins: {
      legend: { position: 'top' }
    }
  }
});

// Gráfico financiero general
const ctx4 = document.getElementById('financialChart').getContext('2d');
const financialChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['FY 2021', 'FY 2022', 'FY 2023', 'FY 2024'],
    datasets: [
      {
        label: 'Ingresos (billones USD)',
        data: [260, 275, 294, 320],
        backgroundColor: '#007aff',
        borderRadius: 5,
      },
      {
        label: 'Beneficio Neto (billones USD)',
        data: [55, 60, 65, 70],
        backgroundColor: '#34c759',
        borderRadius: 5,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: {
      y: { beginAtZero: true }
    }
  }
});
