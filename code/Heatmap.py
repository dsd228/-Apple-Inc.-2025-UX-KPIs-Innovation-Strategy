# Heatmap.py — Mapa de Ventas Globales Apple FY2024 (Optimizado)
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.express as px
import pandas as pd
from config import COMMON_LAYOUT_CONFIG

# Datos optimizados con estructuras más eficientes
sales_data = {
    "Región": ["América", "Europa", "China", "Japón", "Asia-Pacífico"],
    "Ingresos": [162, 95, 72, 25, 29],  # Nombre simplificado
    "ISO": ["USA", "FRA", "CHN", "JPN", "SGP"]  # Nombre más corto
}

# DataFrame optimizado con tipos específicos
df = pd.DataFrame(sales_data)
df['Ingresos'] = df['Ingresos'].astype('int16')  # Optimización de memoria

# Configuración geográfica optimizada
geo_config = dict(showframe=False, showcoastlines=True)

# Crear mapa con configuración consolidada
fig = px.choropleth(
    df,
    locations="ISO",
    color="Ingresos", 
    hover_name="Región",
    color_continuous_scale="Viridis",
    projection="natural earth",
    labels={"Ingresos": "Ingresos (USD B)"}
)

# Aplicar layout optimizado
layout_config = COMMON_LAYOUT_CONFIG.copy()
layout_config.update({
    'title_text': "🗺️ Apple FY2024 · Mapa de Calor de Ventas por Región",
    'geo': geo_config
})
fig.update_layout(**layout_config)

# Exportar imagen (opcional, configuración optimizada)
# from config import EXPORT_CONFIG
# fig.write_image("Presentación/Heatmap-Ventas.png", **EXPORT_CONFIG)

# Mostrar
fig.show()
