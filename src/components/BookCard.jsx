import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";

// параметры будут браться из props
const BookCard = (book) => {
    const {title, description, price, image, addToCart, addedCount} = book;

    return (
        <Card>
            <Link to={`/models/${title}`}>
            <Image src={image}/>
            </Link>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{description}</span>
                </Card.Meta>

            </Card.Content>
            <Card.Content extra>
                <a className="price">
                    {price} <b>грн</b>
                </a>
            </Card.Content>
            <div className="button-wrap"><Button onClick={addToCart.bind(this, book)}>Добавить в
                корзину {addedCount > 0 && `(${addedCount})`}</Button></div>
        </Card>
    )
};

export default BookCard;

