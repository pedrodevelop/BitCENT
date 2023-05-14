import Image from "next/image";

interface IStatement {
  avatar: string;
  name: string;
  title: string;
  text: string;
  highlight?: boolean;
}

const Statement: React.FC<IStatement> = ({
  avatar,
  name,
  title,
  text,
  highlight,
}) => {
  return (
    <div
      className={`
            flex flex-col justify-center items-center gap-3
            bg-zinc-800 p-7 rounded-xl w-[350px] h-[300px]
            ${highlight && "xl:h-[350px]"}
        `}
    >
      <Image
        src={avatar}
        alt="Avatar"
        width={80}
        height={80}
        className={`
                    max-w-[80px] max-h-[80px] object-cover
                    rounded-tl-xl rounded-b-xl
                `}
      />
      <div className="flex flex-col items-center">
        <span
          className={`
                    text-xl text-white font-black
                `}
        >
          {name}
        </span>
        <span
          className={`
                    text-sm text-zinc-400 font-thin
                `}
        >
          {title}
        </span>
      </div>
      <p className="text-center text-zinc-400">{text}</p>
    </div>
  );
};

export default Statement;
