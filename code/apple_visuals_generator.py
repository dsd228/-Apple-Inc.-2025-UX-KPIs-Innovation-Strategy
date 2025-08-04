import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import os

# --- 0. Creación del directorio para guardar los gráficos ---
output_dir = "assets/visuals"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
    print(f"Directorio creado: '{output_dir}'")

# --- 1. Sankey Diagram - Revenue by Product Category ---
print("\n1. Generando Gráfico Sankey...")
sankey_data = {
    'source_labels': ['Total Revenue', 'Total Revenue', 'Total Revenue', 'Total Revenue', 'Total Revenue'],
    'target_labels': ['iPhone', 'Services', 'Wearables', 'Mac', 'iPad'],
    'values': [200, 68, 45, 40, 30]
}

# Definir nodos y enlaces para el gráfico Sankey
all_labels = ['Total Revenue'] + sankey_data['target_labels']
source_indices = [all_labels.index(src) for src in sankey_data['source_labels']]
target_indices = [all_labels.index(tgt) for tgt in sankey_data['target_labels']]

fig_sankey = go.Figure(data=[go.Sankey(
    node=dict(
        pad=15,
        thickness=20,
        line=dict(color="black", width=0.5),
        label=all_labels,
        color=["#5f5f5f", "#007aff", "#34c759", "#ffcc00", "#a2a2a2", "#e5e5e5"] # Colores de la paleta Apple
    ),
    link=dict(
        source=source_indices,
        target=target_indices,
        value=sankey_data['values']
    ))])

fig_sankey.update_layout(
    title_text="<b>Apple FY2025 Revenue Breakdown by Product Category (in B USD)</b>",
    font_family="Helvetica, Arial, sans-serif",
    font_size=12
)

# Exportar a PNG
sankey_path = os.path.join(output_dir, "kpi_sankey_revenue.png")
fig_sankey.write_image(sankey_path, width=800, height=500, scale=2)
print(f"Gráfico Sankey guardado en: '{sankey_path}'")
# fig_sankey.show() # Descomentar para ver en Jupyter

# --- 2. Radar Chart - UX Benchmark ---
print("\n2. Generando Gráfico de Radar...")
categories = ['Usability', 'Accessibility', 'Branding', 'Engagement']
categories_loop = categories + [categories[0]] # Cerrar el radar

fig_radar = go.Figure()

# Apple
fig_radar.add_trace(go.Scatterpolar(
    r=[9, 8.5, 9.5, 9, 9],
    theta=categories_loop,
    fill='toself',
    name='Apple',
    line=dict(color='#007aff')
))

# Samsung
fig_radar.add_trace(go.Scatterpolar(
    r=[8, 7.5, 8, 8, 8],
    theta=categories_loop,
    fill='toself',
    name='Samsung',
    line=dict(color='#34c759')
))

# Google
fig_radar.add_trace(go.Scatterpolar(
    r=[7.5, 8, 8.5, 8.5, 7.5],
    theta=categories_loop,
    fill='toself',
    name='Google',
    line=dict(color='#ffcc00')
))

fig_radar.update_layout(
    title_text="<b>UX Benchmark: Apple vs. Competitors</b>",
    polar=dict(
        radialaxis=dict(visible=True, range=[0, 10])
    ),
    legend=dict(yanchor="top", y=1.15, xanchor="center", x=0.5, orientation="h"),
    font_family="Helvetica, Arial, sans-serif"
)

# Exportar a PNG
radar_path = os.path.join(output_dir, "ux_radar_benchmark.png")
fig_radar.write_image(radar_path, width=700, height=500, scale=2)
print(f"Gráfico de Radar guardado en: '{radar_path}'")
# fig_radar.show()

# --- 3. Treemap - Global Sales by Region ---
print("\n3. Generando Treemap de Ventas Globales...")
regions_data = {
    'region': ['Americas', 'Europe', 'Greater China', 'Japan', 'Rest of Asia Pacific'],
    'sales_percentage': [40, 25, 18, 7, 10]
}
df_regions = pd.DataFrame(regions_data)

fig_treemap = px.treemap(df_regions,
    path=[px.Constant("Global Sales"), 'region'],
    values='sales_percentage',
    color='sales_percentage',
    color_continuous_scale='Blues',
    custom_data=['sales_percentage']
)

