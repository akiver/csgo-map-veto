import { BestOfMode } from 'renderer/types/best-of-mode'

type BestOfType = 1 | 2 | 3 | 5

type BestOf = {
  value: BestOfType
  label: string
  modes: BestOfMode[]
}

export { BestOf, BestOfType }
