import {Item} from './Item.tsx'
import {Info} from './Info.tsx'

export const _budget = {
    id: '',
    info: {name: '', phone: ''},
    items: []
}

export interface Budget {
    id: string,
    info: Info
    items: Item[]
}

export interface DialogBudgetProps {
    open: boolean,
    onClose: () => void,
    budget: Budget
}

export interface setDialogBudgetProps {
    open: boolean,
    budget: Budget
}

