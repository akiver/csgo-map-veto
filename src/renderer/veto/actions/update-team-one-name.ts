const OPTIONS_UPDATE_TEAM_ONE_NAME = 'veto.options.updateTeamOneName'

const updateTeamOneName = (name: string) => {
  return {
    type: OPTIONS_UPDATE_TEAM_ONE_NAME as typeof OPTIONS_UPDATE_TEAM_ONE_NAME,
    name,
  }
}

type UpdateTeamOneNameAction = ReturnType<typeof updateTeamOneName>

export { OPTIONS_UPDATE_TEAM_ONE_NAME, updateTeamOneName, UpdateTeamOneNameAction }
