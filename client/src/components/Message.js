import React from 'react';

type messageProps = {
    msg: String
}

const Message:React.FC<messageProps> = (props:messageProps) => {
    const {msg} = props;
    return (
        <div className="alert alert-info alert-dismissible fade show mt-5" role="alert">
            {msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Message;