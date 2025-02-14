interface ErrorProps {
  message: string
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className="flex flex-col text-center justify-center w-full h-screen items-center">
      <p className="py-1 uppercase">We're sorry the app</p>
      <p className="text-tertiary py-1 uppercase font-bold text-lg">{message}</p>
    </div>
  )
}
