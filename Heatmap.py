# Heatmap.py — Mapa de Ventas Globales Apple FY2024
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.express as px
import pandas as pd

# Datos por región (en miles de millones USD, estimados FY2024)
data = {
    "Región": ["América", "Europa", "China", "Japón", "Asia-Pacífico"],
    "Ingresos_Billones": [162, 95, 72, 25, 29],
    "Código_ISO": ["USA", "FRA", "CHN", "JPN", "SGP"]  # Códigos de ejemplo para el mapa
}

df = pd.DataFrame(data)

# Crear mapa de calor geográfico
fig = px.choropleth(
    df,
    locations="Código_ISO",
    color="Ingresos_Billones",
    hover_name="Región",
    color_continuous_scale="Viridis",
    projection="natural earth",
    labels={"Ingresos_Billones": "Ingresos (USD B)"}
)

fig.update_layout(
    title_text="🗺️ Apple FY2024 · Mapa de Calor de Ventas por Región",
    geo=dict(showframe=False, showcoastlines=True),
    paper_bgcolor='black',
    plot_bgcolor='black',
    font_color='white'
)

# Exportar imagen (opcional)
# fig.write_image("Presentación/Heatmap-Ventas.png")

# Mostrar
fig.show()
