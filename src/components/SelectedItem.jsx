import React from 'react'
import {Link} from "react-router-dom";
import {Button} from 'semantic-ui-react';


const SelectedItem = (props) => {
    let newProps = {...props};
    const {addToCart, addedCount, selectedItem} = props;
    if (selectedItem) newProps = Object.assign(newProps, selectedItem);

    if (selectedItem) {
        return (
            <div className="selected-item">
                <div className="selected-item__img img-fluid">
                    <img src={selectedItem.image} alt=""/>
                </div>
                <div className="product-list">
                    <div className="card">
                        <div className="card-header">
                            <h3>{selectedItem.title}</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{selectedItem.description}</li>
                            <li className="list-group-item"> </li>
                            <li className="list-group-item">Цена: <b>{selectedItem.price} грн</b></li>
                            <li className="list-group-item"> </li>
                            <li className="list-group-item">Код товара: {selectedItem.id}</li>
                        </ul>
                        <div className="button-wrap card__button"><Link to="/"><Button
                            onClick={addToCart.bind(this, newProps)}>Добавить в
                            корзину {addedCount > 0 && `(${addedCount})`}</Button></Link></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div> </div>
    }
};


export default SelectedItem;