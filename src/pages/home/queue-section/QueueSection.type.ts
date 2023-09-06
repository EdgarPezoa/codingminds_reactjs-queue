import Order from "../../../api/order"

type IQueueSectionProps = {
    orders: Order[],
    getOrder():Order | null;
}

export default IQueueSectionProps;
