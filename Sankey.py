# Sankey.py — Apple FY2024 Revenue Flow
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.graph_objects as go

# Datos reales FY2024 (estimados)
categorias = ["iPhone", "Mac", "iPad", "Wearables", "Servicios"]
valores = [205, 40, 28, 38, 72]  # En miles de millones USD

# Nodos (Fuentes y Destinos)
labels = ["Ingresos Totales FY2024"] + categorias

# Definición del Sankey
fig = go.Figure(data=[go.Sankey(
    node=dict(
        pad=15,
        thickness=20,
        line=dict(color="black", width=0.5),
        label=labels,
        color="rgba(0, 255, 128, 0.8)"
    ),
    link=dict(
        source=[0, 0, 0, 0, 0],  # Desde "Ingresos Totales"
        target=[1, 2, 3, 4, 5],  # Hacia cada categoría
        value=valores,
        color=["rgba(255,255,255,0.4)"] * 5
    )
)])

# Título y diseño
fig.update_layout(
    title_text="📊 Apple FY2024 · Sankey Diagram de Ingresos por Categoría",
    font_size=14,
    height=500,
    plot_bgcolor='black',
    paper_bgcolor='black',
    font_color='white'
)

# Exportar como imagen (requiere kaleido instalado)
# fig.write_image("Presentación/Sankey-Ingresos.png")

# Mostrar en navegador
fig.show()
Añadir script Sankey Diagram FY2024
