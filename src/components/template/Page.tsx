import ForceAuth from "../auth/forceAuth";

interface IPageProps {
  external?: boolean;
  children: any;
  className?: string;
}

const Page: React.FC<IPageProps> = ({ children, className, external }) => {
  const renderPage = () => {
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

  return external ? renderPage() : <ForceAuth>{renderPage()}</ForceAuth>;
};

export default Page;
