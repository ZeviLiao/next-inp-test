import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

interface CountValueContextType {
  count: number;
}

interface CountActionContextType {
  increment: () => void;
  decrement: () => void;
}

const CountValueContext = createContext<CountValueContextType | undefined>(undefined);
const CountActionContext = createContext<CountActionContextType | undefined>(undefined);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);

  // ✅ 在 useMemo 中加入正確的依賴
  const value = useMemo(() => ({ count }), [count]);
  const actions = useMemo(() => ({ increment, decrement }), [increment, decrement]);

  return (
    <CountValueContext.Provider value={value}>
      <CountActionContext.Provider value={actions}>
        {children}
      </CountActionContext.Provider>
    </CountValueContext.Provider>
  );
};


export const useCountValue = () => {
  const context = useContext(CountValueContext);
  if (!context) throw new Error('useCountValue must be used within a CountProvider');
  return context;
};

export const useCountActions = () => {
  const context = useContext(CountActionContext);
  if (!context) throw new Error('useCountActions must be used within a CountProvider');
  return context;
};
