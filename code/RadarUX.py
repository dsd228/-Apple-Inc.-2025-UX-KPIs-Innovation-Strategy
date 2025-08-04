# RadarUX.py — Comparativa UX 2025 (Optimizado)
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.graph_objects as go
from config import COMMON_LAYOUT_CONFIG, COLOR_PALETTE

# Configuración optimizada de datos
ux_data = {
    "criterios": ["Usabilidad", "Accesibilidad", "Branding", "Engagement", "Consistencia", "Novedad UX"],
    "companies": {
        "Apple": [9.5, 8.5, 10, 9.2, 9.6, 8.8],
        "Samsung": [8.3, 7.2, 8.5, 7.9, 8.0, 7.0],
        "Google": [8.8, 9.1, 8.7, 8.5, 8.3, 9.5]
    }
}

# Cerrar polígonos optimizado
criterios_closed = ux_data["criterios"] + [ux_data["criterios"][0]]

# Función optimizada para crear trazas
def create_radar_trace(name, values, color):
    values_closed = values + [values[0]]
    return go.Scatterpolar(
        r=values_closed,
        theta=criterios_closed,
        fill='toself',
        name=name,
        line_color=color
    )

# Crear figura optimizada
fig = go.Figure()

# Agregar trazas usando configuración optimizada
company_colors = {
    "Apple": COLOR_PALETTE["apple_green"],
    "Samsung": COLOR_PALETTE["samsung_blue"], 
    "Google": COLOR_PALETTE["google_red"]
}

for company, values in ux_data["companies"].items():
    fig.add_trace(create_radar_trace(company, values, company_colors[company]))

# Configuración polar optimizada
polar_config = dict(
    bgcolor="black",
    radialaxis=dict(visible=True, range=[0, 10], showline=False, gridcolor=COLOR_PALETTE["neutral_gray"])
)

# Aplicar layout optimizado
layout_config = COMMON_LAYOUT_CONFIG.copy()
layout_config.update({
    'title': "🎯 Comparativa UX 2025: Apple vs Samsung vs Google",
    'polar': polar_config,
    'showlegend': True
})
fig.update_layout(**layout_config)

# Exportar como imagen (configuración optimizada)
# from config import EXPORT_CONFIG
# fig.write_image("Presentación/Radar-UX.png", **EXPORT_CONFIG)

# Mostrar
fig.show()
