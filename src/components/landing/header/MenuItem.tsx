import Link from "next/link";

interface IMenuItem {
  children: any;
  url?: string;
  onClick?: () => void;
  className?: string;
}

const MenuItem: React.FC<IMenuItem> = ({
  children,
  url,
  onClick,
  className,
}) => {
  function Button() {
    return (
      <div
        className={`
                flex justify-center items-center cursor-pointer
                text-zinc-300 m-2 p-4 rounded-md h-9
                ${className ?? ""}
            `}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return url ? <Link href={url ?? ""}>{Button()}</Link> : Button();
};

export default MenuItem;
