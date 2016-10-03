import React from 'react';

const Title = ({todoCount}) => {
    return (
        <div>
            <div>
                <h2>Todo List ({todoCount})</h2>
            </div>
        </div>
    );
};

export default Title;