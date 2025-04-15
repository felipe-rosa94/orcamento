import {ChangeEvent, useState} from 'react'
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material'

// @ts-ignore
import tools from 'react-lf-tools'

import {DialogInfoProps} from '../../types/Info.tsx'
import moment from 'moment'

export default function DialogInfo({open, onClose, onClick}: DialogInfoProps) {

    const [info, setInfo] = useState({
        name: '',
        phone: '',
        date: ''
    })

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setInfo({
        ...info,
        [event.target.name]: (event.target.name === 'phone') ? tools.maskPhone(event.target.value) : event.target.value
    })

    const handleClick = () => {
        if (!info?.name) return alert('Nome inválido')
        info.date = moment().format('DD/MM/YYYY')
        onClick(info)
    }

    return <>
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className={'dialog-title'}>
                Dados cliente
            </DialogTitle>
            <DialogContent>
                <Box display={'flex'} flexDirection={'column'}>
                    <TextField
                        name={'name'}
                        margin={'dense'}
                        label={'Nome'}
                        placeholder={'Felipe'}
                        variant={'outlined'}
                        onChange={handleChange}/>
                    <TextField
                        value={info.phone}
                        name={'phone'}
                        margin={'dense'}
                        label={'Telefone'}
                        placeholder={'00 0000-0000'}
                        variant={'outlined'}
                        type={'tel'}
                        onChange={handleChange}/>
                </Box>
                <DialogActions>
                    <Button variant={'outlined'} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant={'contained'} onClick={handleClick}>
                        Confirmar
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </>
}
