import React from 'react';
import {Popup, List, Button, Image, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";
// Компонент отображает книгу в корзине
const CartComponent = ({title, id, image, removeFromCart}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content>
                <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ({totalPrice, count, items, searchQuery, setSearchQuery}) => {


    return (
        <div className="menu">
            <div className="menu__item"
                 name='browse'
                 onClick={this}>
                <Link to="/"><img src="logo2.png" className="logo" alt="logo"/></Link>
            </div>

                <div className="phone communication">
                    <a href="tel:+380636930963">+38 (063) 693-09-63</a></div>
                <div className="telegram communication">
                    <a href="tg://resolve?domain=<USERNAME>"> @ music _ store </a>
                </div>

            <div className="menu__item">
                <div className="ui action input search">
                    <input
                        action={{icon: 'search'}}
                        type="text"
                        placeholder="введите запрос..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}/>
                    <Link to="/" className="ui button"><i className="fa fa-search"></i></Link>
                </div>

            </div>

            <div className="menu__items-wrap wrap">
                <div className="menu__item"
                     onClick={this}>
                    Итого:&nbsp;<b>{totalPrice}</b>&nbsp;грн.
                </div>

                <Popup
                    trigger={
                        <div className="menu__item"
                             name='help'
                             onClick={this}
                        ><Icon name="shopping cart" size='large'/>
                            (<b>{count}</b>)
                        </div>
                    }
                    content={count > 0 ? <div>
                            {items.map(item => <CartComponent {...item} key={item.id}/>)}
                            <Link className="popup-checkout" to="/checkout">
                                    <div
                                        className="checkout__button"
                                    >Оформить<br/>заказ
                                    </div>
                            </Link>
                        </div>
                        : 'В корзине пусто...'
                    }
                    on="click"
                />
            </div>


        </div>
    )
};

export default MenuComponent;

