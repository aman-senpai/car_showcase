import { CarProps } from "@/types";
import React from "react";

interface CarDetailsPops {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsPops) => {
    return <div>CarDetails</div>;
};

export default CarDetails;
