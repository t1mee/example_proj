import React, { Fragment } from "react";

import {Header} from "../components/Header";
import {Table} from "../components/Table"
import {Bottom} from "../components/Bottom"

export const Home = () =>  (    
    <Fragment>
            <Header /> 
            <div className="row my-4 my-cards-style">
                <div className="col-sm-6 px-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ваш профиль</h5>
                            <p className="card-text">
                                <b>Научная степень: </b> Магистр <br/>
                                <b>Специализация: </b> Инвестиционные проблемы экономически развивающихся рынков.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Статистика</h5>
                            <p className="card-text">
                                <b>На платформе: </b> 2 года. <br/>
                                <b>Добавлено работ: </b> 10.<br/>
                                <b>Средняя уникальность: </b> 75%. <br/>
                                <b>Языки работ: </b> русский, английский.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
            <Table />  
            <Bottom />
    </Fragment>

)