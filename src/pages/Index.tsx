
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { MetricCard } from "@/components/MetricCard"
import { DashboardLineChart } from "@/components/LineChart"
import { FunnelChart } from "@/components/FunnelChart"
import { DonutChart } from "@/components/DonutChart"
import { TrendingUp, DollarSign, Target, Eye, Users, BarChart3 } from "lucide-react"

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

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <DashboardLineChart />
              <FunnelChart />
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Visão Geral</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Campanha</span>
                    <span>Leads</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Impressões</span>
                    <span>Leads</span>
                  </div>
                </div>
              </div>
              
              <DonutChart />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
