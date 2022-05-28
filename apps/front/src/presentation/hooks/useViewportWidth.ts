import { useCallback, useEffect, useState } from "react"

const useViewportWidth = () => {
    const [width, setWidth] = useState(0)

    const setSize = useCallback(() => {
        setWidth(window.innerWidth || 0)
    }, [])

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('resize', setSize, { passive: true })
            window.addEventListener('orientationchange', setSize, { passive: true })
        }
    }, [])


    return width
}

export default useViewportWidth