import { ThemeOptions } from '@mui/material';
import { tabClasses } from '@mui/material/Tab';

import { colors } from '../colors';

const MorningAppThemedComponents: ThemeOptions['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '19px',
        textTransform: 'capitalize',
      },
      outlined: {
        borderWidth: '2px',
        '&:hover': {
          borderWidth: '2px',
        },
      },
      disabled: {},
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:focus': {
          color: colors.celadon,
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        justifyContent: 'space-around',
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        width: '100%',
        borderColor: theme.palette.primary.main,
        input: {
          backgroundColor: theme.palette.primary.contrastText,
          borderRadius: 3,
          padding: theme.spacing(1),
          height: '32px',
          width: '100%',
          fontSize: '14px',
        },
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: colors.macaroniAndCheese,
        fontSize: '12px',
        lineHeight: '16px',
        marginBottom: 1,
        textTransform: 'uppercase',
        fontWeight: 600,
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
  },
  MuiTabs: {
    defaultProps: {
      variant: 'scrollable',
    },
    styleOverrides: {
      indicator: ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        height: '4px',
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'capitalize',
        [`&.${tabClasses.selected}`]: {
          fontWeight: 600,
        },
      },
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      selected: ({ theme }) => ({
        color: theme.palette.secondary.main,
        fontWeight: 600,
      }),
    },
  },
};

export default MorningAppThemedComponents;
