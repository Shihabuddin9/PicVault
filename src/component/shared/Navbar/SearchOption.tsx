import React from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = styled('form')({
  // Equivalent to bg-gray-400
  '&.dark': {
    backgroundColor: '#37474f' // Equivalent to dark:bg-gray-800
  }
});

const SearchInput = styled(TextField)`
  width: 100%;
  & .MuiInputBase-root {
    height: 43px;
    width: 700px;
    padding-right: 48px;
    border-radius: 24px;
    background-color: #eceff1; // Equivalent to dark:bg-gray-200
    color: #212121; // Equivalent to dark:text-gray-800
    &:hover {
      background-color: #e0e0e0; // Slightly darker shade on hover
    }
    &.Mui-focused {
      background-color: #ffffff; // Background color on focus
    }
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid gray; // Outline border color on focus
  }

  @media (max-width: 1024px) {
    & .MuiInputBase-root {
      width: 380px; // Adjust width for devices with max width of 500px
      height: 39px;
    }
  }
  @media (max-width: 768px) {
    & .MuiInputBase-root {
      width: 300px; // Adjust width for devices with max width of 500px
      height: 38px;
    }
  }
  @media (max-width: 425px) {
    & .MuiInputBase-root {
      width: 250px; // Adjust width for devices with max width of 500px
      height: 38px;
    }
  }
`;

const SearchButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
  min-width: 0;
  padding: 0;
  color: #26a69a; // Equivalent to text-teal-400

  &.dark {
    color: #80cbc4; // Equivalent to dark:text-teal-300
  }

  @media (max-width: 1024px) {
    top: 8px; // Adjust if needed for smaller screens
    right: 8px; // Adjust if needed for smaller screens
  }
`;

const SearchOption = () => {
  return (
    <Box className="bg-gray-400 dark:bg-gray-800 flex justify-center items-center">
      <Container sx={{ mx: 0 }} >
        <SearchForm action="/search">
          <Box position="relative" width="100%">
            <SearchInput
              name="q"
              variant="outlined"
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <SearchButton type="submit">
                    <SearchIcon />
                  </SearchButton>
                )
              }}
              sx={{

                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none', // Outline border color on focus
                  },
                },
              }}
            />
          </Box>
        </SearchForm>
      </Container>
    </Box>
  );
};

export default SearchOption;
