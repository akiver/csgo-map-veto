import React from 'react';
import { InputSelect } from 'renderer/components/input-select';
import { BestOfMode } from 'renderer/types/best-of-mode';
import { useDispatch } from 'renderer/use-dispatch';
import { modeChanged } from '../veto-actions';
import { useVeto } from '../use-veto';

export function InputSelectMode() {
  const dispatch = useDispatch();
  const { bestOf, bestOfMode } = useVeto();
  const onChange = (bestOfMode: BestOfMode | null) => {
    if (bestOfMode !== null) {
      dispatch(modeChanged(bestOfMode));
    }
  };

  return (
    <InputSelect<BestOfMode>
      options={bestOf.modes}
      id="select-mode"
      label="Mode"
      value={bestOfMode}
      onChange={onChange}
    />
  );
}
