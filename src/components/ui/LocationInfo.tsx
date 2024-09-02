import React from "react";

interface LocationInfoProps {
  text: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ text }) => {
  return (
    <div className="w-full flex justify-end items-center">
      <div className="flex justify-end items-center gap-3 w-fit h-fit py-4 px-4 rounded-full bg-white bg-opacity-50">
        <img
          src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
          alt="Location"
          className="w-4 h-6 md:w-6 md:h-8"
        />
        <p className="text-end text-md italic">{text}</p>
      </div>
    </div>
  );
};

export default LocationInfo;
