import type { PokemonMove } from "~/types/pokemon"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import Typography from "../ui/Typography"
import { useState } from "react"
import { replaceHyphenWithSpace } from "~/utils/formaters"

interface PokemonMovesProps {
  moves: PokemonMove[]
  pokemonName: string
}

const PokemonMoveItem = ({ move }: { move: PokemonMove }) => (
  <li>
    <p className="uppercase text-lg">{replaceHyphenWithSpace(move.move.name)}</p>
  </li>
)

export default function PokemonMoves({ moves, pokemonName }: PokemonMovesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-y-2">
      <Typography variant="h2">MOVES</Typography>
      <ul>
        {moves.slice(0, 9).map((move) => (
          <PokemonMoveItem key={move.move.name} move={move} />
        ))}
      </ul>
      {moves.length > 9 && (
        <Button size="sm" variant="secondary" onClick={() => setIsModalOpen(true)}>
          Show More
        </Button>
      )}

      {isModalOpen && (
        <Modal
          title={`All ${pokemonName} moves`}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
        >
          <ul>
            {moves.map((move) => (
              <PokemonMoveItem key={move.move.name} move={move} />
            ))}
          </ul>
        </Modal>
      )}
    </div>
  )
}
