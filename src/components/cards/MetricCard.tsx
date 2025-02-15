import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

interface MetricCardProps {
  title: string;
  value: string | number;
  children?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, children }) => {
  return (
    <div className="flex flex-col gap-4  bg-white rounded-lg p-6 shadow-lg h-[150px] w-[220px]">
      <div className="flex justify-between text-custom-gray">
        <p className="text-xs">{title}</p>
        <FaEllipsisVertical className="size-3" />
      </div>
      <p className="font-semibold text-lg">{value}</p>
      <div className="flex items-end min-h-[20px]">
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
};

export default MetricCard;
