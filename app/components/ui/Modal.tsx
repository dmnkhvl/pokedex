import { useEffect, type ReactNode } from "react"
import Button from "./Button"
import Typography from "./Typography"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-secondary/90 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-primary px-4 py-2 rounded-xl w-full max-w-80 flex flex-col gap-y-2  border-b-10 border-t-4 border-l-4 border-r-4 border-secondary outline-2 outline-primary"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <header>
            <Typography variant="h1" onDark={false}>
              {title}
            </Typography>
          </header>
        )}
        <main className="max-h-80 overflow-y-auto hide-scrollbar">{children}</main>
        <footer>
          <Button size="sm" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </footer>
      </div>
    </div>
  )
}
