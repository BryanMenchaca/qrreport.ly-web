import React from 'react'
import './alumno.css'

//import InfoSkeleton from '../../skeleton/Alumno/Info'

import Info from './components/Info'
import FichaMedica from './components/FichaMedica'
import Historial from './components/Historial'
import Opciones from './components/Opciones'

const index = () => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-4"> { /* Left content section */ }
                    <Info/>
                    <Opciones/>
                </div>
                <div className="col-md-8"> { /* Right content section */ }
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-historial" role="tab" aria-controls="pills-home" aria-selected="true">
                                Historial
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-ficha" role="tab" aria-controls="pills-profile" aria-selected="false">
                                Ficha médica
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-info" role="tab" aria-controls="pills-contact" aria-selected="false">
                                Más información
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-historial" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Historial/>
                        </div>
                        <div class="tab-pane fade" id="pills-ficha" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <FichaMedica/>
                        </div>
                        <div class="tab-pane fade" id="pills-info" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
