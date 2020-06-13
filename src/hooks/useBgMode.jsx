import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export function useBgMode() {
  const  [value, setValue] = useState('white')
  return [ value, setValue ]
}

export function ThemeContextCustom(props) {
  const {value, setValue} = useBgMode() // custom hook
  return (
    <ThemeContext.Provider value={[value, setValue ]}>
      {props.children}
    </ThemeContext.Provider>
  )
}