import React from "react";

export default function CardInfo() {
  return (
    <div className="text-secondary flex mx-4 text-xs justify-between mt-4">
      <div>
        <p>Desert King</p>
        <p>2345km away</p>
      </div>

      <div className="text-right">
        <p className="font-bold">1MBT per night</p>
        <p>available for 2weeks stay</p>
      </div>
    </div>
  );
}
