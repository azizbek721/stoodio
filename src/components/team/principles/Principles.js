import React from 'react';
import "./Principles.scss"

const Principles = () => {
    return (
        <div className="container mx-auto">
            <div className="principles flex justify-between items-start">
                <h3 className="principles-title">принципы в работе, которых придерживаемся внутри команды</h3>
                <div className="principles-right flex flex-col gap-y-14">
                    <div className="principles-div flex items-center gap-x-5">
                        <h1>01</h1>
                        <span></span>
                        <p>качество и скорость работы – прежде всего. Мы планируем свою работу и обсуждаем ожидаемый
                            результат на старте</p>
                    </div>
                    <div className="principles-div flex items-center gap-x-5">
                        <h1>02</h1>
                        <span></span>
                        <p>мы оптимизируем и автоматизируем процессы в компании, чтобы ничто не отвлекало от работы и
                            творчества</p>
                    </div>
                    <div className="principles-div flex items-center gap-x-5">
                        <h1>03</h1>
                        <span></span>
                        <p>всегда соблюдаем установленные договоренности. Выстраиваем прочные связи и сильную
                            репутацию</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Principles;
