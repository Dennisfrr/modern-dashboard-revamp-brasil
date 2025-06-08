
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Bell, User } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-6 border-b border-border bg-card">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <span className="text-muted-foreground">Local</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Select defaultValue="31-mar-5-abr">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="31-mar-5-abr">31 de mar. de 2025 - 5 de abr. de 20</SelectItem>
            <SelectItem value="last-week">Última semana</SelectItem>
            <SelectItem value="last-month">Último mês</SelectItem>
          </SelectContent>
        </Select>
        
        <Select defaultValue="campanha">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="campanha">Campanha</SelectItem>
            <SelectItem value="todas">Todas</SelectItem>
          </SelectContent>
        </Select>
        
        <Select defaultValue="conjunto">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="conjunto">Conjunto</SelectItem>
            <SelectItem value="individual">Individual</SelectItem>
          </SelectContent>
        </Select>
        
        <Select defaultValue="anuncio">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anuncio">Anúncio</SelectItem>
            <SelectItem value="todos">Todos</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" size="icon">
          <Bell className="w-4 h-4" />
        </Button>
        
        <Button variant="outline" size="icon">
          <User className="w-4 h-4" />
        </Button>
        
        <span className="text-sm text-muted-foreground">Conta</span>
      </div>
    </div>
  )
}
