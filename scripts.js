const darkModeBtn = document.getElementById('darkmode-btn');
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const contactoList = document.querySelector('.contact-list');

// Toggle modo oscuro
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Toggle sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Cerrar sidebar con teclado (Enter o Espacio)
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
  }
});

const ctx1 = document.getElementById('insightChart1').getContext('2d');
const ctx2 = document.getElementById('insightChart2').getContext('2d');
const ctx3 = document.getElementById('insightChart3').getContext('2d');
const ctxFin = document.getElementById('financialChart').getContext('2d');

let chart1, chart2, chart3, chartFin;

function createCharts(data) {
  if (chart1) chart1.destroy();
  if (chart2) chart2.destroy();
  if (chart3) chart3.destroy();
  if (chartFin) chartFin.destroy();

  chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: data.usuariosNuevos.labels,
      datasets: [{
        label: 'Millones de usuarios',
        data: data.usuariosNuevos.data,
        borderColor: '#007aff',
        backgroundColor: 'rgba(0,122,255,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#007aff'
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

  chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: data.ventasTrimestrales.labels,
      datasets: [{
        label: 'Ingresos en Billones USD',
        data: data.ventasTrimestrales.data,
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

  chart3 = new Chart(ctx3, {
    type: 'radar',
    data: {
      labels: data.satisfaccionCliente.labels,
      datasets: [{
        label: 'Satisfacción (%)',
        data: data.satisfaccionCliente.data,
        backgroundColor: 'rgba(255, 204, 0, 0.4)',
        borderColor: '#ffcc00',
        pointBackgroundColor: '#ffcc00'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: '#ddd' },
          grid: { color: '#ddd' },
          min: 0,
          max: 100,
          ticks: { stepSize: 20 }
        }
      }
    }
  });

  chartFin = new Chart(ctxFin, {
    type: 'line',
    data: {
      labels: data.finanzas.labels,
      datasets: [
        {
          label: 'Ingresos (Billones USD)',
          data: data.finanzas.ingresos,
          borderColor: '#007aff',
          backgroundColor: 'rgba(0, 122, 255, 0.2)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Beneficios (Billones USD)',
          data: data.finanzas.beneficios,
          borderColor: '#34c759',
          backgroundColor: 'rgba(52, 199, 89, 0.2)',
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

function renderProductosTabla(productos) {
  const tbody = document.querySelector('#productosTable tbody');
  tbody.innerHTML = '';
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

function updateContacto(contacto) {
  contactoList.innerHTML = `
    <li>Correo: ${contacto.email}</li>
    <li>Teléfono: ${contacto.telefono}</li>
    <li>Dirección: ${contacto.direccion}</li>
  `;
}

async function loadDataAndRender() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) throw new Error('No se pudo cargar data.json');
    const data = await response.json();

    createCharts(data);
    renderProductosTabla(data.tablaProductos);
    updateContacto(data.contacto);

  } catch (error) {
    console.error('Error cargando datos:', error);
  } finally {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 300);
    }
  }
}

// Cargar datos al iniciar
loadDataAndRender();
