import { Icon, IconButton, Tooltip } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode, selectMode } from '../redux/appSlice';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'

import "../style/Floating.css"

function FloatingThemeToggle() {
    const dispatch = useDispatch();
    const mode = useSelector(selectMode);

  return (
    <div className='themeToggle'>
        <Tooltip title = {mode === "dark" ? "Light mode" : "Dark mode"}>
            <IconButton onClick={() => dispatch(toggleMode())}>
                {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
        </Tooltip>
    </div>
  );
}

export default FloatingThemeToggle
