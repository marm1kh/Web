import React, {useState} from 'react';
import './PizzaCard.css';
import pizza from '../image/pizza.jpg';
import icon from '../image/icon.svg';

function PizzaCard() {
    const [count, setCount] = useState(1);

    function Addition() {
        setCount(count + 1);
    };

    function Subtraction() {
        if (count > 1) {
            setCount(count - 1);
        };
    };

    return (
        <div className='PizzaCard'>
            <div className='wrapper'>
                <div>
                    <img  className='pizza_img' src={pizza} alt="pepperoni" />
                    <div className='bestseller'>Хит сезона</div>  
                </div>  
                <div className='main'>
                    <h3 className='title'>Пепперони</h3>
                    <p className='description'>Ничего лишнего! Томатный соус, колбаски
                    Пепперони и Моцарелла 
                    </p>
                    <select className="sizeSelect" name="size" id="">
                        <option disabled selected>Диаметр</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                    </select>
                    <p className='price'>от 550 ₽</p>
                    <div className='counter'>
                        <button className='btn' onClick={Subtraction}>-</button>
                        <div className='count'>{count}</div>
                        <button className='btn' onClick={Addition}>+</button>
                        <div className='cartImage'><img src={icon}  className='img_btn'onClick={() => {
                                alert(`Количество позиций: ${count}`);
                            }}
                        /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard