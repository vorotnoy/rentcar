import s from "./CardList.module.scss";
import { CardItem } from "../CardItem/Card";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCar } from "../../redux/operations/rentOperation";
import { selectlistCar } from "../../redux/selectors/rentSelectors";

export const CardList = ({ array }) => {
  const itemOnPage = 8;
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  const [cardId, setCardId] = useState("");
  const [curPage, setCurPage] = useState(1);

  const loadMore = async () => {
    setCurPage(curPage + 1);
  };

  const currentArray = array.slice(0, curPage * itemOnPage);

  return (
    <section className={s.container}>
      <ul className={s.listWrapper}>
        {array &&
          currentArray.map((item) => (
            <li key={item.id}>
              <CardItem
                data={item}
                openModal={handleModalWindowOpen}
                idCard={setCardId}
              />
            </li>
          ))}
      </ul>
      {array && curPage * itemOnPage < array.length && (
        <button onClick={loadMore} className={s.load}>
          Load more
        </button>
      )}
      {array.length == 0 && (
        <h3 className={s.titleEmpty}>Нема авто з такими даними</h3>
      )}
      {showModalWindow && (
        <Modal onClose={handleModalWindowClose} cardID={cardId} />
      )}
    </section>
  );
};
