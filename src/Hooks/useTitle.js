import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Taste of Japan`;
    }, [title])
}

export default useTitle;