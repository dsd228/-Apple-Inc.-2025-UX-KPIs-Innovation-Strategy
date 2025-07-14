# RadarUX.py — Comparativa UX 2025
# Autor: David Sebastián Díaz
# Proyecto: Apple-Inc.-2025-UX-KPIs-Innovation-Strategy

import plotly.graph_objects as go

# Categorías evaluadas (ejes del radar)
criterios = ["Usabilidad", "Accesibilidad", "Branding", "Engagement", "Consistencia", "Novedad UX"]
criterios += [criterios[0]]  # Cerrar el gráfico

# Puntajes por empresa (escala de 0 a 10)
apple =     [9.5, 8.5, 10, 9.2, 9.6, 8.8]
samsung =   [8.3, 7.2, 8.5, 7.9, 8.0, 7.0]
google =    [8.8, 9.1, 8.7, 8.5, 8.3, 9.5]

# Cerrar los polígonos
apple += [apple[0]]
samsung += [samsung[0]]
google += [google[0]]

# Crear figura
fig = go.Figure()

fig.add_trace(go.Scatterpolar(
    r=apple,
    theta=criterios,
    fill='toself',
    name='Apple',
    line_color='limegreen'
))

fig.add_trace(go.Scatterpolar(
    r=samsung,
    theta=criterios,
    fill='toself',
    name='Samsung',
    line_color='royalblue'
))

fig.add_trace(go.Scatterpolar(
    r=google,
    theta=criterios,
    fill='toself',
    name='Google',
    line_color='orangered'
))

# Layout
fig.update_layout(
    title="🎯 Comparativa UX 2025: Apple vs Samsung vs Google",
    polar=dict(
        bgcolor="black",
        radialaxis=dict(visible=True, range=[0, 10], showline=False, gridcolor='gray')
    ),
    showlegend=True,
    font_color='white',
    paper_bgcolor='black',
    plot_bgcolor='black'
)

# Exportar como imagen (requiere kaleido)
# fig.write_image("Presentación/Radar-UX.png")

# Mostrar
fig.show()
