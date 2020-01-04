import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputSelect } from 'renderer/components/input-select'
import { BEST_OF_ARRAY } from 'renderer/constants/best-of/best-of-array'
import { getSelectedBestOf } from 'renderer/veto/selectors/get-selected-best-of'
import { updateSelectedBestOf } from 'renderer/veto/actions/update-selected-bo'
import { BestOf } from 'renderer/types/best-of'

type Props = {
  children?: never
}

const InputSelectBestOf = ({}: Props) => {
  const selectedBestOf = useSelector(getSelectedBestOf)
  const dispatch = useDispatch()

  return (
    <InputSelect
      options={BEST_OF_ARRAY}
      id="select-best-of"
      label="BO"
      value={selectedBestOf}
      onChange={(bestOf: BestOf) => {
        dispatch(updateSelectedBestOf(bestOf))
      }}
    />
  )
}

export { InputSelectBestOf }
