import { 
  Activity, 
  BarChart3, 
  Calendar, 
  FileText, 
  Home, 
  Settings, 
  Users,
  Stethoscope
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
    active: true
  },
  {
    title: "Data Peserta",
    icon: Users,
    href: "/peserta"
  },
  {
    title: "Medical Check Up",
    icon: Stethoscope,
    href: "/medical-checkup"
  },
  {
    title: "Jadwal MCU",
    icon: Calendar,
    href: "/jadwal"
  },
  {
    title: "Laporan",
    icon: FileText,
    href: "/laporan"
  },
  {
    title: "Statistik",
    icon: BarChart3,
    href: "/statistik"
  },
  {
    title: "Monitoring",
    icon: Activity,
    href: "/monitoring"
  },
  {
    title: "Pengaturan",
    icon: Settings,
    href: "/settings"
  }
];

export const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border shadow-lg lg:block hidden">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center border-b border-border px-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-foreground">MCU Monitor</h1>
              <p className="text-xs text-muted-foreground">Pemprov DKI Jakarta</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4">
          <div className="text-xs text-muted-foreground">
            <p>Pusat Pelayanan Kesehatan Pegawai</p>
            <p>Provinsi DKI Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
};