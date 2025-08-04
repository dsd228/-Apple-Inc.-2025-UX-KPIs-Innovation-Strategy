# Sankey.py — Apple FY2024 Revenue Flow (Optimizado)
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.graph_objects as go
from config import COMMON_LAYOUT_CONFIG

# Datos consolidados en estructura optimizada
revenue_config = {
    "categorias": ["iPhone", "Mac", "iPad", "Wearables", "Servicios"],
    "valores": [205, 40, 28, 38, 72],  # En miles de millones USD
    "source_label": "Ingresos Totales FY2024"
}

# Construcción optimizada de nodos
labels = [revenue_config["source_label"]] + revenue_config["categorias"]
num_categories = len(revenue_config["categorias"])

# Configuración optimizada de nodos y enlaces
node_config = dict(
    pad=15,
    thickness=20,
    line=dict(color="black", width=0.5),
    label=labels,
    color="rgba(0, 255, 128, 0.8)"
)

link_config = dict(
    source=[0] * num_categories,  # Optimizado: desde "Ingresos Totales"
    target=list(range(1, num_categories + 1)),  # Optimizado: hacia cada categoría
    value=revenue_config["valores"],
    color=["rgba(255,255,255,0.4)"] * num_categories
)

# Crear figura optimizada
fig = go.Figure(data=[go.Sankey(node=node_config, link=link_config)])

# Aplicar layout optimizado
layout_config = COMMON_LAYOUT_CONFIG.copy()
layout_config.update({
    'title_text': "📊 Apple FY2024 · Sankey Diagram de Ingresos por Categoría",
    'font_size': 14
})
fig.update_layout(**layout_config)

# Exportar como imagen (configuración optimizada)
# from config import EXPORT_CONFIG
# fig.write_image("Presentación/Sankey-Ingresos.png", **EXPORT_CONFIG)

# Mostrar en navegador
fig.show()
