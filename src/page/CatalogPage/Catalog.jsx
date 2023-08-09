import { Outlet } from "react-router-dom";
import s from './Catalog.module.scss'
import { CardList } from "../../components/CardList/CardList";
import { FilterBlock } from "../../components/FilterBlock/FilterBlock";
import { getListCar } from "../../redux/operations/rentOperation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectlistCar } from "../../redux/selectors/rentSelectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const [arrayFilter, setArrayFilter] =useState(null)
  useEffect(() => {
    dispatch(getListCar());
  }, []);
  const listCar = useSelector(selectlistCar);
  return (
    <>
      <h1 className={s.title}>Каталог авто</h1>
      <FilterBlock data={setArrayFilter}/>
      {arrayFilter&&<CardList array = {arrayFilter}/>}
      {!arrayFilter&&<CardList array = {listCar}/>}
    </>
  );
};
