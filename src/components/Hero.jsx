import { LayoutDashboard } from "lucide-react";
import { FileText } from "lucide-react";
import { UserPlus } from "lucide-react";
import { Database } from "lucide-react";
import { UsersRound } from "lucide-react";
import { UserRoundCog } from "lucide-react";
export default function Hero() {
    const asideDivStyle = "flex items-center gap-2 text-lg cursor-pointer hover:bg-blue-800 px-3 py-2 rounded-md w-full rounded transition-colors";
  return (
    <div className="h-[calc(100vh-6rem)] border bg-gray-100 flex">
      <aside className="border bg-blue-950 text-white h-full flex w-80 flex-col gap-5 items-start px-5 pt-10 rounded-r-xl">
        <div className={asideDivStyle}>
          <LayoutDashboard size={37} className=" p-2 rounded-lg" />
          <p>Dashboard</p>
        </div>
        <div className={asideDivStyle}>
            <FileText size={37} className=" p-2 rounded-lg" />
            <p>All Leads</p>
        </div>
        <div className={asideDivStyle}>
            <UserPlus size={37} className=" p-2 rounded-lg" />
            <p>Employee Master</p>
        </div>
        <div className={asideDivStyle}>
            <FileText size={37} className=" p-2 rounded-lg" />
            <p>Leads</p>
        </div>
        <div className={asideDivStyle}>
            <UserRoundCog size={37} className=" p-2 rounded-lg" />
            <p>Manage</p>
        </div>
        <div className={asideDivStyle}>
            <Database size={37} className=" p-2 rounded-lg" />
            <p>Lead Source</p>
        </div>
        <div className={asideDivStyle}>
            <UserRoundCog size={37} className=" p-2 rounded-lg" />
            <p>Lead Management</p>
        </div>
      </aside>
      <main>
        
      </main>
    </div>
  );
}
