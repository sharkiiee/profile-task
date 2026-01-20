import { LayoutDashboard } from "lucide-react";
import { FileText } from "lucide-react";
import { UserPlus } from "lucide-react";
import { Database } from "lucide-react";
import { UserRoundCog } from "lucide-react";
import { Pencil } from "lucide-react";
import { User } from "lucide-react";
export default function Hero() {
  const asideDivStyle =
    "flex items-center gap-2 text-lg cursor-pointer hover:bg-blue-800 px-3 py-2 rounded-md w-full rounded transition-colors";
  return (
    <div className="h-[calc(100vh-6rem)] bg-gray-100 flex">
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
      <main className="w-full">
        <div className="flex justify-between items-center px-11 py-6">
          <div>
            <h1 className="font-bold text-2xl">Profile Information</h1>
            <p className="text-sm text text-stone-500">
              View and manage read-only profile details.
            </p>
          </div>
          <button className="flex bg-red-500 text-white px-3  py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors mt-4 items-center">
            <Pencil size={20} className="mr-2" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10 mx-10">
          <div className="bg-white">
            <div className="flex px-6 py-2 items-center ">
              <User
                size={40}
                className="mb-4 text-stone-600 border-b-2 py-2 border-red-400"
              />
              <h2 className="font-semibold text-lg mb-4 ">User Details</h2>
            </div>
            <div className="flex items-center gap-2 mx-10 ">
              <h1 className="text-xl font-bold">Vijay Rajput</h1>
              <div className="bg-red-100 text-red-500 px-3 py-1 w-fit text-sm font-bold rounded">
                CRE
              </div>
              <div className="bg-green-100 text-green-500 px-3 py-1 w-fit text-sm font-bold rounded">
                ACTIVE
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mx-10 my-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">LIST ID</h4>
                  <p className="text-sm font-semibold">10024</p>
                </div>

                <div>
                  <h4 className="text-stone-400 text-xs">USER ID</h4>
                  <p className="text-sm font-semibold">vijay_123</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mx-10 my-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">EMAIL</h4>
                  <p className="text-sm font-semibold">vijay@example.com</p>
                </div>

                <div>
                  <h4 className="text-stone-400 text-xs">MOBILE</h4>
                  <p className="text-sm font-semibold">1234567890</p>
                </div>
              </div>
            </div>
          </div>
          {/* Account and Location */}
          <div className="bg-white">
            <div className="flex px-6 py-2 items-center ">
              <User
                size={40}
                className="mb-4 text-stone-600 border-b-2 py-2 border-red-400"
              />
              <h2 className="font-semibold text-lg mb-4 ">
                Account & Location
              </h2>
            </div>
            <div className="mx-10 ">
              <h4 className="text-stone-400 text-xs">ADDRESS</h4>
              <p className="text-sm font-semibold">1204, Delhi</p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mx-10 my-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">CITY</h4>
                  <p className="text-sm font-semibold">Delhi (NCT)</p>
                </div>

                <div>
                  <h4 className="text-stone-400 text-xs">STATE</h4>
                  <p className="text-sm font-semibold">Delhi</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mx-10 my-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">PINCODE</h4>
                  <p className="text-sm font-semibold">110001</p>
                </div>
              </div>
            </div>
          </div>
          {/* Organization Details */}
          <div className="bg-white">
            <div className="flex px-6 py-2 items-center ">
              <User
                size={40}
                className="mb-4 text-stone-600 border-b-2 py-2 border-red-400"
              />
              <h2 className="font-semibold text-lg mb-4 ">
                Organization Details
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mx-10 mb-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">DEALER CODE</h4>
                  <p className="text-sm font-semibold">DL-001-CP</p>
                </div>

                <div>
                  <h4 className="text-stone-400 text-xs">DEPARTMENT</h4>
                  <p className="text-sm font-semibold">IT department</p>
                </div>
              </div>
            </div>
          </div>
          {/* Account Validity */}
          <div className="bg-white">
            <div className="flex px-6 py-2 items-center ">
              <User
                size={40}
                className="mb-4 text-stone-600 border-b-2 py-2 border-red-400"
              />
              <h2 className="font-semibold text-lg mb-4 ">
                Account Validity
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4 mx-10 mb-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">EXPIRY DATE</h4>
                  <p className="text-sm font-semibold"> Lifetime</p>
                </div>

                <div>
                  <h4 className="text-stone-400 text-xs">CDATE</h4>
                  <p className="text-sm font-semibold">12 Jan 2024</p>
                </div>
                <div>
                  <h4 className="text-stone-400 text-xs">CTIME</h4>
                  <p className="text-sm font-semibold">10:30 AM</p>
                </div>
              </div>
            </div>
          </div>
          {/* Api Call and config */}
          <div className="bg-white">
            <div className="flex px-6 py-2 items-center ">
              <User
                size={40}
                className="mb-4 text-stone-600 border-b-2 py-2 border-red-400"
              />
              <h2 className="font-semibold text-lg mb-4 ">
                API Call & Configuration
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4 mx-10 mb-4 ">
                <div>
                  <h4 className="text-stone-400 text-xs">API URL</h4>
                  <p className="text-sm font-semibold">https://www.fakeurl.com</p>
                </div>

                <div>
                  <h4 className="text-stone-400 text-xs">CALL USER ID</h4>
                  <p className="text-sm font-semibold">UID-883920</p>
                </div>
                <div>
                  <h4 className="text-stone-400 text-xs">API KEY</h4>
                  <p className="text-sm font-semibold">sk_live_1234567890</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
