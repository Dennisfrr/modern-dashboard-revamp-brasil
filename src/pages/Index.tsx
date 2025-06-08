
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { MetricCard } from "@/components/MetricCard"
import { DashboardLineChart } from "@/components/LineChart"
import { FunnelChart } from "@/components/FunnelChart"
import { DonutChart } from "@/components/DonutChart"
import { TrendingUp, DollarSign, Target, Eye, Users, BarChart3 } from "lucide-react"
import { VideoFunnelChart } from "@/components/VideoFunnelChart"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full gradient-subtle">
        <AppSidebar />
        <main className="flex-1">
          <DashboardHeader />
          
          <div className="p-8 space-y-8">
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MetricCard
                title="Investimento"
                value="R$ 474,46"
                icon={DollarSign}
                trend="12,5%"
                isPositiveTrend={false}
              />
              
              <MetricCard
                title="Resultado"
                value="173"
                subtitle="Mensagens"
                icon={Target}
                trend="39,4%"
                isPositiveTrend={true}
              />
              
              <MetricCard
                title="Custo/Resultado"
                value="2,74"
                subtitle="Custo/Mensagem"
                icon={BarChart3}
                trend="8,2%"
                isPositiveTrend={false}
              />
              
              <MetricCard
                title="Retorno"
                value="0"
                subtitle="Total purchase ROAS"
                icon={TrendingUp}
                trend="0%"
                isPositiveTrend={true}
              />
            </div>

            {/* Second Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MetricCard
                title="CRM"
                value="R$ 9,53"
                subtitle="CRM"
                icon={DollarSign}
                trend="5,7%"
                isPositiveTrend={true}
              />
              
              <MetricCard
                title="CTR"
                value="0,49%"
                subtitle="CTR"
                icon={Eye}
                trend="2,1%"
                isPositiveTrend={true}
              />
              
              <MetricCard
                title="Funil de Vídeo"
                value="9,14%"
                subtitle="VV 25%"
                icon={Users}
                trend="39,4%"
                isPositiveTrend={true}
              />
            </div>

            {/* Charts Section - Linha do Tempo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <DashboardLineChart />
            </div>

            {/* Charts Section - Funis e Demográficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FunnelChart />
              <DonutChart />
            </div>

            {/* Bottom Section - Funil de Vídeo e Visão Geral */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <VideoFunnelChart />
              
              <div className="gradient-card card-hover border-border/50 rounded-xl p-8">
                <h3 className="text-hierarchy-primary text-xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  Visão Geral
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/10 rounded-xl hover:bg-muted/20 transition-colors">
                    <span className="text-hierarchy-secondary font-medium">Campanhas Ativas</span>
                    <span className="font-bold text-primary text-lg">3</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/10 rounded-xl hover:bg-muted/20 transition-colors">
                    <span className="text-hierarchy-secondary font-medium">Impressões Totais</span>
                    <span className="font-bold text-foreground text-lg">{(50676).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/10 rounded-xl hover:bg-muted/20 transition-colors">
                    <span className="text-hierarchy-secondary font-medium">Taxa de Conversão Geral</span>
                    <span className="font-bold text-primary text-lg">0,34%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
