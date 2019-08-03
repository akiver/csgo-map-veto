import React from 'react'
import { BestOfType } from 'renderer/types/best-of'
import { Text } from 'renderer/components/text'

type Props = {
  bestOfType: BestOfType
}

const BestOfText = ({ bestOfType }: Props) => {
  return <Text>{`BO${bestOfType}`}</Text>
}

export { BestOfText }
