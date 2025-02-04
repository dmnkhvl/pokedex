interface ErrorProps {
  message: string
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className="flex text-center justify-center w-full">
      <p className="bg-tertiary text-primary py-1 uppercase w-[200px] font-bold text-lg">
        {message}
      </p>
    </div>
  )
}
