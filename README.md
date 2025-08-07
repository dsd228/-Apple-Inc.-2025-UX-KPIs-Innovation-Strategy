<p align="center">
  <img src="./assets/visuals/github_banner.png" alt="Apple Inc. FY2025 Visual Banner: UX, KPIs, Innovation Strategy, Sustainability" style="max-width: 100%;">
</p>

# 📊 Apple Inc. Corporate Benchmarking FY24-25: A Strategic Deep Dive 🌐

*Interdisciplinary analysis focused on **Innovation**, **UX Strategy**, **KPI Performance**, **Sustainability**, and **Data Storytelling**.*

---

## 📚 Índice / Table of Contents

- [Executive Summary / Resumen Ejecutivo](#executive-summary--resumen-ejecutivo)
- [Author Profile / Perfil del Autor](#author-profile--perfil-del-autor)
- [Visual Analytics & Source Code](#visual-analytics--source-code)
- [Methodology / Metodología](#methodology--metodología)
- [Apple's Visual Palette / Paleta Visual de Apple](#apples-visual-palette--paleta-visual-de-apple)
- [Repository Structure / Estructura del Repositorio](#repository-structure--estructura-del-repositorio)
- [Technologies & Tools / Tecnologías y Herramientas](#technologies--tools--tecnologías-y-herramientas)
- [Apple’s 2030 Sustainability Commitment](#apples-2030-sustainability-commitment)
- [Contact / Contacto](#connect--conectar)

---

## Executive Summary / Resumen Ejecutivo

This repository presents a comprehensive corporate benchmarking analysis of Apple Inc. for FY2024-2025. The project integrates financial data, UX research, sustainability metrics, and innovation trends, aiming to deconstruct Apple's strategy and operational excellence. Designed for consultants, recruiters, and strategists, this portfolio demonstrates advanced analytical skills and holistic understanding of the tech industry.

> **ES:** Este repositorio contiene un análisis exhaustivo de benchmarking corporativo de Apple Inc. para los años fiscales 2024-2025, integrando datos financieros, investigación de UX, métricas de sostenibilidad y tendencias de innovación. Orientado a consultores, reclutadores y equipos de estrategia global.

---

## Author Profile / Perfil del Autor

| Category        | Details                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------- |
| **Name**        | David S. Diaz                                                                               |
| **Role**        | Senior Corporate Benchmarking Consultant                                                    |
| **Expertise**   | Data Analysis, UX Strategy, Corporate Sustainability, Financial KPIs                        |
| **Certifications** | 🏆 NN/g UX Certified <br>🔬 IBM Data Science <br>🎨 Google UX Design <br>📈 PMP®           |
| **LinkedIn**    | [linkedin.com/in/dsd228](https://www.linkedin.com/in/dsd228)                               |

---

## Visual Analytics & Source Code

Visualizations are generated with Python scripts in `/code/` and exported to `/assets/visuals/`.

| Área de Análisis      | Descripción                                         | Vista Previa                                                | Script Generador   |
| --------------------- | --------------------------------------------------- | ----------------------------------------------------------- | ------------------ |
| Revenue Breakdown     | Sankey: ingresos por categoría FY2025.              | ![Sankey](./assets/visuals/kpi_sankey_revenue.png)          | code/Sankey.py     |
| UX Benchmark          | Radar: Apple vs Samsung y Google.                   | ![Radar](./assets/visuals/ux_radar_benchmark.png)           | code/RadarUX.py    |
| Global Sales          | Treemap: ventas por región global.                  | ![Treemap](./assets/visuals/global_sales_treemap.png)       | code/Heatmap.py    |
| Sustainability Path   | Timeline hacia neutralidad carbono 2030.            | ![Timeline](./assets/visuals/sustainability_timeline.png)   | code/ESG_Timeline.py |

Para regenerar todas las visualizaciones:

```bash
python notebooks/apple_visuals_generator.py
