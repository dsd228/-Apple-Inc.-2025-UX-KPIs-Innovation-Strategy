// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.getElementById('darkmode-btn');
  const body = document.body;

  // Carga datos iniciales
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      initCharts(data);
      updateProducts(data.products);
      updateContact(data.contact);
    })
    .catch(err => console.error('Error loading data:', err));

  // Toggle modo oscuro
  darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    darkModeBtn.textContent = body.classList.contains('dark') ? 'Modo Claro' : 'Modo Oscuro';
  });
});

let insightChart1, insightChart2, insightChart3, financialChart;

function initCharts(data) {
  const ctx1 = document.getElementById('insightChart1').getContext('2d');
  const ctx2 = document.getElementById('insightChart2').getContext('2d');
  const ctx3 = document.getElementById('insightChart3').getContext('2d');
  const ctxFinancial = document.getElementById('financialChart').getContext('2d');

  insightChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: data.newUsers.labels,
      datasets: [{
        label: 'Usuarios Nuevos',
        data: data.newUsers.data,
        borderColor: '#007aff',
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  insightChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: data.sales.labels,
      datasets: [{
        label: 'Ventas Trimestrales (billones USD)',
        data: data.sales.data,
        backgroundColor: '#34c759'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  insightChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: data.customerSatisfaction.labels,
      datasets: [{
        label: 'Satisfacción Cliente',
        data: data.customerSatisfaction.data,
        backgroundColor: ['#007aff', '#34c759', '#ffcc00']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });

  financialChart = new Chart(ctxFinancial, {
    type: 'line',
    data: {
      labels: data.financialStats.labels,
      datasets: [
        {
          label: 'Ingresos',
          data: data.financialStats.revenue,
          borderColor: '#007aff',
          backgroundColor: 'rgba(0, 122, 255, 0.2)',
          fill: true,
          tension: 0.3,
        },
        {
          label: 'Beneficio Neto',
          data: data.financialStats.netProfit,
          borderColor: '#34c759',
          backgroundColor: 'rgba(52, 199, 89, 0.2)',
          fill: true,
          tension: 0.3,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function updateProducts(products) {
  const gallery = document.querySelector('.products-gallery');
  gallery.innerHTML = '';
  products.forEach(prod => {
    const img = document.createElement('img');
    img.src = prod.img;
    img.alt = prod.alt;
    img.loading = 'lazy';
    img.title = prod.name;
    gallery.appendChild(img);
  });
}

function updateContact(contact) {
  const list = document.querySelector('.contact-list');
  list.innerHTML = `
    <li>Correo: <a href="mailto:${contact.email}">${contact.email}</a></li>
    <li>Teléfono: <a href="tel:${contact.phone}">${contact.phone}</a></li>
    <li>Dirección: ${contact.address}</li>
  `;
}
