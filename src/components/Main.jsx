import React from 'react';
import Manufacturers from "./App";
import {Card} from "semantic-ui-react";
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Manufacturers from '../containers/Manufacturers';
import BookCard from '../containers/BookCard';

const Main = () => {
    return (
        <main>
            <Manufacturers />
            <div>
                <Filter />
                <Card.Group itemsPerRow={3}>
                    {!isReady
                        ? 'Загрузка...'
                        : books.map((book, i) => (
                            <BookCard key={i} {...book}/>
                        ))
                    }
                </Card.Group>
            </div>
        </main>
    );
};

export default Main;