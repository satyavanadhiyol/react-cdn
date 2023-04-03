import { createTheme } from '@mui/material/styles';

const primary = {
  main: '#213E98',
  light: '#546B82',
  dark: '#001a2c',
  normal: '#213e97',
}

const secondary = {
  main: '#ED1D24',
  light: '#E0F1F3',
  dark: '#006b79',
  grey: 'rgba(37, 50, 65, 0.06)',
};

const textColors = {
  primary: '#000000',
  secondary: '#253241',
  white: '#FFF',
  grey: '#9ca3b1',
  selected: '#B4FFFF',
  completed: '#2FCC15',
  lightGray: '#6B7886',
  heading: '#ed1d24',
  link: '#213e97',
  scheduled: '#F4D03F'
};

const fieldColor = {
  border: '#d2d6da',
  background: '#e7e8e9'
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary,
    secondary,
    error: {
      main: '#b53f3f',
    },
    border:{
      default:'#9CA3B1'
    },
    background: {
      default: '#fff',
      grey: '#F7F7F7',
      light: '#eceff7',
      dark: '#0e205a',
      btn:'#F9F9F9'
    },
    text: textColors,
    field:fieldColor
  },
  typography: {
    fontFamily: [
      '"Roboto"'
    ].join(','),
    h1: {
      fontSize: 28,
      fontWeight: 600
    },
    h2: {
      fontSize: 22,
      fontWeight: 600
    },
    h3: {
      fontSize: 22,
      fontWeight: 500
    },
    h4: {
      fontSize: 18,
      fontWeight: 500
    },
    h5: {
      fontSize: 18,
      fontWeight: 700
    },
    h6: {
      fontSize: `1em`
    },
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 14,
      fontWeight: 500
    },
    h7: {
      fontSize: 13,
    }
  },
  overrides: {
    MUIDataTableSearch: {
      searchIcon: {
        color: textColors.primary
      }
    },
    MuiTableSortLabel: {
      root: {
        '> .MuiTableSortLabel-icon': {
            color: textColors.primary + ' !important'
        }
      }
    },
    MuiCheckbox: {
      root: {
        color: textColors.primary
      }
    },
    MuiRadio: {
      root: {
        color: textColors.primary
      }
    },    
    MuiFormLabel: {
      root: {
        color: textColors.primary
      }
    },
    MUIDataTableToolbar:{
      filterPaper:{
        width: "450px" // avoid wrapping of labels on filter popup
      }
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            borderBottom: '2px solid ' + secondary.light
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.MuiInputLabel-root': {
            background: 'blue'
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: textColors.primary
        }
      },
      MuiFormControlLabel: {
        color: textColors.primary,
        fontSize: 10
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: textColors.primary,
      }
    },
  }
});

export default theme;