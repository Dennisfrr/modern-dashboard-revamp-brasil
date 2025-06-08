
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const funnelData = [
  { 
    label: 'Impressões', 
    value: 50676, 
    percentage: 100, 
    cost: 'R$ 9,53',
    type: 'Mensagens',
    nextConversion: null
  },
  { 
    label: 'Cliques', 
    value: 250, 
    percentage: 80, 
    cost: 'R$ 2,74',
    type: 'CTR 0,49%',
    nextConversion: '69,2%'
  },
  { 
    label: 'Leads', 
    value: 173, 
    percentage: 60, 
    cost: 'R$ 2,74',
    type: 'Conversão',
    nextConversion: '0%'
  },
  { 
    label: 'Qualificados', 
    value: 0, 
    percentage: 40, 
    cost: 'R$ 0,00',
    type: 'Taxa Qualif.',
    nextConversion: '0%'
  },
  { 
    label: 'Vendas', 
    value: 0, 
    percentage: 20, 
    cost: 'R$ 0,00',
    type: 'Taxa Vendas',
    nextConversion: null
  }
]

export function FunnelChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Card className="gradient-card border-border/50 overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-primary text-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Funil Geral
        </CardTitle>
        <p className="text-sm text-muted-foreground/80 font-medium">Análise de Conversão</p>
      </CardHeader>
      <CardContent className="space-y-4 px-6 pb-6">
        <div className="space-y-6">
          {funnelData.map((item, index) => (
            <div key={index} className="relative">
              {/* Etapa do Funil */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
                  style={{ 
                    width: `${Math.max(item.percentage, 25)}%`,
                    minWidth: '200px',
                    background: `linear-gradient(135deg, 
                      hsl(${14 + index * 5} 100% ${57 - index * 8}%) 0%, 
                      hsl(${14 + index * 5} 100% ${47 - index * 8}%) 100%)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-lg">{item.label}</div>
                        <div className="text-sm opacity-90">{item.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl">{item.value.toLocaleString()}</div>
                        <div className="text-sm opacity-90">{item.cost}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <div className="absolute top-full left-4 mt-2 bg-card border border-border rounded-lg p-4 shadow-lg z-20 min-w-[250px]">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Valor Absoluto:</span>
                          <span className="font-medium">{item.value.toLocaleString()}</span>
                        </div>
                        {index > 0 && item.nextConversion && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Taxa de Conversão:</span>
                            <span className="font-medium text-primary">{funnelData[index].nextConversion}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Custo Acumulado:</span>
                          <span className="font-medium text-primary">{item.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Indicador de Taxa de Conversão */}
              {index < funnelData.length - 1 && funnelData[index + 1].nextConversion && (
                <div className="flex items-center mt-2 mb-2">
                  <div className="flex-1 h-px bg-border/30"></div>
                  <div className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                    ↓ {funnelData[index + 1].nextConversion} conversão
                  </div>
                  <div className="flex-1 h-px bg-border/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground/60">
            <span>Total de Conversões</span>
            <span className="font-semibold">173 leads gerados</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
