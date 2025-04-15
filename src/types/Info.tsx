export interface Info {
    name: string
    phone: string
}

export interface DialogInfoProps {
    open: boolean,
    onClose: () => void,
    onClick: (info: Info) => void
}
