import React from 'react';

const Checkout = () => (
        <div className="checkout">
            <form className="form" action="#"  noValidate autoComplete="">

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

                <button type="submit"  onClick={this}>Подтвердить</button>

            </form>
        </div>
    );

export default Checkout;