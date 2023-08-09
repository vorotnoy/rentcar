import s from "./Card.module.scss";
import svg from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";
import { addFavoriteCar } from "../../redux/operations/rentOperation";
import { useEffect } from "react";

const text = (data, number) => {
  return data.split(",")[number];
};

export const CardItem = ({ data, openModal, idCard }) => {
  const dispatch = useDispatch();

  const modalOpen = () => {
    openModal(), idCard(data.id);
  };

  const addFavorite = () => {
    const currentState = data.favorite ? false : true;
    const newData = {
      ...data,
      favorite: currentState,
    };
    dispatch(addFavoriteCar(newData));
  };
  return (
    <>
      <div className={s.cardWrapper}>
        <div className={s.image_wrapper}>
          <img src={data.img} alt={data.model} className={s.image} />
          <svg
            width="24"
            height="24"
            className={s.svg_favorite}
            onClick={addFavorite}
          >
            {data.favorite && <use href={svg + "#icon-favorite"}></use>}
            {!data.favorite && <use href={svg + "#icon-favorite0"}></use>}
          </svg>
        </div>
        <div className={s.titleLine}>
          <p className={s.title}>
            {data.make}
            <span className={s.title_model}> {data.model}, </span>
            {data.year}
          </p>
          <p className={s.title_price}>{data.rentalPrice}</p>
        </div>
        <div className={s.textBlock}>
          <div className={s.textLine}>
            <p className={s.text}>{text(data.address, 1)}</p>
            <p className={s.text}>{text(data.address, 2)}</p>
            <p className={s.text}>{data.rentalCompany}</p>
            <p className={s.text_last}></p>
          </div>
          <div className={s.textLine}>
            <p className={s.text}>{data.type}</p>
            <p className={s.text}>{data.model}</p>
            <p className={s.text}>{data.mileage}</p>
            <p className={s.text_last}>{data.accessories[0]}</p>
          </div>
        </div>
        <button className={s.button} onClick={modalOpen}>
          Learn more
        </button>
      </div>
    </>
  );
};
