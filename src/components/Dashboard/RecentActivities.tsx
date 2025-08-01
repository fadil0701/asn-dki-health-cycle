import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    participant: "Budi Santoso",
    nip: "196501011990031001",
    action: "Medical Check Up Selesai",
    date: "2024-01-15",
    status: "completed",
    next_eligible: "2027-01-15"
  },
  {
    id: 2,
    participant: "Siti Nurhaliza",
    nip: "197803152005022002",
    action: "Pendaftaran MCU",
    date: "2024-01-15",
    status: "pending",
    next_eligible: null
  },
  {
    id: 3,
    participant: "Ahmad Rahman",
    nip: "198012102010121003",
    action: "Ditolak - Belum Memenuhi Syarat",
    date: "2024-01-14",
    status: "rejected",
    next_eligible: "2025-05-20"
  },
  {
    id: 4,
    participant: "Maya Sari",
    nip: "199205201520032004",
    action: "MCU Terjadwal",
    date: "2024-01-16",
    status: "scheduled",
    next_eligible: null
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4 text-success" />;
    case "pending":
      return <Clock className="w-4 h-4 text-warning" />;
    case "rejected":
      return <XCircle className="w-4 h-4 text-destructive" />;
    case "scheduled":
      return <AlertCircle className="w-4 h-4 text-primary" />;
    default:
      return <Clock className="w-4 h-4 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Selesai</Badge>;
    case "pending":
      return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Menunggu</Badge>;
    case "rejected":
      return <Badge variant="destructive">Ditolak</Badge>;
    case "scheduled":
      return <Badge variant="default">Terjadwal</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

export const RecentActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
              {getStatusIcon(activity.status)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {activity.participant}
                  </p>
                  {getStatusBadge(activity.status)}
                </div>
                <p className="text-xs text-muted-foreground">
                  NIP: {activity.nip}
                </p>
                <p className="text-sm text-foreground mt-1">
                  {activity.action}
                </p>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>{activity.date}</span>
                  {activity.next_eligible && (
                    <span>Eligible lagi: {activity.next_eligible}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};