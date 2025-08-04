# ESG_Timeline.py — Estrategia de Sostenibilidad Apple 2030 (Optimizado)
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.express as px
import pandas as pd
from config import COMMON_LAYOUT_CONFIG

# Datos pre-optimizados con nombres más cortos para mejor rendimiento
esg_data = {
    "Año": [2015, 2020, 2024, 2027, 2030],
    "Emisiones": [0, 20, 60, 80, 100],
    "Reciclados": [20, 50, 99, 99, 100], 
    "Barco": [10, 30, 50, 65, 80],
    "Agua": [0, 4, 14, 20, 25]
}

# Crear DataFrame optimizado con tipos específicos
df = pd.DataFrame(esg_data, dtype='int16')

# Columnas métricas pre-definidas para mejor rendimiento
metrics_cols = ["Emisiones", "Reciclados", "Barco", "Agua"]

# Crear gráfico optimizado con parámetros consolidados
fig = px.line(
    df, 
    x="Año", 
    y=metrics_cols,
    title="🌱 Apple 2030 · Timeline ESG",
    markers=True,
    labels={"value": "Porcentaje / Billones", "variable": "Indicador"}
)

# Aplicar configuración optimizada en una sola llamada
layout_config = COMMON_LAYOUT_CONFIG.copy()
layout_config['legend_title_text'] = 'Indicadores ESG'
fig.update_layout(**layout_config)

# Exportar imagen (opcional, configuración optimizada)
# fig.write_image("Presentación/Timeline-Sostenibilidad.png", **EXPORT_CONFIG)

# Mostrar en navegador
fig.show()
