import "./OrderForm.css";
import "./../../FormBase.css";
import React, { useState } from "react";

const OrderForm : React.FC = () => {
    const [startAdressValue, setStartAdressValue] = useState<string>("");
    const [endAdressValue, setEndAdressValue] = useState<string>("");

    const [isAdressesSubmitted, setIsAdressesSubmitted] = useState<boolean>(false);
    const [isCounted, setIsCounted] = useState<boolean>(false);
    const [isOpenAddAdress, setIsOpenAddAdress] = useState<boolean>(false);
    const [newAdressValue, setNewAdressValue] = useState<string>("");
    const [intermediateAdresses, setIntermediateAdresses] = useState<string[]>([]);

    function refreshAllStates() {
        setStartAdressValue("");
        setEndAdressValue("");
        setIsAdressesSubmitted(false);
        setIsCounted(false);
        setIsOpenAddAdress(false);
        setNewAdressValue("");
        setIntermediateAdresses([]);
    }

    const submitAdresses = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAdressesSubmitted(true);
    }

    const countOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsCounted(true);
    }

    function addAdress(e: React.FormEvent) {
        e.preventDefault();

        let newAdresses: string[] = Object.assign(intermediateAdresses);
        newAdresses.push(newAdressValue);
        setIntermediateAdresses(newAdresses);

        setIsOpenAddAdress(false);
    }

    function pay(e: React.FormEvent) {
        e.preventDefault();
        
        refreshAllStates();
    }

    return (
        <form className="form_base" id="order_form" onSubmit={(e: React.FormEvent) => pay(e)}>
            <div className="wrapper-adresses_block">
                <div className="wrapper-adresses_inputs">
                    <div className="input_wrapper">
                        <p>Начальный адрес</p>
                        <input type="text" placeholder="Точный адрес..." onChange={(e) => setStartAdressValue(e.target.value)}/>
                    </div>
                    <div className="input_wrapper">
                        <p>Конечный адрес</p>
                        <input type="text" placeholder="Точный адрес..." onChange={(e) => setEndAdressValue(e.target.value)}/>
                    </div>             
                </div>
                <button className="basic_button" id="submit_adresses" onClick={(e: React.FormEvent) => submitAdresses(e)}>Подтвердить адреса</button>             
            </div>
            {isAdressesSubmitted && 
                <div className="wrapper-adresses">
                    <div className="points_wrapper">
                        <h4>Начальный адрес:</h4>
                        <p>{startAdressValue}</p>                    
                    </div>
                    <div className="wrapper-intermediate_adresses">
                        {intermediateAdresses.map(adress => 
                            <div className="points_wrapper">
                                <h4>Промежуточный адрес: </h4>
                                <p>{adress}</p>                  
                            </div>                            
                        )}
                        <div className="clue_adresses">
                            {!isOpenAddAdress && 
                                <>
                                    <button className="add_button" onClick={(e: React.FormEvent) => {
                                        e.preventDefault();
                                        setIsOpenAddAdress(true);
                                    }}></button>
                                    {intermediateAdresses.length === 0 &&
                                        <p>— добавьте промежуточные адреса</p>                            
                                    }                                
                                </>
                            }
                            {isOpenAddAdress &&
                                <div>
                                    <input type="text" placeholder="Точный адрес..." onChange={(e) => setNewAdressValue(e.target.value)}/>
                                    <button className="basic_button" onClick={(e: React.FormEvent) => addAdress(e)}>Добавить</button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="points_wrapper">
                        <h4>Конечный адрес:</h4>
                        <p>{endAdressValue}</p>                  
                    </div>
                </div>            
            }
            <div className="input_wrapper">
                <p>Выберите тип поездки</p>
                <select name="trip_type" id="select_trip_type">
                    <option value="Такси">Такси эконом-класса</option>
                    <option value="Такси">Такси среднего класса</option>
                    <option value="Такси">Такси бизнес-класса</option>
                    <option value="Такси">Корпоративный заказ большого количества легковых автомобилей</option>
                    <option value="Такси">Доставка мелкогабаритного груза</option>
                    <option value="Такси">Доставка среднегабаритного груза</option>
                    <option value="Такси">Доставка крупногабаритного груза</option>
                    <option value="Такси">Аренда лемузина на свадьбу</option>
                </select>
            </div>

            {!isCounted &&
                <input onClick={(e: React.FormEvent) => countOrder(e)} type="submit" id="submit_button_yellow" className="submit_button" value="Рассчитать заказ"/>
            }
            {isCounted &&
                <>
                    <div className="points_wrapper">
                        <h4>Предварительная стоимость:</h4>
                        <p>300 BYN</p>
                    </div>            
                    <input type="submit" className="submit_button" value="Оплатить заказ"/>            
                </>
            }
        </form>
    );
}

export default OrderForm;