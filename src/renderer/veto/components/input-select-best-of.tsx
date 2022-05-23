import React from 'react';
import { InputSelect } from 'renderer/components/input-select';
import { BEST_OF_ARRAY } from 'renderer/constants/best-of/best-of-array';
import { BestOf } from 'renderer/types/best-of';
import { bestOfChanged } from '../veto-actions';
import { useDispatch } from 'renderer/use-dispatch';
import { useVeto } from '../use-veto';

export function InputSelectBestOf() {
  const { bestOf } = useVeto();
  const dispatch = useDispatch();
  const onChange = (bestOf: BestOf | null) => {
    if (bestOf !== null) {
      dispatch(bestOfChanged(bestOf));
    }
  };

  return (
    <InputSelect<BestOf> options={BEST_OF_ARRAY} id="select-best-of" label="BO" value={bestOf} onChange={onChange} />
  );
}
