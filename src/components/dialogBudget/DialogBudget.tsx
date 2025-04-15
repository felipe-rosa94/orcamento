import {useState} from 'react'
// @ts-ignore
import tools from 'react-lf-tools'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
import {AddCircleOutlineRounded, CloseRounded, DeleteRounded, LocalPrintshopRounded} from '@mui/icons-material'

import {Budget, DialogBudgetProps} from '../../types/Budget.tsx'
import {Info} from '../../types/Info.tsx'
import {Item} from '../../types/Item.tsx'

import DialogAdd from '../dialogAdd/DialogAdd.tsx'
import DialogInfo from '../dialogInfo/DialogInfo.tsx'

import {getLocal, setLocal} from '../../hooks/useStorage/useStorage.tsx'
import {generatePDF} from '../../util/Util.tsx'

import './dialogBudget.scss'

export default function DialogBudget({open, onClose, budget}: DialogBudgetProps) {

    const [items, setItems] = useState<Item[]>(budget?.items || [])
    const [openAdd, setOpenAdd] = useState(false)
    const [openInfo, setOpenInfo] = useState(false)
    const [isPrinter, setPrinter] = useState(false)

    const handleClose = () => {
        setItems([])
        onClose()
    }

    const handleClickOpenAdd = () => setOpenAdd(!openAdd)

    const handleClickBudget = () => {
        if (!budget?.id) return setOpenInfo(true)
        updateBudget()
        handleClose()
    }

    const handleClickAdd = (item: Item) => {
        setItems(prev => [...prev, item])
        setOpenAdd(false)
    }

    const handleCloseInfo = () => setOpenInfo(false)

    const handleClickInfo = (info: Info) => {
        createBudget(info)
        setOpenInfo(false)
        handleClose()
    }

    const createBudget = (info: Info) => {
        const listBudgets: Budget[] = getLocal('listBudgets', [])
        const budget = {id: String(new Date().getTime()), info, items}
        listBudgets.push(budget)
        setLocal('listBudgets', listBudgets)
    }

    const updateBudget = () => {
        const listBudgets: Budget[] = getLocal('listBudgets', [])
        budget.items = items
        const index = listBudgets.findIndex(l => l.id === budget.id)
        listBudgets[index] = budget
        setLocal('listBudgets', listBudgets)
    }

    const handleClickDelete = (item: Item) => {
        const array = items.filter(i => (i.id !== item.id))
        setItems(array)
    }

    const handleClickPrinter = () => {
        setPrinter(true)
        setTimeout(async () => {
            const res = await generatePDF()
            if (res === 'ok') setPrinter(false)
        }, 2000)
    }

    const paper = {
        style: tools.isMobile() ? {borderRadius: 0, padding: 20} : {width: 500, minHeight: '91vh', padding: 20}
    }

    return <>
        <Dialog open={open} onClose={handleClose} fullScreen={tools.isMobile()} PaperProps={paper}>
            <DialogTitle className={'dialog-title'}>
                <Box className={'box-title'}>
                    <CloseRounded onClick={handleClose}/>
                    Orçamento
                </Box>
                <Box className={'box-title'}>
                    <IconButton onClick={handleClickOpenAdd}>
                        <AddCircleOutlineRounded className={'icon'}/>
                    </IconButton>
                    <IconButton onClick={handleClickPrinter}>
                        <LocalPrintshopRounded className={'icon'}/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent id={'budget'} className={'dialog-content'}>
                <TableContainer style={isPrinter ? {padding: 55} : {}}>
                    {items.map((i: Item) =>
                        <Table size={'small'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{fontSize: 16}}>
                                        {i.description}
                                    </TableCell>
                                    {!isPrinter
                                        ? <TableCell className={'table-cell-icon'} align={'right'}>
                                            <IconButton onClick={() => handleClickDelete(i)}>
                                                <DeleteRounded className={'icon'}/>
                                            </IconButton>
                                        </TableCell>
                                        : <TableCell/>
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(!!i.width && !!i.length) && <TableRow>
                                    <TableCell align="left" className={'table-cell'}>Medidas</TableCell>
                                    <TableCell align="right" className={'table-cell'}>
                                        {`${i.width} x ${i.length}`}
                                    </TableCell>
                                </TableRow>}
                                <TableRow>
                                    <TableCell align="left" className={'table-cell'}>
                                        Valor
                                    </TableCell>
                                    <TableCell align="right" className={'table-cell'}>
                                        {(((i?.width || 1) * (i?.length || 1)) * (i?.value || 0)).toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    )}
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align='left' style={{fontSize: 16}}>
                                    Total
                                </TableCell>
                                <TableCell align='right' style={{fontSize: 16}}>
                                    {items.reduce((acc, b) => acc + ((b?.width || 1) * (b?.length || 1) * (b?.value || 0)), 0).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button
                    variant={'contained'}
                    fullWidth={true}
                    onClick={handleClickBudget}>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
        {(openAdd) && <DialogAdd
            open={openAdd}
            onClose={handleClickOpenAdd}
            onClick={handleClickAdd}
        />}
        <DialogInfo
            open={openInfo}
            onClose={handleCloseInfo}
            onClick={handleClickInfo}
        />
    </>
}
