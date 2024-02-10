import "../Admin/Admin.css";
import Icon from '@mdi/react';
import { mdiCarKey, mdiChartAreaspline,mdiAccountAlert,mdiFaceAgent,mdiPalette,mdiBasket, mdiCarInfo, mdiInvoiceText, mdiOfficeBuildingOutline, mdiCash, mdiAccountGroup } from '@mdi/js';

type Props = {}

function Admin({ }: Props) {

    

    return (
        <div>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                            <Icon path={mdiCarKey} size={1} />
                            <span>Car dashboard</span>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiChartAreaspline} size={1} />
                            <span>Model dashboard</span>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiAccountAlert} size={1} />
                            <span>User dashboard</span>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiFaceAgent} size={1} />
                            <span>Customer dashboard</span>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiPalette} size={1} />
                            <span>Color dashboard</span>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                        <Icon path={mdiBasket} size={1} />
                        <span>Order dashboard</span></a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiCarInfo} size={1} />
                        <span>Rental dashboard</span></a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiInvoiceText} size={1} />
                        <span>Invoice dashboard</span></a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiOfficeBuildingOutline} size={1} />
                        <span>Corporate dashboard</span></a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiAccountGroup} size={1} />
                            <span>Users</span>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                            <Icon path={mdiCash} size={1} /><span>Sales</span>
                        </a>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Admin