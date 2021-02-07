const VetoStatuses = Object.freeze({
  SETUP: 'setup' as const,
  IN_PROGRESS: 'in-progress' as const,
  COMPLETED: 'completed' as const,
});

type VetoStatus = EnumLiteralsOf<typeof VetoStatuses>;

export { VetoStatus, VetoStatuses };
