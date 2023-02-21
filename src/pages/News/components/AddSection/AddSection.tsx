import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { NewsContext } from '@/providers/context/NewsContextProvider';
import CloseIcon from '@mui/icons-material/Close';

const AddSection = () => {
  const [search, setSearch] = useState<string>('');
  const [searchIsActive, setSearchIsActive] = useState(false);
  const { searchString, onStringAdded, onStringRemoved } =
    useContext(NewsContext);

  useEffect(() => {
    if (searchString) {
      setSearch(searchString);
      setSearchIsActive(true);
    }
  }, []);

  const onInputChange = (e: ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const onCloseSearchClicked = () => {
    setSearch('');
    setSearchIsActive(false);
    onStringRemoved();
  };

  const onSearchButtonIconClicked = () => {
    onStringAdded(search);
    setSearchIsActive(true);
  };

  return (
    <Box sx={{ pb: '25px' }}>
      <Typography variant="h1">Discover</Typography>
      <Typography variant="h3">News from all over the world</Typography>

      <OutlinedInput
        type="text"
        endAdornment={
          <InputAdornment position="end">
            {!searchIsActive && (
              <IconButton onClick={onSearchButtonIconClicked} edge="end">
                <SearchIcon fontSize="medium" color="primary" />
              </IconButton>
            )}
            {searchIsActive && (
              <IconButton onClick={() => onCloseSearchClicked()} edge="end">
                <CloseIcon fontSize="medium" color="primary" />
              </IconButton>
            )}
          </InputAdornment>
        }
        placeholder="Search"
        color="primary"
        sx={{ width: '100%', mt: '20px' }}
        onChange={(e) => onInputChange(e)}
        value={search}
      />
    </Box>
  );
};

export default AddSection;
