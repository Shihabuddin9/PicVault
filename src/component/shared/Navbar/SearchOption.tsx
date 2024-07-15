import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled, alpha, InputBaseProps } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px', // Rounded Full
    backgroundColor: alpha(theme.palette.common.black, 0.10),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.13),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    '&:focus-within': { // Focused within the search bar
        backgroundColor: alpha(theme.palette.common.black, 0.10),
        border: '1px solid black'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

interface StyledInputBaseProps extends InputBaseProps {
    isFocused: boolean;
}

const StyledInputBase = styled(InputBase)<StyledInputBaseProps>(({ theme, isFocused }) => ({
    color: isFocused ? 'black' : 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
        },
    },
}));

export default function SearchOption() {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon style={{ color: isFocused ? '#aaaab1' : 'rgb(126 120 120)' }} />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Photo..."
                    inputProps={{ 'aria-label': 'search' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    isFocused={isFocused}
                />
            </Search>
        </Box>
    );
}
