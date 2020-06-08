import React from 'react';


// will be in the GET-request along with the name and phone number, also the id of the purchased goods
const renderCheckoutItems = (items) => {

    let content = [];
    for (let i = 0; i < items.length; i++) {

        content.push(
            <input type="text" name="itemId" defaultValue={items[i].id} key={items[i].id + '_' + i} />
        );
    }
    return content;
};


const Checkout = ({items}) => (
    <div className="checkout">
        <form className="form" action="#" noValidate autoComplete="">

            <fieldset className="main-data">
                <legend className="main-data__legend">Оформление заказа</legend>

                <div className="form__group">
                    <label htmlFor="user_name"></label>
                    <input className="bg-img" type="text" name="user_name" id="user_name" placeholder="Имя"
                           required/>
                </div>

                <div className="form__group">
                    <label htmlFor="user_tel"></label>
                    <input className="bg-img" type="tel" name="user_tel" id="user_tel" placeholder="Телефон"
                           required/>
                </div>


            </fieldset>

<div className="invisible-cartItems">
                {renderCheckoutItems(items)}
</div>


            <button type="submit" onClick={this}>Подтвердить</button>

        </form>
    </div>
);

export default Checkout;