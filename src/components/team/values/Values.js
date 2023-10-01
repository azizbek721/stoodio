import React, {useEffect, useState} from 'react';
import "./Values.scss"

const Values = () => {

    const [isValueFixed, setValueIsFixed] = useState(false);

    const handleScroll = () => {
        const container = document.querySelector('.values');
        const usefulTitle = document.querySelector('.values-title');
        const containerRect = container.getBoundingClientRect();

        if (usefulTitle && containerRect.top <= 15) {
            setValueIsFixed(true);
        } else {
            setValueIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleStyle = isValueFixed
        ? {position: 'sticky', top: '0'}
        : {};

    return (
        <div className="container mx-auto">
            <div className="values flex justify-between items-start">
                <div className="values-title-div" style={titleStyle}>
                    <h3 className="values-title">наши ценности</h3>
                </div>
                <div className="values-right flex flex-col gap-y-16">
                    <div className="values-div flex flex-col gap-y-4">
                        <h1>честность</h1>
                        <p>каждый специалист честен перед собой, командой и заказчиком. Мы не контролируем процессы, мы
                            обсуждаем результат</p>
                    </div>
                    <div className="values-div flex flex-col gap-y-4">
                        <h1>инициативность</h1>
                        <p>принес проблему – принеси решение и возьми ответственность за ее реализацию. Мы всегда готовы
                            выслушать или дать совет, если о нем просят</p>
                    </div>
                    <div className="values-div flex flex-col gap-y-4">
                        <h1>стиль</h1>
                        <p>создаем пространства, в которых нам бы хотелось находиться самим</p>
                    </div>
                    <div className="values-div flex flex-col gap-y-4">
                        <h1>культура отношений</h1>
                        <p>мы придерживаемся принципов адекватности и разумности. Любой вопрос можно решить в диалоге и
                            мы это приветствуем</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
