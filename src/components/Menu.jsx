import React from 'react';
import {Popup, List, Button, Image, Input, Icon} from 'semantic-ui-react'

// Компонент отображает книгу в корзине
const CartComponent = ({title, id, image, removeFromCart}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content>
                <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ( { totalPrice, count, items, searchQuery, setSearchQuery } ) => {


    return (
        <div className="menu">
            <div className="menu__item"
                name='browse'
                onClick={this}>
                <img src="logo2.png" className="logo" alt="logo"/>
            </div>
<div className="communications-wrap">
            <div className="phone communication">
            <a href="tel:+380636930963">+38 (063) 693-09-63</a></div>
            <div className="telegram communication">
                <a href="tg://resolve?domain=<USERNAME>"> @ music _ store </a>
            </div>
</div>
            <div className="menu__item">
                <Input className="search"
                       action={{ icon: 'search' }}
                       onChange={e => setSearchQuery(e.target.value)}
                       value={searchQuery}
                       placeholder="введите запрос..."
                />
            </div>

            <div className="menu__items-wrap wrap">
            <div className="menu__item"
                    onClick={this}>
                    Итого:&nbsp;<b>{ totalPrice }</b>&nbsp;руб.
                </div>

                <Popup
                    trigger={
                        <div className="menu__item"
                            name='help'
                            onClick={this}
                        ><Icon name="shopping cart" size='large'/>
                             (<b>{ count }</b>)
                        </div>
                    }
                    content= { count > 0 ? items.map(book => <CartComponent {...book} />) : 'В корзине пусто...' }
                    on="click"
                />
            </div>



            </div>
    )};

export default MenuComponent;

