import Image from "next/image"

interface IResponsiveImageProps {
    image: any
    className?: string
}

 export const ResponsiveImage: React.FC<IResponsiveImageProps> = ({image,className}) => {
    return (
        <Image
            src={image}
            alt="image"
            className={`
                w-[100%] h-[120px]
                sm:w-[200px] sm:h-[330px]
                md:w-[350px] md:h-[365px]
                lg:w-[550px] lg:h-[365px]
                rounded-xl object-cover
                ${className ?? ''}
            `}
        />
    )
}
