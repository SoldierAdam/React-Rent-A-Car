import "../Admin/Admin.css";
import Icon from '@mdi/react';
import { mdiCarBack,mdiPlus, mdiTrashCan, mdiUpdate, mdiFactory, mdiCarSports} from '@mdi/js';
import AddCar from "./AddCar";

type Props = {}

function Admin({ }: Props) {


    return (
        <div>
            <div className="accordion">
                <li className="accordion-item" id="profile">
                    <a href="#profile" className="btn">
                        <Icon path={mdiCarBack} size={1} />
                        Car
                    </a>
                    <div className="accordion-item__sub">
                        <a href="#"> <Icon path={mdiPlus} size={1} /> Add Car</a>
                        <a href="#"> <Icon path={mdiTrashCan} size={1} /> Delete Car</a>
                        <a href="#"> <Icon path={mdiUpdate} size={1} /> Update Car</a>
                    </div>
                </li>
                <li className="accordion-item" id="messages">
                    <a href="#messages" className="btn">
                    <Icon path={mdiFactory} size={1} />
                         Brand
                    </a>
                    <div className="accordion-item__sub">
                        <a href="#"> <Icon path={mdiPlus} size={1} /> Add New Brand</a>
                        <a href="#"> <Icon path={mdiTrashCan} size={1} /> Delete Brand</a>
                        <a href="#"> <Icon path={mdiUpdate} size={1} /> Update Brand</a>
                    </div>
                </li>
                <li className="accordion-item" id="settings">
                    <a href="#settings" className="btn">
                    <Icon path={mdiCarSports} size={1} />
                         Model
                    </a>
                    <div className="accordion-item__sub">
                        <a href="#"> <Icon path={mdiPlus} size={1} /> Add New Model</a>
                        <a href="#"> <Icon path={mdiTrashCan} size={1} /> Delete Model</a>
                        <a href="#"> <Icon path={mdiUpdate} size={1} /> Update Model</a>
                    </div>
                </li>
                <li className="accordion-item">
                    <a href="#" className="btn">
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                    </a>
                </li>
            </div>
        </div>
    )
}

export default Admin