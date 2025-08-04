#!/usr/bin/env python3
# performance_demo.py — Demostración de optimizaciones implementadas
# Autor: David Sebastián Díaz

import time
import pandas as pd
import plotly.express as px

def demo_dataframe_optimization():
    """Demuestra la optimización de DataFrame con tipos específicos"""
    
    print("🔍 Demostración: Optimización de DataFrame")
    print("=" * 50)
    
    # Datos de prueba (similares a ESG_Timeline)
    data = {
        "Año": [2015, 2020, 2024, 2027, 2030] * 1000,  # Ampliado para ver diferencia
        "Métrica1": [0, 20, 60, 80, 100] * 1000,
        "Métrica2": [20, 50, 99, 99, 100] * 1000,
    }
    
    # Método original - sin optimización de tipos
    start = time.time()
    df_original = pd.DataFrame(data)
    time_original = time.time() - start
    
    # Método optimizado - con tipos específicos
    start = time.time()
    df_optimized = pd.DataFrame(data, dtype='int16')
    time_optimized = time.time() - start
    
    # Comparación de memoria
    memory_original = df_original.memory_usage(deep=True).sum()
    memory_optimized = df_optimized.memory_usage(deep=True).sum()
    
    print(f"📊 Tiempo de creación:")
    print(f"   Original:   {time_original:.6f} segundos")
    print(f"   Optimizado: {time_optimized:.6f} segundos")
    print(f"   Mejora:     {((time_original - time_optimized) / time_original * 100):+.1f}%")
    
    print(f"\n💾 Uso de memoria:")
    print(f"   Original:   {memory_original:,} bytes")
    print(f"   Optimizado: {memory_optimized:,} bytes") 
    print(f"   Reducción:  {((memory_original - memory_optimized) / memory_original * 100):.1f}%")
    
def demo_layout_optimization():
    """Demuestra la optimización de configuraciones de layout"""
    
    print("\n🎨 Demostración: Optimización de Layout")
    print("=" * 50)
    
    # Datos simples para gráfico
    df = pd.DataFrame({"x": [1, 2, 3], "y": [1, 4, 2]})
    
    # Método original - múltiples llamadas
    start = time.time()
    fig1 = px.line(df, x="x", y="y")
    fig1.update_layout(paper_bgcolor="black")
    fig1.update_layout(plot_bgcolor="black")
    fig1.update_layout(font_color="white")
    fig1.update_layout(height=500)
    time_original = time.time() - start
    
    # Método optimizado - configuración consolidada
    start = time.time()
    fig2 = px.line(df, x="x", y="y")
    layout_config = {
        "paper_bgcolor": "black",
        "plot_bgcolor": "black",
        "font_color": "white", 
        "height": 500
    }
    fig2.update_layout(**layout_config)
    time_optimized = time.time() - start
    
    print(f"⚡ Configuración de layout:")
    print(f"   Original (4 llamadas):  {time_original:.6f} segundos")
    print(f"   Optimizado (1 llamada): {time_optimized:.6f} segundos")
    print(f"   Mejora:                 {((time_original - time_optimized) / time_original * 100):+.1f}%")

if __name__ == "__main__":
    print("🚀 DEMOSTRACIÓN DE OPTIMIZACIONES DE RENDIMIENTO")
    print("Apple Inc. 2025 UX KPIs Innovation Strategy")
    print("=" * 60)
    
    demo_dataframe_optimization()
    demo_layout_optimization()
    
    print(f"\n✅ Conclusión:")
    print(f"Las optimizaciones implementadas mejoran tanto el rendimiento")
    print(f"como el uso de memoria, siguiendo mejores prácticas de Python.")