fig_treemap.update_traces(
    textinfo="label+value%",
    textfont=dict(size=16)
)
fig_treemap.update_layout(
    title_text="<b>Global Sales Distribution by Region FY2025 (%)</b>",
    font_family="Helvetica, Arial, sans-serif"
)

# Exportar a PNG
treemap_path = os.path.join(output_dir, "global_sales_treemap.png")
fig_treemap.write_image(treemap_path, width=800, height=450, scale=2)
print(f"Treemap guardado en: '{treemap_path}'")
# fig_treemap.show()

# --- 4. Sustainability Timeline ---
print("\n4. Generando Línea de Tiempo de Sostenibilidad...")
timeline_data = {
    'year': [2015, 2020, 2022, 2024, 2030],
    'milestone': [
        'Emission Baseline Set',
        '40% Emission Reduction',
        '50% Emission Reduction',
        '60% Emission Reduction',
        'Goal: Carbon Neutral'
    ],
    'level': [1, -1, 1, -1, 1], # Para alternar arriba/abajo
    'color': ['gray', 'lightblue', 'dodgerblue', 'blue', 'green']
}

fig_timeline, ax = plt.subplots(figsize=(12, 6), constrained_layout=True)
ax.set_ylim(-2, 2)
ax.set_xlim(2014, 2031)

# Línea central
ax.axhline(0, xmin=0.05, xmax=0.95, c='grey', zorder=1)

# Puntos y etiquetas
for i, row in pd.DataFrame(timeline_data).iterrows():
    ax.scatter(row['year'], 0, s=120, c=row['color'], zorder=2)
    ax.text(row['year'], row['level'] * 0.2, f"{row['year']}\n{row['milestone']}",
            ha='center', va='center' if row['level'] > 0 else 'center',
            fontdict={'family': 'Helvetica', 'size': 10},
            bbox=dict(boxstyle="round,pad=0.3", fc='white', ec=row['color'], lw=1))

# Ocultar ejes y spines
ax.get_yaxis().set_visible(False)
for spine in ["left", "top", "right", "bottom"]:
    ax.spines[spine].set_visible(False)

ax.set_xticks([])
ax.set_title("Apple's Path to Carbon Neutrality by 2030", fontdict={'size': 16, 'weight': 'bold', 'family': 'Helvetica'})
plt.tight_layout(pad=1.0)

# Exportar a PNG
timeline_path = os.path.join(output_dir, "sustainability_timeline.png")
plt.savefig(timeline_path, dpi=300, bbox_inches='tight')
print(f"Línea de Tiempo guardada en: '{timeline_path}'")
# plt.show()


# --- 5. Banner Horizontal para GitHub ---
print("\n5. Generando Banner para GitHub...")
try:
    # Usar una fuente predeterminada del sistema o descargar una como 'Roboto-Regular.ttf'
    try:
        font_main = ImageFont.truetype("arial.ttf", 36)
        font_sub = ImageFont.truetype("arial.ttf", 20)
    except IOError:
        print("Fuente Arial no encontrada, usando fuente por defecto.")
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    width, height = 1280, 250
    bg_color = (245, 245, 245) # Gris claro
    text_color = (30, 30, 30)

    img = Image.new('RGB', (width, height), color=bg_color)
    d = ImageDraw.Draw(img)

    # Texto principal
    main_text = "Apple Inc. FY2025"
    main_text_width, main_text_height = d.textbbox((0, 0), main_text, font=font_main)[2:]
    d.text(((width - main_text_width) / 2, 80), main_text, font=font_main, fill=text_color)

    # Subtexto
    sub_text = "UX · KPIs · Innovation Strategy · Sustainability"
    sub_text_width, sub_text_height = d.textbbox((0, 0), sub_text, font=font_sub)[2:]
    d.text(((width - sub_text_width) / 2, 140), sub_text, font=font_sub, fill=(100, 100, 100))

    # Guardar imagen
    banner_path = os.path.join(output_dir, "github_banner.png")
    img.save(banner_path)
    print(f"Banner guardado en: '{banner_path}'")

except Exception as e:
    print(f"Error al crear el banner: {e}. Pillow y una fuente TTF son necesarios.")

print("\n✅ Proceso completado. Todos los gráficos han sido generados y guardados.")
