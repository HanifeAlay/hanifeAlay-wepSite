import { useMemo, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material';
import Hero from './components/Hero';
import FloatingThemeToggle from './components/FloatingThemeToggle'
import { selectMode } from './redux/appSlice';
import { getAppTheme } from './theme/muiTheme';

function App() {
  const mode = useSelector(selectMode);
  const theme = useMemo(() => getAppTheme (mode), [mode]);
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FloatingThemeToggle />
      <Hero />
    </ThemeProvider>
  )
}

export default App
