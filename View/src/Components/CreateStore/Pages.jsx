import * as React from 'react';
import CreatePage from "./CreatePage";
import Button from '@mui/material/Button';


export default function AddPage() {
    const [addPages , setAddPages] = React.useState(false)
    
    return(
        <>
        <CreatePage />
        <Button onClick={()=>{setAddPages(true)}}>+</Button><br />
        
        
        {(addPages) ? <CreatePage /> : ''}
        </>
    )
}