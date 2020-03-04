import React from 'react';

const Contacts = () => {
    return (
        <div className="other_pages">
            <h1>Контакты</h1>

            <div className="contacts">
                <dl>
                    <div className="contacts__address clearfix">
                        <dt>Адрес</dt>
                        <dd>
                            01002, г. Киев,<br/>
                            ул. Пушкинськая, 20A (ст. м. Театральная)
                        </dd>
                    </div>

                    <div className="contacts__phone clearfix">
                        <dt>Телефон</dt>
                        <dd>
                            +380 (67) 540-40-70<br/>
                            +380 (67) 450-40-70
                        </dd>
                    </div>

                    <div className="contacts__email clearfix">
                        <dt>Email</dt>
                        <dd>
                            hello@domain.com
                        </dd>
                    </div>

                    <div className="contacts__schedule clearfix">
                        <dt>Работаем</dt>
                        <dd>
                            вт-вс: с 10:00 до 20:00<br/>
                            пн: с 13:00 до 19:00
                        </dd>
                    </div>

                </dl>
            </div>
        </div>
    );
};

export default Contacts;