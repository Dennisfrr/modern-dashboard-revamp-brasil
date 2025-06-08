
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
    <Card className="gradient-card card-hover border-border/50 overflow-hidden">
      <CardHeader className="pb-6 px-8 pt-8">
        <CardTitle className="text-hierarchy-primary text-xl flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          Funil Geral
        </CardTitle>
        <p className="text-sm text-hierarchy-secondary font-medium mt-2">Análise de Conversão</p>
      </CardHeader>
      <CardContent className="space-y-6 px-8 pb-8">
        <div className="space-y-8">
          {funnelData.map((item, index) => (
            <div key={index} className="relative">
              {/* Etapa do Funil */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
                  style={{ 
                    width: `${Math.max(item.percentage, 30)}%`,
                    minWidth: '280px',
                    background: `linear-gradient(135deg, 
                      hsl(${20 + index * 8} 100% ${60 - index * 6}%) 0%, 
                      hsl(${20 + index * 8} 100% ${50 - index * 6}%) 100%)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="font-bold text-lg">{item.label}</div>
                        <div className="text-sm opacity-90 font-medium">{item.type}</div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="font-bold text-xl">{item.value.toLocaleString()}</div>
                        <div className="text-sm opacity-90 font-medium">{item.cost}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <div className="absolute top-full left-4 mt-4 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-5 shadow-2xl z-20 min-w-[300px]">
                    <div className="space-y-3">
                      <p className="font-semibold text-hierarchy-primary text-lg">{item.label}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-hierarchy-secondary">Valor Absoluto:</span>
                          <span className="font-semibold text-foreground">{item.value.toLocaleString()}</span>
                        </div>
                        {index > 0 && item.nextConversion && (
                          <div className="flex justify-between">
                            <span className="text-hierarchy-secondary">Taxa de Conversão:</span>
                            <span className="font-semibold text-primary">{funnelData[index].nextConversion}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-hierarchy-secondary">Custo Acumulado:</span>
                          <span className="font-semibold text-primary">{item.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Indicador de Taxa de Conversão */}
              {index < funnelData.length - 1 && funnelData[index + 1].nextConversion && (
                <div className="flex items-center mt-4 mb-4">
                  <div className="flex-1 h-px bg-border/50"></div>
                  <div className="px-4 py-2 bg-primary/15 rounded-full text-xs font-semibold text-primary">
                    ↓ {funnelData[index + 1].nextConversion} conversão
                  </div>
                  <div className="flex-1 h-px bg-border/50"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex items-center justify-between text-sm text-hierarchy-secondary">
            <span>Total de Conversões</span>
            <span className="font-semibold text-primary">173 leads gerados</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
