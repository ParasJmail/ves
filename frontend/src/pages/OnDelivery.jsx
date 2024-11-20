import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserDetails from "../components/UserDetails";
import OrderTable from "../components/OrderTable";
import History from "../components/History";
import Map from "@/components/Map";
import OrderDetails from "@/components/OrderDetails";

const OnDelivery = () => {
  const historyItems = [
    { event: "Order Delivered", completed: false },
    { event: "On Delivery", completed: true },
    { event: "Payment Success", completed: true },
    { event: "Order Created", completed: true },
    { event: "Accept", timestamp: "2024-11-17 10:30 AM", completed: true },
  ];
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="w-full">
        <Header />
        <OrderDetails name={"On Delivery"} />
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

export default OnDelivery;
