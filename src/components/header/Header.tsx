import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'

interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps) {
    return <Box sx={{flexGrow: 1}}>
        <AppBar elevation={0} position='static' color={'transparent'}>
            <Toolbar>
                <IconButton size='large' edge='start' color='primary' sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}} color={'primary'}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
}
