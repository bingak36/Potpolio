import React,{useCallback,useEffect,useState} from 'react'
import { ThemeContext } from './themeContext'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(){
  if(typeof window==='undefined') return 'light'

  const stored =localStorage.getItem(STORAGE_KEY)

  if(stored==='light' || stored==='dark')return stored


  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

  return 'light'

}


const ThemeProvider = ({children}) => {
 
  const [theme, setTheme]=useState(getInitialTheme)

  useEffect(()=>{

    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem(STORAGE_KEY,theme)

  },[theme])
 
  const toggleTheme =useCallback(()=>{
    setTheme((t)=>(t==='light'? 'dark':'light'))
  },[])

  const value = {theme, toggleTheme, setTheme}

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider