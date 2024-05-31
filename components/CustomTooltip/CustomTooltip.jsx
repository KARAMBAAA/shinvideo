import { ClickAwayListener, IconButton } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';
import styled from '@emotion/styled';
import styles from './CustomTooltip.module.css';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 16,
    padding: 8,
  },
}));

export function CustomTooltip({ text }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.forMobile}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            placement="top"
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={text}
          >
            <IconButton onClick={handleTooltipOpen}>
              <HelpOutlineIcon sx={{ fill: '#0000001f' }} fontSize="small" />
            </IconButton>
          </Tooltip>
        </ClickAwayListener>
      </div>
      <HtmlTooltip title={text} components={<div />} placement="top">
        <HelpOutlineIcon
          fontSize="small"
          sx={{ fill: '#0000001f', cursor: 'pointer' }}
          className={styles.forDesctop}
        />
      </HtmlTooltip>
    </>
  );
}
