# ESG_Timeline.py — Estrategia de Sostenibilidad Apple 2030
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.express as px
import pandas as pd

# Datos simplificados de sostenibilidad (mock realista)
data = {
    "Año": [2015, 2020, 2024, 2027, 2030],
    "Reducción Emisiones (%)": [0, 20, 60, 80, 100],
    "Materiales Reciclados (%)": [20, 50, 99, 99, 100],
    "Productos por barco (%)": [10, 30, 50, 65, 80],
    "Agua Ahorrada (B galones)": [0, 4, 14, 20, 25]
}

df = pd.DataFrame(data)

# Crear gráfico de líneas múltiples
fig = px.line(df, x="Año", y=[
    "Reducción Emisiones (%)",
    "Materiales Reciclados (%)",
    "Productos por barco (%)",
    "Agua Ahorrada (B galones)"
],
    title="🌱 Apple 2030 · Timeline ESG",
    markers=True,
    labels={
        "value": "Porcentaje / Billones",
        "variable": "Indicador"
    }
)

fig.update_layout(
    paper_bgcolor="black",
    plot_bgcolor="black",
    font_color="white",
    legend_title_text='Indicadores ESG',
    height=500
)

# Exportar imagen
# fig.write_image("Presentación/Timeline-Sostenibilidad.png")

# Mostrar en navegador
fig.show() 
