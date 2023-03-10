import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';

const Widget = ({
  path,
  icon,
  header,
  index,
  children,
}: {
  path: string;
  icon: JSX.Element;
  header: string;
  index: number;
  children: JSX.Element;
}) => {
  const getColumn = () => {
    if (index === 3) {
      return '1/3';
    }
    if (index === 0) {
      return 1;
    }
    return 2;
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        height: '100%',
        gridRow: index === 0 ? '1/3' : index,
        gridColumn: getColumn(),
        background: 'var(--deep-purple)',
        p: '10px',
        textDecoration: 'none',
      }}
      component={Link}
      to={path}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          color: 'var(--alice-blue) ',
        }}
      >
        {icon}
        <h2>{header}</h2>
      </Box>
      {children}
    </Paper>
  );
};

export default Widget;
