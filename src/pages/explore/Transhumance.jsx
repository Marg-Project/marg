import React from "react";
import Basic from "/src/components/Basic";


const Transhumance = () => {
  const arr = [
    { link: "/explore/historicroutes", name: "Historic Roads / Routes" },
    { link: "/explore/culturalroutes", name: "Cultural Routes" },
    { link: "/explore/railwayroutes", name: "Railway Routes" },
    { link: "/explore/culturalelements", name: "Cultural Elements" },
    { link: "/explore/Transhumance", name: "Transhumance" },
  ];
  return (
    <div className="font-['Open_Sans'] flex flex-wrap gap-12 items-center justify-center place-content-center">
      <Basic title="EXPLORE" numbers={arr}></Basic>
      <div className="mb-12 w-[85%] mx-auto">
        coming soon!
        
      </div>
    </div>
  );
};
export default Transhumance;
