import s from "./Landing.module.scss";

const ItemBlock = ({ title, desc }) => {
  return (
    <div className={s.box}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.desc}>{desc}</p>
    </div>
  );
};

export const Landing = () => {
  return (
    <>
      <section className={s.wrapper}>
        <ItemBlock
          title="Доступно"
          desc="оренда авто дешевша поїздки на таксі"
        />
        <ItemBlock
          title="Просто"
          desc="оформлення документів максимально спрощено"
        />
        <ItemBlock
          title="Швидко"
          desc="вибір та процедура оренди - декілька хвилин"
        />
        <ItemBlock
          title="Зручно"
          desc="знаходь авто поруч та залишай там де зручно"
        />
      </section>
    </>
  );
};
