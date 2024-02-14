import "../Admin/Admin.css";
import Icon from '@mdi/react';

import { mdiCarBack,mdiPlus, mdiTrashCan, mdiUpdate, mdiFactory, mdiCarSports} from '@mdi/js';

import { mdiCarKey, mdiChartAreaspline, mdiAccountAlert, mdiFaceAgent, mdiPalette, mdiBasket, mdiCarInfo, mdiInvoiceText, mdiOfficeBuildingOutline, mdiCash, mdiAccountGroup } from '@mdi/js';

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


	return (
		<div className="row">
			<div className="col-2">
				<div className="height">

					<nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
						<div className="position-sticky">
							<div className="list-group list-group-flush mx-3 mt-4">

								<button className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
									<Icon path={mdiCarKey} size={1} />
									<span>Car dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiChartAreaspline} size={1} />
									<span>Model dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiAccountAlert} size={1} />
									<span>User dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiFaceAgent} size={1} />
									<span>Customer dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiPalette} size={1} />
									<span>Color dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiBasket} size={1} />
									<span>Order dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiCarInfo} size={1} />
									<span>Rental dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiInvoiceText} size={1} />
									<span>Invoice dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiOfficeBuildingOutline} size={1} />
									<span>Corporate dashboard</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiAccountGroup} size={1} />
									<span>Users</span>
								</button>

								<button className="list-group-item list-group-item-action py-2 ripple">
									<Icon path={mdiCash} size={1} />
									<span>Sales</span>
								</button>

							</div>
						</div>
					</nav>


				</div>
			</div>
					<div className="col-10">
						<AddCar />
					</div>
		</div>

	)
}

export default Admin