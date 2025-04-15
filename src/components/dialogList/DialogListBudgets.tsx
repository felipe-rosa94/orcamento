// @ts-ignore
import tools from 'react-lf-tools'
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
import {CloseRounded} from '@mui/icons-material'
import {getLocal} from '../../hooks/useStorage/useStorage.tsx'
import {Budget} from '../../types/Budget.tsx'

interface DialogListProps {
    open: boolean,
    onClose: () => void,
    onClick: (budget: Budget) => void
}

export default function DialogListBudgets({open, onClose, onClick}: DialogListProps) {

    const listBudgets: Budget[] = getLocal('listBudgets', [])

    const paper = {
        style: tools.isMobile() ? {borderRadius: 0, padding: 20} : {width: 500, minHeight: '91vh', padding: 20}
    }

    return <>
        <Dialog open={open} onClose={onClose} fullScreen={tools.isMobile()} PaperProps={paper}>
            <DialogTitle className={'dialog-title'}>
                <Box className={'box-title'}>
                    <CloseRounded onClick={onClose}/>
                    Lista de orçamentos
                </Box>
            </DialogTitle>
            <DialogContent className={'dialog-content'}>
                <TableContainer>
                    {listBudgets.map((l: any, i: number) =>
                        <Table size={'small'} key={i} onClick={() => onClick(l)}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{fontSize: 16}}>
                                        {l?.info?.name}
                                    </TableCell>
                                    <TableCell align={'right'}>
                                        {l?.info?.phone || ''}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align={'left'}>
                                        Data
                                    </TableCell>
                                    <TableCell align={'right'}>
                                        {l?.info?.date}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    )}
                </TableContainer>
            </DialogContent>
        </Dialog>
    </>
}
