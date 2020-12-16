import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: 12,
          WebkitFontSmoothing: 'auto',
        },
        body: {
          fontSize: '1rem',
        },
        h1: {
          fontSize: '1.5rem',
          lineHeight: 'normal',
        },
        h2: {
          fontSize: '1.2rem',
          fontWeight: 600,
          lineHeight: 'normal',
        },
        h3: {
          fontSize: '1rem',
          lineHeight: 'normal',
        },
        h4: {
          fontSize: '1rem',
        },
        h5: {
          fontSize: '1rem',
        },
        h6: {
          fontSize: '1rem',
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
        ol: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
        p: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        padding: '0.3em 0.8em',
        fontSize: '1rem',
        letterSpacing: 'normal',
        boxShadow: 'none',
      },
      sizeSmall: {
        minWidth: 50,
        marginLeft: 0,
        marginRight: 0,
        padding: '0.3em 0.8em',
        fontSize: '1rem',
        letterSpacing: 'normal',
        boxShadow: 'none',
      },
      contained: {
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    MuiButtonGroup: {
      contained: {
        boxShadow: 'none',
      },
    },
    MuiIconButton: {
      root: {
        color: '#000',
      },
      sizeSmall: {
        marginLeft: 0,
        marginRight: 0,
        padding: '0.3em',
        fontSize: '1rem',
      },
    },
    MuiFormControl: {
      root: {
        minWidth: 90,
        fontSize: '1rem',
      },
      marginDense: {
        marginTop: 0,
        marginBottom: 0,
        fontSize: '1rem',
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 8,
        marginRight: 8,
      },
    },
    MuiCheckbox: {
      root: {
        padding: '0.4em 0.3em 0.4em 0',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '1rem',
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.9)',
      },
    },
    MuiInputAdornment: {
      positionEnd: {
        marginLeft: 0,
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: '1em !important',
        paddingRight: '1em !important',
      },
    },
    MuiRadio: {
      root: {
        padding: '0.4em 0.3em 0.4em 0',
      },
    },
    MuiTab: {
      root: {
        minHeight: 38,
      },
    },
    MuiTabs: {
      root: {
        minHeight: 38,
      },
    },
    MuiTooltip: {
      popper: {
        fontSize: 38,
      },
      tooltip: {
        fontSize: '1rem',
        lineHeight: '1.7em',
      },
    },
    MuiDialog: {
      paper: {
        minWidth: 200,
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '1em',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '1em',
      },
    },
    MuiDialogActions: {
      root: {
        padding: '1em',
      },
    },
    MuiTableContainer: {
      root: {
        position: 'relative',
        border: '1px solid #e0e0e0',
        borderWidth: '1px 0',
      },
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiChip: {
      size: 'small',
    },
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiToolbar: {
      variant: 'dense',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 12,
    h1: {
      fontSize: '1.5rem',
      lineHeight: 'normal',
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    h3: {
      fontSize: '1rem',
      lineHeight: 'normal',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1rem',
    },
    button: {
      fontSize: '1rem',
    },
  },
  spacing: 6,
  palette: {
    secondary: {
      main: '#f8ba00',
    },
  },
  zIndex: {
    mobileStepper: 1,
    speedDial: 2,
    appBar: 10,
    drawer: 11,
    modal: 100,
    snackbar: 101,
    tooltip: 110,
  },
});

export default theme;
