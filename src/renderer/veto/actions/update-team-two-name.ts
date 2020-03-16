const OPTIONS_UPDATE_TEAM_TWO_NAME = 'veto.options.updateTeamTwoName';

const updateTeamTwoName = (name: string) => {
  return {
    type: OPTIONS_UPDATE_TEAM_TWO_NAME as typeof OPTIONS_UPDATE_TEAM_TWO_NAME,
    name,
  };
};

type UpdateTeamTwoNameAction = ReturnType<typeof updateTeamTwoName>;

export { OPTIONS_UPDATE_TEAM_TWO_NAME, updateTeamTwoName, UpdateTeamTwoNameAction };
