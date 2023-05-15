import { IconCircleX } from "@tabler/icons-react";

interface INotFound {
    children: any
}

const NotFound: React.FC<INotFound> = ({children}) => {
    return (
        <div className={`
            flex flex-col items-center rounded-lg
            text-zinc-700 py-7
        `}>
            <IconCircleX size={80} stroke={1} />
            <span className="text-lg">{children}</span>
        </div>
    )
}

export default NotFound