import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { RecentActivities } from "@/components/Dashboard/RecentActivities";
import { UpcomingCheckups } from "@/components/Dashboard/UpcomingCheckups";
import { 
  Users, 
  Stethoscope, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Activity
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total ASN Terdaftar"
            value="1,247"
            description="Pegawai aktif di sistem"
            icon={Users}
            trend={{ value: 5.2, label: "dari bulan lalu" }}
          />
          <StatsCard
            title="MCU Selesai (2024)"
            value="892"
            description="Total yang sudah MCU tahun ini"
            icon={Stethoscope}
            trend={{ value: 12.3, label: "dari tahun lalu" }}
            className="border-l-4 border-l-success"
          />
          <StatsCard
            title="Menunggu Jadwal"
            value="67"
            description="Peserta dalam antrian"
            icon={Clock}
            trend={{ value: -8.1, label: "dari minggu lalu" }}
            className="border-l-4 border-l-warning"
          />
          <StatsCard
            title="Tidak Eligible"
            value="156"
            description="Belum memenuhi syarat 3 tahun"
            icon={AlertTriangle}
            trend={{ value: 15.7, label: "dari bulan lalu" }}
            className="border-l-4 border-l-destructive"
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="MCU Hari Ini"
            value="12"
            description="Jadwal medical check up"
            icon={Calendar}
          />
          <StatsCard
            title="Tingkat Partisipasi"
            value="89.4%"
            description="Dari target tahunan"
            icon={TrendingUp}
            className="border-l-4 border-l-primary"
          />
          <StatsCard
            title="Ruang MCU Aktif"
            value="3"
            description="Dari 4 ruang tersedia"
            icon={Activity}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivities />
          <UpcomingCheckups />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
