import React from 'react'

const Manufacturers = ({checkboxManufacturers, setCheckboxManufacturers}) => {

    // Функция для формирования и помещения в разметку checkboxes c производителями
    const renderLiCheckboxes = (checkboxManufacturers, setCheckboxManufacturers) => {
        let content = [];
        for (let i = 0; i < checkboxManufacturers.length; i++) {

            content.push(
                <li className="form__list-item" key={`checkbox_${checkboxManufacturers[i].name}`}>
                    <label>
                        <input type="checkbox" value={i}
                               onChange={e => setCheckboxManufacturers(e.target.value)}
                               name={checkboxManufacturers[i].name}
                               checked={checkboxManufacturers[i].switcher}
                        />

                        {checkboxManufacturers[i].name}
                    </label>
                </li>
            );
        }

        return content;
    };




    return (
        <div className='manufacturers-wrap'>
            <div className="manufacturers__section">
                <h2>Уточнить Поиск</h2>
            </div>
            <div className="manufacturers__section">
                <h3>Производители</h3>
            </div>
            <div className="manufacturers__section">
                <form className='manufacturers'>
                    <ul className="form__list">
                        {renderLiCheckboxes(checkboxManufacturers, setCheckboxManufacturers)}
                    </ul>
                </form>
            </div>
        </div>
    )
};

export default (Manufacturers);