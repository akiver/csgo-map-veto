import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputSelect } from 'renderer/components/input-select'
import { BestOfMode } from 'renderer/types/best-of-mode'
import { getSelectedMode } from 'renderer/veto/selectors/get-selected-mode'
import { getAvailableModes } from 'renderer/veto/selectors/get-available-modes'
import { updateSelectedMode } from 'renderer/veto/actions/update-select-mode'

type Props = {
  children?: never
}

const InputSelectMode = ({  }: Props) => {
  const dispatch = useDispatch()
  const selectedMode = useSelector(getSelectedMode)
  const availableModes = useSelector(getAvailableModes)
  return (
    <InputSelect
      options={availableModes}
      id="select-mode"
      label="Mode"
      value={selectedMode}
      onChange={(mode: BestOfMode) => {
        dispatch(updateSelectedMode(mode))
      }}
    />
  )
}

export { InputSelectMode }
