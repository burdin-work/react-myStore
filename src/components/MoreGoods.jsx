import React from 'react';

const MoreGoods = ({numDisplays, setMoreGoods, goodsLength}) => {

if(numDisplays < goodsLength) {
    return (
        <div className="moregoods">
            <div
                className="moregoods__button"
                onClick={setMoreGoods.bind(this, numDisplays)}
            >Показать еще
            </div>
        </div>
    );
}else {
    return <div> </div>
}
};

export default MoreGoods;