import { CardList } from "../../components/CardList/CardList";
import { getListCar } from "../../redux/operations/rentOperation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectlistCar } from "../../redux/selectors/rentSelectors";
import s from './Favorite.module.scss'

export const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCar());
  }, []);

  const listCar = useSelector(selectlistCar);



  return (
    <>
      <h1 className={s.title}>Обрані авто</h1>
      <CardList array={listCar.filter(item=>item.favorite===true)}/>
    </>
  );
};
