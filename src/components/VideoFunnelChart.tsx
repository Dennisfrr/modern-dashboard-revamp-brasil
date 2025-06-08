
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const videoFunnelData = [
  { 
    label: 'Visualizações de 3s / ThruPlay', 
    percentage: 9.14, 
    value: 4634,
    cost: 'R$ 0,10',
    description: 'Visualizações iniciais'
  },
  { 
    label: '75% do Vídeo Visto', 
    percentage: 6.82, 
    value: 3458,
    cost: 'R$ 0,14',
    description: 'Engajamento médio'
  },
  { 
    label: '95% do Vídeo Visto', 
    percentage: 2.43, 
    value: 1233,
    cost: 'R$ 0,39',
    description: 'Alta retenção'
  }
]

export function VideoFunnelChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Card className="gradient-card border-border/50 overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-primary text-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Funil de Vídeo
        </CardTitle>
        <p className="text-sm text-muted-foreground/80 font-medium">Engajamento e Retenção</p>
      </CardHeader>
      <CardContent className="space-y-4 px-6 pb-6">
        <div className="space-y-4">
          {videoFunnelData.map((item, index) => (
            <div key={index} className="relative">
              {/* Barra de Progresso Horizontal */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Label da métrica */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-sm font-bold text-primary">{item.percentage}%</span>
                </div>

                {/* Barra de progresso */}
                <div className="relative bg-border/20 rounded-lg h-12 overflow-hidden">
                  <div 
                    className="h-full rounded-lg transition-all duration-500 group-hover:shadow-lg relative overflow-hidden"
                    style={{ 
                      width: `${(item.percentage / videoFunnelData[0].percentage) * 100}%`,
                      background: `linear-gradient(135deg, 
                        hsl(${14 + index * 10} 100% ${65 - index * 10}%) 0%, 
                        hsl(${14 + index * 10} 100% ${55 - index * 10}%) 100%)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 h-full flex items-center justify-between px-4 text-white">
                      <span className="text-sm font-medium">{item.description}</span>
                      <span className="text-sm font-bold">{item.value.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg p-4 shadow-lg z-20 min-w-[280px]">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Percentual de Retenção:</span>
                          <span className="font-medium text-primary">{item.percentage}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Número de Espectadores:</span>
                          <span className="font-medium">{item.value.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Custo por Visualização:</span>
                          <span className="font-medium text-primary">{item.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Indicador de queda entre etapas */}
              {index < videoFunnelData.length - 1 && (
                <div className="flex items-center mt-2 mb-2">
                  <div className="flex-1 h-px bg-border/30"></div>
                  <div className="px-3 py-1 bg-destructive/10 rounded-full text-xs font-medium text-destructive">
                    ↓ {((videoFunnelData[index].percentage - videoFunnelData[index + 1].percentage) / videoFunnelData[index].percentage * 100).toFixed(1)}% perda
                  </div>
                  <div className="flex-1 h-px bg-border/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground/60">
            <span>Taxa de Retenção Média</span>
            <span className="font-semibold text-primary">
              {(videoFunnelData.reduce((acc, item) => acc + item.percentage, 0) / videoFunnelData.length).toFixed(2)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
