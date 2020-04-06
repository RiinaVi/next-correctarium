import React, {useState} from "react";
import {NextPage} from "next";
import Layout from "../components/Layout";
// @ts-ignore
import CorrectMan from '../public/correct_man.svg'
// @ts-ignore
import Logo1 from '../public/telegram_ch_logo_ua.svg'
// @ts-ignore
import Logo2 from '../public/telegram_ch_logo.svg'

import Link from "next/link";

const Index: NextPage = () => {
    const [paragraphStyle, setParagraphStyle] = useState('section__p color');
    const [toggleStyle, setToggleStyle] = useState('showMistakes show');

    function showMistakes() {
        if (toggleStyle === 'showMistakes') {
            setToggleStyle('showMistakes show');
            setParagraphStyle('section__p color')
        } else {
            setToggleStyle('showMistakes');
            setParagraphStyle('section__p')
        }
    }

    return (
        <Layout>
            <section className="section ">
                <div className="section__item ">
                    <CorrectMan/>
                </div>
                <div className="section__item min-w635"><h1 className="h1">Срочная проверка текста редакторами</h1>
                    <h2 className="contactUs__h2">Correctarium — это самый удобный и надежный способ избавить текст
                        от ошибок. Вставьте его в специальную форму и сразу узнайте стоимость и срок сдачи
                        работы.
                    </h2>
                    <div className="contactUs__buttonWrap">
                        <Link href={'/make-order'}><a>
                            <button className="common__button">Проверить текст</button>
                        </a></Link>
                    </div>
                </div>
            </section>
            <section className="section jc-sb">
                <div className="section__item max-w635"><h3 className="section__title mb-8">мы проверяем тексты</h3>
                    <p className="section__p">На русском, украинском и английском. С нами сотрудничают лучшие
                        редакторы, в том числе носители из Великобритании и США. Каждый заказ проверяют два
                        специалиста по очереди, так что у ошибок просто нет шансов. Оплатить работу можно картой
                        любого банка мира.
                    </p>
                    <p className="section__p">
                        <Link href={"/price/proofreading"}>
                            <a>Подробнее о ценах ›</a>
                        </Link>
                    </p>
                </div>
                <div className="section__item max-w380">
                    <div className="common__redNumber mt-minus30">
                        <div className="number">
                            <span className="big">50</span><span className="small">грн</span>
                        </div>
                        <div className="text">2 $, 128 ₽ — минимальная цена заказа</div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="section__item ">
                    <h3 className="section__title italic mb-24">Эти компании доверили нам свои тексты</h3>
                    <div className="trust">
                        <a rel="nofollow" target="_blank" href="https://fedoriv.com/">Fedoriv</a>
                        <a rel="nofollow" target="_blank" href="http://banda.agency/">Banda</a>
                        <a rel="nofollow" target="_blank" href="https://havasworldwide.com.ua/">Havas Worldwide</a>
                        <a rel="nofollow" target="_blank" href="http://ogilvy.com.ua/">Ogilvy &amp; Mather</a>
                        <a rel="nofollow" target="_blank" href="https://www.monobank.com.ua/">Monobank | Universal
                            Bank</a>
                        <a rel="nofollow" target="_blank" href="https://oranta.ua/">Oranta</a>
                        <a rel="nofollow" target="_blank" href="https://promodo.ua/">Promodo</a>
                        <a rel="nofollow" target="_blank" href="https://isobar.com.ua/">Adpro Isobar</a>
                        <a rel="nofollow" target="_blank" href="http://www.be-it.agency/">Be—it Agency</a>
                        <a rel="nofollow" target="_blank" href="https://credit-agricole.ua/">Crédit Agricole</a>
                        <a rel="nofollow" target="_blank" href="https://dou.ua/">DOU</a>
                        <a rel="nofollow" target="_blank" href="https://donttakefake.com/">DTF MAGAZINE</a>
                    </div>
                    <p className="section__p">
                        <Link href={"/how-it-works"}>
                            <a>Все клиенты ›</a>
                        </Link>
                    </p>
                </div>
            </section>
            <section className="section ">
                <div className="section__item ">
                    <h3 className="section__title italic mb-13">Исправим ошибки в любом тексте</h3>
                    <p className="section__p">
                        Проверяем билборды, баннеры, пресс-релизы, сайты, статьи, резюме, посты в «Фейсбук», книги,
                        упаковки товаров и даже тексты для озвучивания.
                    </p>
                    <p className="section__p">Делаем текст грамотным, понятным, логичным и читабельным. Он будет
                        полностью готов к размещению: мы позаботимся о неразрывных пробелах, правильных кавычках и
                        тире.
                    </p>
                </div>
                <div className="section__item ">
                    <h3 className="section__title italic mb-13">
                        Корректор лучше автоматической проверки
                    </h3>
                    <p className="section__p">
                        Ни одно средство автоматической проверки
                        правописания не вылавливает все ошибки. Это хорошее подспорье для специалиста, но не
                        панацея.
                    </p>
                    <p className="section__p">
                        Программа не понимает контекста, она просто сравнивает
                        слова с теми, что есть у нее в словаре. Если вы напишете «контакт» вместо «контракт», она не
                        заметит. Более того, иногда программа советует изменить правильный вариант на неправильный!
                    </p>
                </div>
            </section>
            <section className="section ourService">
                <div className="section__item max-w380">
                    <div className="common__redNumber mt-minus20">
                        <div className="number">
                            <span className="big">1</span><span className="small">час</span>
                        </div>
                        <div className="text">минимальное время проверки</div>
                    </div>
                </div>
                <div className="section__item ourService__item max-w635">
                    <h3 className="section__title italic mb-13">Наши услуги</h3>
                    <p className="section__p">
                        Мы делаем редактирование текста (как корректура, только лучше), рерайтинг и переводы на три
                        языка:
                        украинский, русский
                        <span className="non-break">и английский.</span>
                        А еще консультируем клиентов по любым языковым вопросам!
                    </p>
                    <p className="section__p">
                        <Link href={"/price/proofreading"}>
                            <a>Подробнее об услугах ›</a>
                        </Link>
                    </p>
                </div>
            </section>
            <section className="section ">
                <div className="section__item ">
                    <h3 className="section__title mb-24 txc">как изменится текст после обработки</h3>
                    <div className="cards">
                        <div className="card">
                            <div className="card__top red"/>
                            <div className="card__content">
                                <h3 className="section__title italic mb-16">
                                    Текст с ошибками
                                </h3>
                                <p className={paragraphStyle}>
                                    В процессе <span className="yellow">PR стратегической сессии</span>
                                    команда <span className="gray">осуществляет анализ</span>
                                    сегодняшней ситуации с помо<span className="yellow">ш</span>ью
                                    <span className="yellow">СВОТ анализа</span> и других
                                    инструментов, которые позволяют увидеть сильные и слабые стороны выбра<span
                                    className="yellow">н</span>ой стратегии. Проводит<span
                                    className="yellow">ь</span>ся детальный <span
                                    className="gray">анализ</span> рынка и всех событий, произошедших за предыдущий
                                    период, и, конечно, <span className="gray">делаются выводы</span>.
                                </p>
                                <div onClick={showMistakes} className={toggleStyle}>
                                    <div className="toggle">
                                        <div className="circle"/>
                                    </div>
                                    Подсветить ошибки
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__top green"/>
                            <div className="card__content"><h3
                                className="section__title italic mb-16">Редактирование</h3>
                                <p
                                    className="section__p">Во время стратегической PR-сессии команда оценивает
                                    текущую
                                    ситуацию с помощью SWOT-анализа и других инструментов, которые выявляют сильные
                                    и
                                    слабые стороны выбранной стратегии. Также участники подробно анализируют рынок и
                                    все
                                    важные события в предыдущем периоде и делают выводы.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="section__item ">
                    <div className="subscribeWrap">
                        <div className="subscribe">
                            <div className="subscribe__item max-w680">
                                <h3 className="section__title italic mb-13">Подписывайтесь на наши каналы в
                                    «Телеграме»</h3>
                                <p className="section__p">
                                    Там мы публикуем советы о правописании —
                                    все самое полезное простыми словами. Вы будете писать грамотнее, даже если не
                                    отличаете причастия от сказуемого 🙂
                                </p>
                                <div className="links">
                                    <a target="_blank" rel="nofollow" href="https://t.me/correctariumukr"
                                       className="link">
                                        <div className="image">
                                            <Logo1/>
                                        </div>
                                        <div className="text">
                                            <div className="title">Корректаріум</div>
                                            <div className="subTitle">Український правопис</div>
                                        </div>
                                    </a>
                                    <a target="_blank" rel="nofollow" href="https://t.me/correctarium_channel"
                                       className="link">
                                        <div className="image">
                                            <Logo2/>
                                        </div>
                                        <div className="text">
                                            <div className="title">Correctarium</div>
                                            <div className="subTitle">Русское правописание</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="subscribe__item">
                                <img className="item__image" src="/channels@2x.png" alt="woman" title="woman"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Index;
