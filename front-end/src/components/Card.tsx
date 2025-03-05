const Card = ({title, desc} : {title : string, desc : string}) => {
  return (
    <div className="w-full h-full rounded-2xl border-border hover:border-foreground/80 transition-colors border cursor-pointer px-10">
      <h1 className="poppins-medium text-xl py-8">{title}</h1>
      <p className="poppins-regular text-lg text-foreground/80">{desc}</p>
    </div>
  )
}

export default Card