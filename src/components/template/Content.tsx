interface IContent {
  children: any
  className?: string
}

 const Content: React.FC<IContent> = (props: IContent) => {
  return (
      <div className={`
          flex flex-col p-7
          ${props.className ?? ''}
      `}> 
          {props.children}
      </div>
  )
}

export default Content