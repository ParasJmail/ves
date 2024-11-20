import React from "react";
import map from '../assets/images/map.png'
import mapAvatar from '../assets/images/mapAvatar.png'
import delivery from '../assets/images/delivery.png'
import telephone from '../assets/images/telephone.png'


const Map = () => {
    const orders = [
        { sno: 1, name: "Sem Presentation", pages: 500, qty: 2, price: 1000 },
        { sno: 2, name: "Mid Exam", pages: 300, qty: 2, price: 600 },
        { sno: 3, name: "NMAT", pages: 500, qty: 2, price: 1000 },
        { sno: 4, name: "Java", pages: 400, qty: 2, price: 800 },
        { sno: 5, name: "Python", pages: 600, qty: 2, price: 1200 },
    ];

    return (
        <div className="w-2/3 shadow-md pb-7">
            <div className="">
                <img src={map} alt="alt" />
            </div>
            <div className="px-10 pt-4">
                <div>
                    Delivery By
                </div>
                <div className="mt-2 px-5 flex justify-between">
                    <div>
                        <img src={mapAvatar} alt="" />
                    </div>
                    <div className="flex w-2/3 justify-between ">
                        <button className="border flex justify-start py-3 align-middle items-center border-red-600 text-black px-10  rounded-lg">
                            <div className="flex w-full justify-between">
                                <div className="relative flex align-middle  items-center justify-center w-10 h-10 bg-indigo-200 rounded-xl cursor-pointer">
                                    <img src={telephone} alt="" />
                                </div>
                                <div className="flex flex-col">
                                    Telephone  <sub>9110712XXX </sub>
                                </div>
                            </div>

                        </button>            <button className="border flex justify-start py-3 align-middle items-center border-red-600 text-black px-10  rounded-lg">
                            <div className="flex w-full justify-between">
                                <div className="relative flex align-middle  items-center justify-center w-10 h-10 bg-indigo-200 rounded-xl cursor-pointer">
                                    <img src={delivery} alt="" />
                                </div>
                                <div className="flex flex-col">
                                    Delivery Time <br /> <sub>10:00 Am </sub>
                                </div>
                            </div>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
