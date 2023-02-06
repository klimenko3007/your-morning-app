import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Widget = ({
  path,
  icon,
  header,
  index,
}: {
  path: string;
  icon: JSX.Element;
  header: string;
  index: number;
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
        background: 'var(--tapestry)',
        p: '10px',
      }}
      component={Link}
      to={path}
    >
      {icon}
      <h2>{header}</h2>
    </Paper>
  );
};

export default Widget;
