import React from "react";

interface IPageTitleProps {
  main: string;
  icon?: any;
  secondary?: string;
  className?: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({
  main,
  icon,
  secondary,
  className,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {icon && (
        <div
          className={`
                    text-zinc-500
                `}
        >
          {React.cloneElement(icon, {
            stroke: 1,
            size: secondary ? 50 : 24,
          })}
        </div>
      )}
      <div className="flex flex-col text-zinc-500">
        <h1 className="text-2xl font-black">{main}</h1>
        {secondary && <h2 className="text-sm font-thin -mt-1">{secondary}</h2>}
      </div>
    </div>
  );
};

export default PageTitle;
