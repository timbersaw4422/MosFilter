import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";
import Posts from "../components/posts/posts";
import Link from 'next/link'

export default function postsPage(){

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Политика конфиденциальности</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav/>

        <section className="content-block ">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
               <Path  category="privacy"/>
               <div className="title" style={{fontSize: 24, color: '#424242', fontWeight: '600', marginBottom: '40px', marginTop: '20px'}}>Политика в отношении обработки персональных данных</div>
               <div className="text" style={{fontSize: 16, lineHeight: "150%", color: '#424242', marginBottom: 50}}>
               Политика в отношении обработки персональных данных
                 <br/>
                 1. Общие положения
                 Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Стуровым Иваном Александровичем (далее – Оператор).
                 <br/>
                 1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                 <br/>
                 1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <a href="https://mos-filter.ru">https://mos-filter.ru</a>.
                 <br/>
                 2. Основные понятия, используемые в Политике
                 <br/>
                 2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;
                 <br/>
                 2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);
                 <br/>
                 2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу <a href="https://mos-filter.ru">https://mos-filter.ru</a>;
                 <br/>
                 2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;
                 <br/>
                 2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;
                 <br/>
                 2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;
                 <br/>
                 2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;
                 <br/>
                 2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта <a href="https://mos-filter.ru">https://mos-filter.ru</a>;
                 <br/>
                 2.9. Пользователь – любой посетитель веб-сайта <a href="https://mos-filter.ru">https://mos-filter.ru</a>;
                 <br/>
                 2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;
                 <br/>
                 2.11. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;
                 <br/>
                 2.12. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;
                 <br/>
                 2.13. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.
                 <br/>
                 3. Оператор может обрабатывать следующие персональные данные Пользователя
                 <br/>
                 3.1. Фамилия, имя, отчество;
                 <br/>
                 3.2. Номера телефонов;
                 <br/>
                 3.3. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
                 <br/>
                 3.4. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.
                 <br/>
                 4. Цели обработки персональных данных
                 <br/>
                 4.1. Цель обработки персональных данных Пользователя — уточнение деталей заказа.
                 <br/>
                 4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты <a href="mailto:auroraaqua@yandex.ru">auroraaqua@yandex.ru</a> с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
                 <br/>
                 4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
                 <br/>
                 5. Правовые основания обработки персональных данных
                 <br/>
                 5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте <a href="https://mos-filter.ru">https://mos-filter.ru</a>. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
                 <br/>
                 5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
                 <br/>
                 6. Порядок сбора, хранения, передачи и других видов обработки персональных данных
                 Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
                 <br/>
                 6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                 <br/>
                 6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.
                 <br/>
                 6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора <a href="mailto:auroraaqua@yandex.ru">auroraaqua@yandex.ru</a> с пометкой «Актуализация персональных данных».
                 <br/>
                 6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора <a href="mailto:auroraaqua@yandex.ru">auroraaqua@yandex.ru</a> с пометкой «Отзыв согласия на обработку персональных данных».
                 <br/>
                 7. Трансграничная передача персональных данных
                 <br/>
                 7.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.
                 <br/>
                 7.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.
                 <br/>
                 8. Заключительные положения
                 <br/>
                 8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты <a href="mailto:auroraaqua@yandex.ru">auroraaqua@yandex.ru</a>.
                 <br/>
                 8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
                 <br/>
                 8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу <a href="https://mos-filter.ru/privacy">https://mos-filter.ru/policy</a>
            </div>
            <div className="horizontal-shape" style={{ marginBottom: 50 }}></div>
            <Link href="/"><a className="post-body__back-link">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.286 14C16.0609 14.0002 15.8379 13.955 15.6299 13.8669C15.4219 13.7787 15.2329 13.6495 15.074 13.4865L9.9309 8.22838C9.6095 7.8997 9.42896 7.45398 9.42896 6.98923C9.42896 6.52448 9.6095 6.07876 9.9309 5.75008L15.074 0.492001C15.3973 0.172734 15.8303 -0.00392711 16.2798 6.62564e-05C16.7293 0.00405962 17.1593 0.188388 17.4772 0.513351C17.795 0.838315 17.9753 1.27791 17.9792 1.73746C17.9831 2.19701 17.8103 2.63975 17.4981 2.97031L13.567 6.98923L17.4981 11.0082C17.7377 11.2533 17.901 11.5655 17.9671 11.9055C18.0332 12.2454 17.9992 12.5978 17.8695 12.918C17.7398 13.2382 17.5201 13.5119 17.2383 13.7045C16.9564 13.8971 16.625 13.9999 16.286 14ZM6.85706 14C6.6319 14.0002 6.40892 13.955 6.20091 13.8669C5.99291 13.7787 5.80399 13.6495 5.64501 13.4865L0.50194 8.22838C0.180548 7.8997 0 7.45398 0 6.98923C0 6.52448 0.180548 6.07876 0.50194 5.75008L5.64501 0.492001C5.96834 0.172734 6.40139 -0.00392711 6.85089 6.62564e-05C7.30038 0.00405962 7.73037 0.188388 8.04822 0.513351C8.36608 0.838315 8.54637 1.27791 8.55028 1.73746C8.55419 2.19701 8.38139 2.63975 8.0691 2.97031L4.13809 6.98923L8.0691 11.0082C8.30879 11.2533 8.472 11.5655 8.53812 11.9055C8.60424 12.2454 8.57029 12.5978 8.44057 12.918C8.31084 13.2382 8.09117 13.5119 7.80931 13.7045C7.52745 13.8971 7.19607 13.9999 6.85706 14Z" fill="url(#paint0_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="14" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6089F3"/>
                  <stop offset="1" stopColor="#191792"/>
                  </linearGradient>
                  </defs>
              </svg>
               &nbsp;&nbsp;&nbsp;
               Вернуться на главную</a>
            </Link>
            </div>

            <style jsx>{`
              .post-body__back-link{
                font-weight: 600;
                font-size: 20px;
                color: #424242;
                text-decoration:none;
                margin-top:50px;
              }

              .number{
                color: #4862D2;
                font-weight:bold;
              }

              .with-margin-bottom4{
                margin-bottom:4rem;
              }
            `}</style>
        </section>
    </div>

    <Footer />
   </>
  )
}
