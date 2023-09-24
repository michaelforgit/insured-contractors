type Props = {
    className?: string;
    text: string;
  }
  
  export default function Tag({ className, text }: Props) {
    return (
      <span className={ "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mt-2 whitespace-nowrap" + " " + className }>
        { text }
      </span>
    )
  }