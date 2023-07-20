interface IContentProps {
  children: any
  className?: string
}

 export const Content: React.FC<IContentProps> = ({children, className}) => {
  return (
      <div className={`
          flex flex-col p-7
          ${className ?? ''}
      `}> 
          {children}
      </div>
  )
}