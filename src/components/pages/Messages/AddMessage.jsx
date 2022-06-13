import React from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const AddMessage = ({addMessHandler, message, setMessage}) => {
    return (
        <div className="add__messages__container">
            <form onSubmit={addMessHandler}>
                <input type="text" placeholder="Send Message" value={message} onChange={e => setMessage(e.target.value)}/>
                <button type="submit">
                    <SendRoundedIcon sx={{color: "#fff"}}/>
                </button>
            </form>
        </div>
    )
}

export default AddMessage