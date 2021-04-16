import { useState, useEffect } from 'react'

const useDebounce = (value: string, delay: number): string => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        if (value.length) {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay)
            return () => {
                clearTimeout(handler)
            }
        }
    }, [value])

    return debouncedValue
}

export default useDebounce
