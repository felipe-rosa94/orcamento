import {createContext} from 'react'
import {setDialogBudgetProps} from '../types/Budget.tsx'
import {setDialogListBudgetProps} from '../types/ListBudgets.tsx'

interface HomeContextType {
    setDialogBudget: (value: setDialogBudgetProps) => void,
    setDialogList: (value: setDialogListBudgetProps) => void,
}

export const HomeContext = createContext<HomeContextType | null>(null)
