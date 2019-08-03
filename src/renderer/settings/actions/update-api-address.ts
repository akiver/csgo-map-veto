const UPDATE_API_ADDRESS = 'settings.updateApiAddress'

const updateApiAddress = (apiAddress: string) => {
  return {
    type: UPDATE_API_ADDRESS as typeof UPDATE_API_ADDRESS,
    apiAddress,
  }
}

type UpdateApiAddressAction = ReturnType<typeof updateApiAddress>

export { UPDATE_API_ADDRESS, updateApiAddress, UpdateApiAddressAction }
