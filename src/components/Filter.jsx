import React from 'react'
import { Dropdown} from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery, setDisplaying}) => {

    // sort popup list (Dropdown from semantic ui)
    const optionsSorting = [
        {key: 1, text: 'Все', value: 'all'},
        {key: 2, text: 'От дорогих к дешевым', value: 'price_high'},
        {key: 3, text: 'От дешевых к дорогим', value: 'price_low'},
        {key: 4, text: 'По производителям', value: 'author'},
    ];

    const optionsDisplaying = [
    {key: 5, text: '10', value: 10},
    {key: 6, text: '25', value: 25},
    {key: 7, text: '50', value: 50},
];

    const sortgoods = (obj) => {
        switch (obj.value) {

            case 'price_high':
                setFilter('price_high');
                break;
            case 'price_low':
                setFilter('price_low');
                break;
            case 'author':
                setFilter('author');
                break;

            case 'all':
            default:
                setFilter('all');
        }
    };

    const displaygoods = (obj) => {
        switch (obj.value) {

            case 10:
                setDisplaying(10);
                break;
            case 25:
                setDisplaying(25);
                break;
            case 50:
                setDisplaying(50);
                break;
            case 100:
                setDisplaying(100);
                break;

            default:
                setDisplaying(50);
        }
    };


    const renderComponentDropdown = (options, action, description, textPlaceholder) => {
        return (
            <div className="dropdown-panel">
                <span>{description}&nbsp;</span>
                <Dropdown
                    className="dropdown"
                    options={options}
                    button
                    selection
                    onChange={(e, obj) => action(obj)}
                    placeholder={textPlaceholder}
                />
            </div>
        )
    };



    return (
<div className="dropdown-wrap wrap">
            {renderComponentDropdown(optionsSorting, sortgoods, 'Сортировать:', "Все")}
            {renderComponentDropdown(optionsDisplaying, displaygoods, 'Показывать:', "10")}
</div>
    );
};

export default Filter;