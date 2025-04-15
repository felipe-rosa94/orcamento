import {useState} from 'react'
import {Box} from '@mui/material'

import Header from '../../components/header/Header.tsx'
import Container from './components/container/Container.tsx'
import DialogBudget from '../../components/dialogBudget/DialogBudget.tsx'
import DialogListBudgets from '../../components/dialogList/DialogListBudgets.tsx'

import {HomeContext} from '../../context/HomeContext.tsx'

import {_budget, Budget, setDialogBudgetProps} from '../../types/Budget.tsx'

import './home.scss'

export default function Home() {

    const [dialogBudget, setDialogBudget] = useState<setDialogBudgetProps>({
        open: false,
        budget: _budget
    })
    const [dialogList, setDialogList] = useState({
        open: false
    })

    const handleCloseBudget = () => setDialogBudget({budget: _budget, open: false})

    const handleCloseList = () => setDialogList({...dialogList, open: false})

    const handleClickList = (budget: Budget) => setDialogBudget({budget: budget, open: true})
    
    return <Box className={'home'}>
        <Header title={import.meta.env.VITE_NAME}/>
        <HomeContext.Provider value={{setDialogBudget, setDialogList}}>
            <Container/>
            {dialogBudget.open && <DialogBudget
                open={dialogBudget.open}
                budget={dialogBudget.budget}
                onClose={handleCloseBudget}
            />}
            <DialogListBudgets
                open={dialogList.open}
                onClose={handleCloseList}
                onClick={handleClickList}/>
        </HomeContext.Provider>
    </Box>
}
