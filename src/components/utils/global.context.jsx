import { createContext, useState } from "react";
// Definir el objeto initialState con los temas "light" y "dark"
export const initialState = {
  themes: {
    light: {
      navBackground: "radial-gradient(circle at top left, #B4DCF6, #579BF4)",
      footBackground: "radial-gradient(circle at top left, #B4DCF6, #104497)",
      homeBackground: "radial-gradient(circle at top right, #abcff6, #b6d8f6, #c4e0f5, #d2e8f5, #e2eff6)",
      linkBackground: "linear-gradient(to right top, #579bf4, #6ca7f7, #7fb2f9, #91befb, #a3c9fd)",
      buttomActive: "linear-gradient(to left top, #2a8c2a, #59a75b, #83c289, #afdcb6, #ddf6e3)",
      buttom: 'radial-gradient(circle at top left, #b7c9f184, #104497a7)',
      color: "rgb(0,0,0)",
      inverted: "invert(0)"
    },
    dark: {
      navBackground: "linear-gradient(to right bottom, #343333, #616060, #929192, #c6c6c6, #fdfdfd)",
      footBackground: "linear-gradient(to right bottom, #1D1D1D, #2d2c2c, #565656, #838383, #b3b3b3)",
      homeBackground: "linear-gradient(to right bottom, #595959, #7f7f7f, #a6a6a6, #d0d0d0, #fbfbfb)",
      linkBackground: "linear-gradient(to right top, #c63b3b, #cc5250, #d06765, #d27b7a, #d38e8e)",
      buttomActive: "linear-gradient(to right bottom, #0a5e28, #217e3a, #369f4d, #4dc160, #64e574)",
      buttom: 'linear-gradient(to right bottom, #092a4e, #374e6f, #607592, #8b9eb7, #b9c9dc)',
      backgroundButton: "rbga(255,255,255,.3)",
      color: "rgb(255,255,255)",
      inverted: "invert(1)"
    }
  },
}
// Crear el contexto global
export const ContextGlobal = createContext(initialState);
// Utilizar el hook useState para almacenar el tema actual
export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.themes.light)
  const handleTheme = () => {
    setTheme((curr) => (curr === initialState.themes.light ? initialState.themes.dark : initialState.themes.light
    ))
  }

  return (
     /* Componente proveedor de contexto que pasa el tema actual y la función handleTheme a los componentes hijos */
    <ContextGlobal.Provider value={{ theme, handleTheme }}>
      {children}
    </ContextGlobal.Provider>
  )
}