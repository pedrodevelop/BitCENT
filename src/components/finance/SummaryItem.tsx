import { FormatMoney } from "@/logic/utils";
import React from "react";

export interface ISummaryItemProps {
  title: string;
  value: number;
  icon: any;
  classNameValue?: string;
  classNameIcon?: string;
}

const SummaryItem: React.FC<ISummaryItemProps> = ({
  title,
  value,
  icon,
  classNameIcon,
  classNameValue,
}) => {
  return (
    <div
      className={`
            relative flex flex-col bg-black
            pt-4 pb-3 px-5 rounded-lg
            border border-zinc-800 text-white
        `}
    >
      <div className="text-sm text-zinc-500">{title}</div>
      <div className="flex justify-between items-center">
        <span className={`text-3xl font-black ${classNameValue ?? ""}`}>
          {FormatMoney(value)}
        </span>
        <span>
          {React.cloneElement(icon, {
            size: 60,
            strokeWidth: 1,
            className: `${classNameIcon ?? ""}`,
          })}
        </span>
      </div>
    </div>
  );
};

export default SummaryItem;
