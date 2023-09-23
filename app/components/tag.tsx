type Props = {
    className?: string;
    text: string;
  }
  
  export default function Tag({ className, text }: Props) {
    return (
      <span className={ "inline-flex items-center rounded-md px-3 py-1 text-xs font-medium bg-green-950/90 text-secondary-500 ring-1 ring-inset ring-secondary-700" + " " + className }>
        { text }
      </span>
    )
  }