import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserDetails from "../components/UserDetails";
import OrderTable from "../components/OrderTable";
import History from "../components/History";
import Map from "@/components/Map";
import OrderDetails from "@/components/OrderDetails";

const Accept = () => {
  const historyItems = [
    { event: "Order Delivered", completed: false },
    { event: "On Delivery", completed: false },
    { event: "Payment Success", completed: false },
    { event: "Order Created", completed: false },
    { event: "Accept", timestamp: "2024-11-17 10:30 AM", completed: true },
  ];
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="w-full">
        <Header></Header>
        <OrderDetails name={"Accept"} />
        <div className="flex my-5">
          <UserDetails />
          <OrderTable />
        </div>

        <div className="flex my-10">
          <History historyItems={historyItems} />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Accept;
