interface IArea {
  children: any;
  className?: string;
  id?: string;
}

const Area: React.FC<IArea> = ({ children, className, id }) => {
  return (
    <div
      id={id ?? ""}
      className={`
          flex justify-center w-full
          ${className ?? ""}
      `}
    >
      <div
        className={`
              px-7 xl:px-0 
              w-full xl:w-[1200px]
          `}
      >
        {children}
      </div>
    </div>
  );
};

export default Area;
