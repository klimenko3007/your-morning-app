import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import NewsList from '../NewsList';

const NewsTabs = () => {
  const tabs = ['world', 'politics', 'business', 'media', 'sport', 'culture'];
  const [section, setSection] = useState('politics');

  const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSection(newValue);
  };

  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto',
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          zIndex: 5,
          background: 'white',
          width: '100%',
        }}
      >
        <Tabs onChange={onTabChange} value={section} variant="scrollable">
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} value={tab} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ pt: '78px' }}>
        <NewsList section={section} />
      </Box>
    </Box>
  );
};

export default NewsTabs;
