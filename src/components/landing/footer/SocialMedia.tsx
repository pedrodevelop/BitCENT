import React from "react"
import Link from "next/link"

interface ISocialMediaProps {
    icon: any
    url: string
}

 const SocialMedia: React.FC<ISocialMediaProps> = ({url, icon}) => {
    return (
        <Link href={url} target="_blank">
            <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
                {React.cloneElement(icon, {
                    size: 35,
                    strokeWidth: 1,
                    className: "text-indigo-400",
                })}
            </div>
        </Link>
    )
}
export default SocialMedia

