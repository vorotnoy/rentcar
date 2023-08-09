import { Landing } from "../../components/Landing/Landing";
import s from "./Home.module.scss";
import mainImg from '/main.png'

export const HomePage = () => {
  return (
    <>
      <section className={s.wrapper}>
        <h1 className={s.title}>
          <span className={s.titleSpan}>Каршерінг</span> -оренда авто за
          допомогою смартфона
        </h1>
        <img src={mainImg} alt='Оренда авто ' className={s.mainImg}/>
      </section>
      <Landing />
    </>
  );
};
