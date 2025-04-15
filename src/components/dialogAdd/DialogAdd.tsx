import {ChangeEvent, useState} from 'react'
// @ts-ignore
import tools from 'react-lf-tools'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from '@mui/material'

import {Item} from '../../types/Item.tsx'

interface DialogAddProps {
    open: boolean,
    onClose: () => void,
    onClick: (item: Item) => void,
}

import './dialogAdd.scss'

export default function DialogAdd({open, onClose, onClick}: DialogAddProps) {

    const _item = {
        id: '',
        description: '',
        value: 0,
        width: 0,
        length: 0
    }

    const [item, setItem] = useState(_item)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setItem({
        ...item,
        [event.target.name]: (event.target.name !== 'description') ? parseFloat(event.target.value) : event.target.value
    })

    const handleClick = () => {
        if (!item?.description) return alert('Coloque a descrição')
        if (!item?.value) return alert('Coloque um valor')
        item.id = String(new Date().getTime())
        onClick(item)
    }

    const handleClose = () => {
        setItem(_item)
        onClose()
    }

    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
            Adicione as informações
        </DialogTitle>
        <DialogContent>
            <Box display={'flex'} flexDirection={'column'}>
                <TextField
                    name={'description'}
                    margin={'dense'}
                    label={'Descrição'}
                    placeholder={'Mão de obra'}
                    variant={'outlined'}
                    onChange={handleChange}/>
                <TextField
                    name={'value'}
                    margin={'dense'}
                    label={'Valor'}
                    placeholder={'50'}
                    variant={'outlined'}
                    type={'number'}
                    onChange={handleChange}/>
                <Box display={'flex'} flexDirection={'row'} gap={1}>
                    <TextField
                        name={'width'}
                        margin={'dense'}
                        label={'Largura ou quantidade'}
                        placeholder={'Calçada'}
                        variant={'outlined'}
                        type={'number'}
                        onChange={handleChange}/>
                    <TextField
                        name={'length'}
                        margin={'dense'}
                        label={'Comprimento'}
                        placeholder={'Calçada'}
                        variant={'outlined'}
                        type={'number'}
                        onChange={handleChange}/>
                </Box>
            </Box>
            <DialogActions>
                <Button
                    variant={'contained'}
                    onClick={handleClick}>
                    Confirmar
                </Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
}
