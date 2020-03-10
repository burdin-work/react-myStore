import React from 'react';

const MoreGoods = ({numDisplays, setMoreGoods}) => {


    return (
        <div className="moregoods">
            <div
                className="moregoods__button"
                onClick={setMoreGoods.bind(this, numDisplays)}
            >Показать еще
            </div>
        </div>
    );

};

export default MoreGoods;