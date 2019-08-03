const VetoStatuses = Object.freeze({
  SETUP: 'setup' as 'setup',
  IN_PROGRESS: 'in-progress' as 'in-progress',
  COMPLETED: 'completed' as 'completed',
})

type VetoStatus = EnumLiteralsOf<typeof VetoStatuses>

export { VetoStatus, VetoStatuses }
