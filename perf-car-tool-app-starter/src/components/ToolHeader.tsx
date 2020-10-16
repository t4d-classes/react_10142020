import React, { memo } from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './ToolHeader.styles';

export type ToolHeaderProps = {
  headerText: string;
};

export const ToolHeader = memo(function ToolHeader({ headerText }: ToolHeaderProps) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Typography variant="h1" className={classes.text}>
        {headerText}
      </Typography>
    </header>
  );
});
