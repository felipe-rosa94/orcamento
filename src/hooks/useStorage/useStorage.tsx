// @ts-ignore
import tools from 'react-lf-tools'

const getLocal = (key: string, value: any = '') => {
    const data: string | null = localStorage.getItem(key)
    if (tools.isEmpty(data)) {
        return value
    } else {
        if (tools.isJson(data))
            return JSON.parse(data || '')
        else
            return tools.showData(data)
    }
}

const setLocal = (key: string, data = {}, encrypt = false) => localStorage.setItem(key, (encrypt) ? tools.hideData(data) : JSON.stringify(data))

const removeLocal = (key: string) => localStorage.removeItem(key)

const clearLocal = () => localStorage.clear()

const getSession = (key: string, value: any = '') => {
    const data: string | null = sessionStorage.getItem(key)
    if (tools.isEmpty(data)) {
        return value
    } else {
        if (tools.isJson(data))
            return JSON.parse(data || '')
        else
            return tools.showData(data)
    }
}

const setSession = (key: string, data = {}, encrypt = false) => sessionStorage.setItem(key, (encrypt) ? tools.hideData(data) : JSON.stringify(data))

const removeSession = (key: string) => sessionStorage.removeItem(key)

const clearSession = () => sessionStorage.clear()

export {
    getLocal,
    setLocal,
    removeLocal,
    clearLocal,
    getSession,
    setSession,
    removeSession,
    clearSession
}
