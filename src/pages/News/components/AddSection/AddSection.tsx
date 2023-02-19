import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from 'react';

const AddSection = () => {
  const [search, setSearch] = useState('');

  const onInputChange = (e: ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
    console.log(search);
  };

  return (
    <Box sx={{ pb: '25px' }}>
      <Typography variant="h1">Discover</Typography>
      <Typography variant="h3">News from all over the world</Typography>

      <OutlinedInput
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => console.log(search)} edge="end">
              <SearchIcon fontSize="medium" color="primary" />
            </IconButton>
          </InputAdornment>
        }
        placeholder="Search"
        color="primary"
        sx={{ width: '100%', mt: '20px' }}
        onChange={(e) => onInputChange(e)}
      />
    </Box>
  );
};

export default AddSection;
