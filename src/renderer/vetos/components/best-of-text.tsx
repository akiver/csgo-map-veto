import React from 'react';
import { BestOfType } from 'renderer/types/best-of';
import { Text } from 'renderer/components/text';

type Props = {
  bestOfType: BestOfType;
};

export function BestOfText({ bestOfType }: Props) {
  return <Text>{`BO${bestOfType}`}</Text>;
}
