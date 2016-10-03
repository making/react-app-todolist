import React from 'react';

const Title = ({todoCount}) => {
    return (
        <div>
            <div>
                <h1>Todo List ({todoCount})</h1>
            </div>
        </div>
    );
};

export default Title;