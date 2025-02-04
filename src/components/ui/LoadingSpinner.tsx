export default function LoadingSpinner() {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center w-full">
      <div className="w-16 h-16 border-[6px] border-secondary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xl uppercase">Loading</p>
    </div>
  )
}
