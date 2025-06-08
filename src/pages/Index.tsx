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
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <DashboardHeader />
          
          <div className="p-6 space-y-6">
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Investimento"
                value="R$ 474,46"
                icon={DollarSign}
                className="bg-gradient-to-br from-card to-card/80"
              />
              
              <MetricCard
                title="Resultado"
                value="173"
                subtitle="Mensagens"
                icon={Target}
                className="bg-gradient-to-br from-card to-card/80"
              />
              
              <MetricCard
                title="Custo/Resultado"
                value="2,74"
                subtitle="Custo/Mensagem"
                icon={BarChart3}
                className="bg-gradient-to-br from-card to-card/80"
              />
              
              <MetricCard
                title="Retorno"
                value="0"
                subtitle="Total purchase ROAS"
                icon={TrendingUp}
                className="bg-gradient-to-br from-card to-card/80"
              />
            </div>

            {/* Second Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="CRM"
                value="R$ 9,53"
                subtitle="CRM"
                icon={DollarSign}
                className="bg-gradient-to-br from-card to-card/80"
              />
              
              <MetricCard
                title="CTR"
                value="0,49%"
                subtitle="CTR"
                icon={Eye}
                className="bg-gradient-to-br from-card to-card/80"
              />
              
              <MetricCard
                title="Funil de Vídeo"
                value="9,14%"
                subtitle="VV 25%"
                icon={Users}
                trend="39,4%"
                className="bg-gradient-to-br from-card to-card/80"
              />
            </div>

            {/* Charts Section - Linha do Tempo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <DashboardLineChart />
            </div>

            {/* Charts Section - Funis e Demográficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FunnelChart />
              <DonutChart />
            </div>

            {/* Bottom Section - Funil de Vídeo e Visão Geral */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <VideoFunnelChart />
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Visão Geral
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-muted-foreground">Campanhas Ativas</span>
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-muted-foreground">Impressões Totais</span>
                    <span className="font-bold">{(50676).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                    <span className="text-muted-foreground">Taxa de Conversão Geral</span>
                    <span className="font-bold text-primary">0,34%</span>
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
