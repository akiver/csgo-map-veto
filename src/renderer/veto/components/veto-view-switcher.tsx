import React from 'react';
import { Options } from 'renderer/veto/components/options';
import { VetoStatus } from 'renderer/types/veto-status';
import { Veto } from 'renderer/veto/components/veto';
import { useVeto } from '../use-veto';

export function VetoViewSwitcher() {
  const { status } = useVeto();

  return status === VetoStatus.Setup ? <Options /> : <Veto />;
}
