import Navbar from './components/Navbar';
import Widget from './components/Widget';
import Box from '@mui/material/Box';
import Widgets from './components/Widgets';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>Welcome, User!</h1>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          height: 'calc(100vh - 150px)',
          [theme.breakpoints.up('md')]: {
            height: 'calc(100vh - 200px)',
          },
        })}
      >
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr 2fr',
            p: '10px',
            gap: '20px',
          }}
        >
          {Widgets().map(({ icon, path, header }, key) => (
            <Widget
              header={header}
              icon={icon}
              path={path}
              key={key}
              index={key}
            ></Widget>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
