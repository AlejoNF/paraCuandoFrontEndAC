import styles from '../styles/Card.module.css';

export default function Card() {
  return (
    <div>
      <section className="pl-20 pt-20 ">
        <h2 className="pl-20 mdfont-sans text-black-600 text-2xl title-font font-bold pb-0  pt-5">
          Title
        </h2>
        <h3 className="pl-20 font-sans text-gray-400 text-1xl title-font font-bold pb-1 ">
          Subtitle
        </h3>
      </section>

      <div className={styles.card_location}>
        <div className={styles.card__container_location}>
          <article className={styles.card}>
            <header className={styles.card__header}>
              <img className="w-373 h-244" src="/Bts.png" alt="atoms-img" />

              <div className={styles.card__container_status}>
                <div className={styles.like}>
                  <img
                    src="/img/2=like.png"
                    alt="like-img"
                    className={styles.like_pink}
                  />
                </div>
              </div>
            </header>

            <section className={styles.card__body}>
              <h3 className=" text-slate-600 text-2xl title-font font-bold text-blue pb-2">
                Title 1
              </h3>
              <ul>
                <li>
                  <span className="text-gray-600 text-base pb-1 p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quo maxime, neque corrupti itaque animi.
                  </span>
                </li>
                <li>
                  <span className="no-underline text-blue-600 font-normal">
                    Texts 2
                  </span>
                </li>
                <li>
                  <span className="no-underline text-black font-normal">
                    Text 3
                  </span>
                </li>
              </ul>
            </section>
          </article>

          <article className={styles.card}>
            <header className={styles.card__header}>
              <img className="w-373 h-244" src="/Zara.png" alt="atoms-img" />

              <div className={styles.card__container_status}>
                <div className={styles.like}>
                  <img
                    src="/img/2=like.png"
                    alt="like-img"
                    className={styles.like_pink}
                  />
                </div>
              </div>
            </header>

            <section className={styles.card__body}>
              <h3 className=" text-slate-600 text-2xl title-font font-bold text-blue pb-2">
                Title 1
              </h3>
              <ul>
                <li>
                  <span className="text-gray-600 text-base pb-1 p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quo maxime, neque corrupti itaque animi.
                  </span>
                </li>
                <li>
                  <span className="no-underline text-blue-600 font-normal">
                    Texts 2
                  </span>
                </li>
                <li>
                  <span className="no-underline text-black font-normal">
                    Text 3
                  </span>
                </li>
              </ul>
            </section>
          </article>

          <article className={styles.card}>
            <header className={styles.card__header}>
              <img className="w-373 h-244" src="/Lady.png" alt="Zara-img" />

              <div className={styles.card__container_status}>
                <div className={styles.like}>
                  <img
                    src="/img/2=like.png"
                    alt="like-img"
                    className={styles.like_pink}
                  />
                </div>
              </div>
            </header>

            <section className={styles.card__body}>
              <h3 className=" text-slate-600 text-2xl title-font font-bold text-blue pb-2">
                Title 1
              </h3>
              <ul>
                <li>
                  <span className="text-gray-600 text-base pb-1 p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quo maxime, neque corrupti itaque animi.
                  </span>
                </li>
                <li>
                  <span className="no-underline text-blue-600 font-normal">
                    Texts 2
                  </span>
                </li>
                <li>
                  <span className="no-underline text-black font-normal">
                    Text 3
                  </span>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>
      <div className="ml-[90%] absolute top-[390px]">
        <img src="/next.png" alt="btn-next" />
      </div>
    </div>
  );
}
