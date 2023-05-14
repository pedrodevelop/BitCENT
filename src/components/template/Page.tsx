interface IPage {
  external?: boolean;
  children: any;
  className?: string;
}

const Page: React.FC<IPage> = ({ children, className, external }) => {
  return (
    <div
      className={`
      flex flex-col min-h-screen
      bg-gradient-to-r from-zinc-900 
      via-black to-zinc-900
      ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Page;
