import React, { useState } from "react";
import { GrowthIcon, MultiUserIcon, RupeeIcon, ShopIcon, UserIcon } from "../../assets/icons";
import Header from "../../headers";
import "./style.css";

const Dashboard = () => {
  const [user, setUser] = useState(false);
  return (
    <div>
      <Header />
      {user ? (
        <div>
          <div className="mobileView">
            <div className="">
              <div className="bg-primary md:bg-white flex items-center justify-center">
                <div className="w-full mx-4">
                  <h1 className="text-xl md:text-3xl font-bold mt-0 pb-6">
                    Dashboard
                  </h1>
                </div>
              </div>

              <div className="mt-4 mx-4">
                <h2 className=" font-bold text-xl">List of shops</h2>

                <div className="mt-2">
                  <div
                    className="px-4 py-1 grid grid-cols-3 rounded-md"
                    style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="w-8 h-8"
                    />
                    <div>
                      <h3 className="font-bold text-text1">Shop Name</h3>
                    </div>

                    <div>
                      <h3 className="font-bold text-text1">Shop Name</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="desktopView w-full" style={{ maxWidth: "1400px" }}>
              <div className="">
                <div className="md:bg-white flex items-center justify-center">
                  <div className="w-full mx-4">
                    <h1 className="text-xl md:text-3xl font-bold mt-0 pb-6">Dashboard</h1>
                  </div>
                </div>

                <div className="mt-4 mx-4">
                  <h2 className=" font-bold text-xl">List of shops</h2>

                  <div className="mt-2">
                    <div className="px-4 py-1 grid grid-cols-3 rounded-md" style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                      <img
                        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt=""
                        className="w-8 h-8"
                      />
                      <div>
                        <h3 className="font-bold text-text1">Shop Name</h3>
                      </div>

                      <div>
                        <h3 className="font-bold text-text1">Shop Name</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mobileView">
            <div className="">
              <div className="bg-primary md:bg-white flex items-center justify-center">
                <div className="w-full mx-4">
                  <h1 className="text-xl md:text-3xl font-bold mt-0 pb-6">
                    Dashboard
                  </h1>
                </div>
              </div>

              <div className=" flex items-center justify-center">
                <div className="px-6">
                  <div
                    className="flex items-center justify-between gap-5 -mt-5 bg-white p-2 rounded-md"
                    style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                  >
                    <GrowthIcon />
                    <p className="text-xs">Retention score</p>
                    <p className="text-xl font-bold text-primary">25%</p>
                  </div>
                </div>
              </div>

              <div className="px-4 mt-4 grid grid-cols-2 gap-4">
                <div
                  className="p-4 text-center rounded-md "
                  style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                >
                  <div className="flex justify-center items-center">
                    <MultiUserIcon />
                  </div>
                  <p className="text-xs">Total customers</p>
                  <p className="text-xl text-primary font-bold">25</p>
                </div>
                <div
                  className="p-4 text-center rounded-md "
                  style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                >
                  <div className="flex justify-center items-center mb-2">
                    <RupeeIcon />
                  </div>
                  <p className="text-xs">Total transaction</p>
                  <p className="text-xl text-primary font-bold">25</p>
                </div>
                <div
                  className="p-4 text-center rounded-md "
                  style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                >
                  <div className="flex justify-center items-center">
                    <UserIcon />
                  </div>
                  <p className="text-xs">Total customers</p>
                  <p className="text-xl text-primary font-bold">25</p>
                </div>
                <div
                  className="p-4 text-center rounded-md "
                  style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                >
                  <div className="flex justify-center items-center">
                    <ShopIcon />
                  </div>
                  <p className="text-xs">Total customers</p>
                  <p className="text-xl text-primary font-bold">25</p>
                </div>
              </div>

              <div className="mt-4 mx-4">
                <h2 className=" font-bold text-xl">Recent Transactions</h2>

                <div className="mt-2">
                  <div
                    className="px-4 py-1 rounded-md grid grid-cols-2"
                    style={{ boxShadow: "1px 1px 10px #cecbcb" }}
                  >
                    <div>
                      <p className="text-text2 text-xs">Name</p>
                      <p className="font-semibold text-sm">Tirth Patel</p>
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Amount</p>
                      <p className="font-semibold text-sm">25 /-</p>
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Upi id</p>
                      <p
                        className="font-semibold text-sm overflow-hidden"
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        12334823423423
                      </p>
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Time</p>
                      <p className="font-semibold text-sm">25th August, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="desktopView w-full" style={{ maxWidth: "1400px" }}>
              <div className="">
                <div className="md:bg-white flex items-center justify-center">
                  <div className="w-full mx-4">
                    <h1 className="text-xl md:text-3xl font-bold mt-0 pb-6">Dashboard</h1>
                  </div>
                </div>

                <div className=" flex items-center justify-center">
                  <div className="px-6">
                    <div className="flex items-center justify-between gap-5 -mt-5 bg-white p-2 rounded-md" style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                      <GrowthIcon />
                      <p className="text-xs">Customer retention score</p>
                      <p className="text-lg font-bold text-primary">25%</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 mt-4 grid grid-cols-4 gap-4">
                  <div className="p-4 text-center rounded-md " style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                    <div className="flex justify-center items-center">
                      <MultiUserIcon />
                    </div>
                    <p className="text-xs">Total customers</p>
                    <p className="text-xl text-primary font-bold">25</p>
                  </div>
                  <div className="p-4 text-center rounded-md " style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                    <div className="flex justify-center items-center mb-2">
                      <RupeeIcon />
                    </div>
                    <p className="text-xs">Total transaction</p>
                    <p className="text-xl text-primary font-bold">25</p>
                  </div>
                  <div className="p-4 text-center rounded-md " style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                    <div className="flex justify-center items-center">
                      <UserIcon />
                    </div>
                    <p className="text-xs">Total customers</p>
                    <p className="text-xl text-primary font-bold">25</p>
                  </div>
                  <div className="p-4 text-center rounded-md " style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                    <div className="flex justify-center items-center">
                      <ShopIcon />
                    </div>
                    <p className="text-xs">Total customers</p>
                    <p className="text-xl text-primary font-bold">25</p>
                  </div>
                </div>

                <div className="mt-4 mx-4">
                  <h2 className=" font-bold text-xl">Recent Transactions</h2>

                  <div className="grid grid-cols-4 text-center mt-2">
                    <p>Name</p>
                    <p>Upi id</p>
                    <p>Amount</p>
                    <p>Date</p>
                  </div>

                  <div className="mt-2">
                    <div className="px-4 py-2 rounded-md grid grid-cols-4 text-center" style={{ boxShadow: "1px 1px 10px #cecbcb" }}>
                      <p className="font-semibold text-xs">Tirth Patel</p>
                      <p className=" text-xs">13949371837839742</p>
                      <p className="text-xs font-bold">45 /-</p>
                      <p className="text-xs">23 august, 2022 </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
