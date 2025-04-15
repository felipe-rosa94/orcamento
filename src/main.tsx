import {lazy, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'

import {ThemeProvider} from '@mui/material'
import themeMui from './themeMui.tsx'

import LoadingPage from './components/loadingPage/LoadingPage'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const Home = lazy(() => delay(2000).then(() => import('./pages/home/Home')))

import './index.scss'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={themeMui()}>
        <BrowserRouter>
            <Suspense fallback={<LoadingPage text={'Aguarde... 1.0'}/>}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    </ThemeProvider>
)
