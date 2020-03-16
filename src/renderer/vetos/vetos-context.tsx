import React, { createContext, ReactNode, useReducer, Dispatch, useContext } from 'react';
import { Veto } from 'renderer/vetos/types/veto';

type Action = { type: 'set'; vetos: Veto[] } | { type: 'remove'; vetoId: number } | { type: '' };

const VetosStateContext = createContext<Veto[]>([]);
const VetosDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

const vetosReducer = (state: Veto[], action: Action) => {
  switch (action.type) {
    case 'set':
      return action.vetos;
    case 'remove':
      return state.filter(veto => veto.id !== action.vetoId);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

type ProdiverProps = {
  children: ReactNode;
  value?: Veto[];
};

const VetosProvider = ({ children, ...rest }: ProdiverProps) => {
  const [state, setVetos] = useReducer(vetosReducer, []);
  return (
    <VetosStateContext.Provider value={state} {...rest}>
      <VetosDispatchContext.Provider value={setVetos}>{children}</VetosDispatchContext.Provider>
    </VetosStateContext.Provider>
  );
};

const useVetosDispatch = () => {
  const context = useContext(VetosDispatchContext);
  if (context === undefined) {
    throw new Error('useVetosDispatch must be used within a VetosProvider');
  }
  return context;
};

const useVetosState = () => {
  const context = useContext(VetosStateContext);
  if (context === undefined) {
    throw new Error('useVetosState must be used within a VetosProvider');
  }
  return context;
};

export { VetosProvider, useVetosDispatch, useVetosState };
