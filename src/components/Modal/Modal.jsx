import PropTypes from "prop-types";
import React, { useEffect, useCallback, useState } from "react";
import { BackdropModal } from "../BackdropMain/Backdrop";
import s from "./Modal.module.scss";
import svg from "../../assets/icons/sprite.svg";
import shortid from "shortid";
import { selectlistCar } from "../../redux/selectors/rentSelectors";
import { useDispatch, useSelector } from "react-redux";

const text = (data, number) => {
  return data.split(",")[number];
};

export const Modal = ({ onClose, cardID }) => {
  const listOfCar = useSelector(selectlistCar);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const currentCar = listOfCar?.find((item) => {
    return item.id === cardID;
  });

  const getNumber = (data) => {
    let miles = data.toString().split("");
    if (miles.length > 3) {
      miles.splice((miles.length-3), 0, ",")
      return miles.join('');
    }
  };


  return (
    <BackdropModal closeModal={onClose}>
      <div className={s.modalWrapper}>
        <div className={s.modalBlock}>
          <svg width="24" height="24" className={s.svg_close} onClick={handleClose}>
            <use href={svg + "#icon-close"}></use>
          </svg>
          <div className={s.image_wrapper}>
          <img src={currentCar.img} alt={currentCar.model} className={s.image} />
          </div>
          <h1 className={s.title}>
            {currentCar.make}
            <span className={s.title_model}> {currentCar.model}, </span>
            {currentCar.year}
          </h1>
          <div className={s.textBlock}>
            <div className={s.textLine}>
              <p className={s.text}>{text(currentCar.address, 1)}</p>
              <p className={s.text}>{text(currentCar.address, 2)}</p>
              <p className={s.text}>id: {currentCar.id}</p>
              <p className={s.text}>Year: {currentCar.year}</p>
              <p className={s.text_last}>Type: {currentCar.type}</p>
            </div>
            <div className={s.textLine}>
              <p className={s.text}>
                Fuel Consumption: {currentCar.fuelConsumption}
              </p>
              <p className={s.text}>Engine Size: {currentCar.engineSize}</p>
            </div>
          </div>
          <p className={s.desc}>{currentCar.description}</p>
          <div className={s.textBlock}>
            <h3 className={s.blockTitle}>Accessories and functionalities:</h3>
            <div className={s.textLine}>
              {currentCar.accessories.map((item) => {
                return (
                  <p className={s.text} key={shortid.generate()}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>

          <div className={s.rentalBlock}>
            <h3 className={s.blockTitle}>Rental Conditions:</h3>
            {currentCar.rentalConditions.split("\n").map((item) => {
              return (
                <p className={s.conditionText} key={shortid.generate()}>
                  {item}
                </p>
              );
            })}
            <p className={s.conditionText}>
              Mileage:
              <span className={s.speciafText}>
                {getNumber(currentCar.mileage)}
              </span>
            </p>
            <p className={s.conditionText}>
              Price:
              <span className={s.speciafText}>{currentCar.rentalPrice}</span>
            </p>
          </div>
          <a href='tel:+380730000000' className={s.button}><span> Rental car</span></a>
        </div>
      </div>
    </BackdropModal>
  );
};

Modal.propTypes = {
  // title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  // children: PropTypes.node.isRequired,
};
