export interface IProductItemCard {
    id: string;
    title: string;
    caption?: string;
    details?: IProductItemCardDetails;
    description?: string;
    image?: string;
    backgroundColor?: string;
}

export interface IProductItemCardDetails {
    time: number;
    timeMeasure: string;
    rate: number;
    amount: number;
    amountMeasure: string;
}

export interface CreditItemCardProps {
    cardInfo?: IProductItemCard;
    infoClickEvent?: () => void;
    buttonClickEvent?: () => void;
}
