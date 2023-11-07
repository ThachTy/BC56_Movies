import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
function NotFound({ children }) {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => navigate("/"), 3000);
    }, [])


    return (
        <div>{children}</div>
    )
}



export default memo(NotFound);