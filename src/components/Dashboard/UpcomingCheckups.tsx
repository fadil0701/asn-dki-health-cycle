import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const upcomingCheckups = [
  {
    id: 1,
    participant: "Siti Nurhaliza",
    nip: "197803152005022002",
    date: "2024-01-16",
    time: "08:00",
    location: "Ruang MCU Lt. 2",
    type: "MCU Rutin"
  },
  {
    id: 2,
    participant: "Dedi Kurniawan",
    nip: "198506102012121001",
    date: "2024-01-16",
    time: "09:00",
    location: "Ruang MCU Lt. 2",
    type: "MCU Rutin"
  },
  {
    id: 3,
    participant: "Rina Wijaya",
    nip: "199108152018032003",
    date: "2024-01-17",
    time: "08:30",
    location: "Ruang MCU Lt. 3",
    type: "MCU Khusus"
  },
  {
    id: 4,
    participant: "Agus Pratama",
    nip: "197512201998031002",
    date: "2024-01-17",
    time: "10:00",
    location: "Ruang MCU Lt. 2",
    type: "MCU Rutin"
  }
];

export const UpcomingCheckups = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Jadwal MCU Mendatang</CardTitle>
        <Button variant="outline" size="sm">
          Lihat Semua
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingCheckups.map((checkup) => (
            <div key={checkup.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground">
                    {checkup.participant}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {checkup.type}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  NIP: {checkup.nip}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{checkup.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{checkup.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{checkup.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};