export default function LoadingSpinner() {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center w-full">
      <div className="w-4 h-4 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}
