import "./AnalyticPage.css";

import CarsReqSection from "./CarsReqSection/CarsReqSection";
import OrdersReqSection from "./OrdersReqSection/OrdersReqSection";
import AccountsReqSection from "./AccountsReqSection/AccountsReqSection";
import PaymentsReqSection from "./PaymentsReqSection/PaymentsReqSection";

const AnalyticPage: React.FC = () => {
    return (
        <main id="analytic_page">
            <AccountsReqSection></AccountsReqSection>
            <CarsReqSection></CarsReqSection>
            <OrdersReqSection></OrdersReqSection>
            <PaymentsReqSection></PaymentsReqSection>
        </main>
    );
}

export default AnalyticPage;