import { Bell } from "lucide-react";
import { User } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className="h-24 flex items-center justify-between font-semibold px-8 shadow-xs">
      <div className="flex items-center gap-4">
        <div className="px-3 py-2 text-2xl bg-red-600 text-white rounded-sm">
          M
        </div>
        <div>
          <h1 className="font-semibold text-xl">manthan</h1>
          <p className="text-sm font-normal">Enquiry System</p>
        </div>
      </div>

      {/* ////////////////// */}

      <div className="flex justify-center items-center gap-8">
        <Bell size={24} className="cursor-pointer hover:text-gray-600 transition-colors"/>
        <div className="p-2 bg-red-600 rounded-full">
                <User size={24} className="cursor-pointer text-white"/>
            </div>
      </div>
    </nav>
  );
}
