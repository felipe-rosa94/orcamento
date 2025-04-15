import Lottie from 'lottie-react'
import { Box, FormLabel } from '@mui/material'
import loading from '../../assets/loading.json'

import './loadingPage.scss'

interface LoadingPageProps {
    text: string
}

export default function LoadingPage({ text }: LoadingPageProps) {
    return <Box className={'loading-page'}>
            <Box className={'container'}>
                <Lottie
                    animationData={loading}
                    className="lottie"
                    loop
                    autoplay
                />
                <FormLabel className="text">
                    {text}
                </FormLabel>
            </Box>
        </Box>
}
