import {createTheme} from '@mui/material/styles'
import colors from './metrics.module.scss'

const ThemeMui = () => createTheme({
    palette: {
        primary: {
            main: colors.primaryColor,
        },
        secondary: {
            main: colors.secundaryColor
        }
    },
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: colors.bodyColor,
                    borderRadius: 30,
                    padding: 20
                }
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: colors.bodyColor,
                    color: colors.textBodyColor,
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    color: colors.textBodyColor,
                    padding: 10,
                    userSelect: 'none'
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: 10,
                    overflowY: 'auto',
                    '::-webkit-scrollbar': {display: 'none'},
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
            },
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    color: colors.textBodyColor,
                    userSelect: 'none'
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    fontFamily: "'Nunito', sans-serif"
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: colors.bodyColor
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: colors.textBodyColor,
                    borderRadius: 10,
                    "&.Mui-disabled": {
                        backgroundColor: "#f5f5f5",
                        color: "#888",
                    }
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Nunito'
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: 'Nunito'
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Nunito'
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    zIndex: 0
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    userSelect: 'none'
                },
            },
        }
    },
});

export default ThemeMui
