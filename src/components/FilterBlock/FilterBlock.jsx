import s from "./FilterBlock.module.scss";
import { SelectItem } from "../Selector/Selector";
import shortid from "shortid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectlistCar } from "../../redux/selectors/rentSelectors";
import svg from "../../assets/icons/sprite.svg";

export const FilterBlock = ({ data }) => {
  const [makeCar, setMakeCar] = useState(null);
  const [cost, setCost] = useState(null);
  const [milesFrom, setMilesFrom] = useState(null);
  const [milesTo, setMilesTo] = useState(null);
  const [reset, setReset] = useState();
  const list = useSelector(selectlistCar);

  const uniqListCar = () => {
    let array = [];
    [...new Set(getListMake())].map((item) => {
      array.push({
        value: shortid.generate(),
        label: item,
      });
    });
    return array;
  };

  const getListMake = () => {
    let arrayMakeCar = [];
    list?.map((item) => {
      arrayMakeCar.push(item.make);
    });
    return arrayMakeCar;
  };

  const getListRent = () => {
    let arrayMakeCar = [];
    list?.map((item) => {
      arrayMakeCar.push(Number(item.rentalPrice.slice(1)));
    });
    return Math.max.apply(null, arrayMakeCar);
  };
  const createArrayCost = () => {
    let arrayCost = [];
    let i = 10;
    while (i < getListRent()) {
      arrayCost.push({
        value: shortid.generate(),
        label: i,
      });
      i = i + 10;
    }
    return arrayCost;
  };

  const addFilter = (e) => {
    e.preventDefault();
    let array = list;

    if (makeCar) {
      array = array.filter((item) => item.make === makeCar.label);
    }
    if (cost) {
      array = array.filter(
        (item) => Number(item.rentalPrice.slice(1)) < cost.label
      );
    }
    if (milesFrom) {
      array = array.filter((item) => item.mileage > milesFrom);
    }
    if (milesTo) {
      array = array.filter((item) => item.mileage < milesTo);
    }
    return data(array);
  };

  const resetAll = () => {
    data(list);
  };

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <form className={s.filterWrapper} onSubmit={addFilter}>
          <label className={s.labelTitle}>
            <p>Car brand</p>
            <SelectItem
              make={setMakeCar}
              data={uniqListCar()}
              title={"Enter car's brand"}
              name={"brand"}
              value={reset}
              typeSelect ='react-select-container_brand'
            />
          </label>
          <label className={s.labelTitle}>
            <p>Price/ 1 hour</p>
            <SelectItem
              make={setCost}
              data={createArrayCost()}
              title={"To $"}
              name={"cost"}
              value={reset}
              typeSelect='react-select-container_cost'
            />
          </label>
          <label className={s.labelTitle}>
            <p>Car mileage / km</p>
            <input
              className={s.inputMileUp}
              onChange={(e) => setMilesFrom(e.currentTarget.value)}
              placeholder="From"
            />
            <input
              className={s.inputMileTo}
              onChange={(e) => setMilesTo(e.currentTarget.value)}
              placeholder="TO"
            />
          </label>
          <button className={s.button} type="submit">
            Search
          </button>
        </form>
        <button onClick={resetAll} type="button" className={s.button}>Reset
        </button>
      </div>
    </section>
  );
};
