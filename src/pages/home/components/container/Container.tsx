import {useContext} from 'react'
import {HomeContext} from '../../../../context/HomeContext.tsx'
import {Box, Button} from '@mui/material'

import {AddRounded, FeedRounded} from '@mui/icons-material'
import {_budget} from '../../../../types/Budget.tsx'

import './container.scss'

export default function Container() {
    const context = useContext(HomeContext)
    if (!context) throw new Error('Meu componente deve ser usado dentro de um HomeProvider')
    const {setDialogBudget, setDialogList} = context
    const handleClick = (action: string) => {
        setDialogBudget({open: (action === 'budget'), budget: _budget})
        setDialogList({open: (action === 'list')})
    }
    return <Box className={'container'}>
        <Button
            className={'button'}
            variant={'contained'}
            startIcon={<AddRounded/>}
            onClick={() => handleClick('budget')}>
            Criar novo orçamento
        </Button>
        <Button
            className={'button'}
            variant={'outlined'}
            startIcon={<FeedRounded/>}
            onClick={() => handleClick('list')}>
            Ver orçamentos criados
        </Button>
    </Box>
}
