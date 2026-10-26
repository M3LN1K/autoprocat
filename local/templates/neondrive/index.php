<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("NEONDRIVE — Премиальная аренда автомобилей");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/assets/css/home.css");?>

<!-- Hero -->
<section class="section">
  <div class="container hero">
    <div class="blob blob--violet" aria-hidden="true"></div>
    <div class="blob blob--cyan" aria-hidden="true"></div>

    <div class="hero__content">
      <p class="hero__tag glass">
        <span class="hero__pulse"></span>
        Москва · 24/7 · Доставка авто
      </p>
      <h1 class="hero__title">
        ВЫБЕРИ<br>СВОЮ <span class="hero__title-accent">СКОРОСТЬ</span>
      </h1>
      <p class="hero__lead">Суперкары и премиальные автомобили без залога&nbsp;— от одного часа до месяца.</p>

      <div class="hero__buttons">
        <a href="/catalog/" class="btn btn--lg btn--lime">Забронировать</a>
        <a href="/catalog/" class="btn btn--lg btn--glass glass">Смотреть автопарк</a>
      </div>

      <dl class="hero__stats">
        <div><dt>Автомобилей</dt><dd>48</dd></div>
        <div><dt>Подача</dt><dd>60 мин</dd></div>
        <div><dt>Рейтинг</dt><dd>4.9</dd></div>
      </dl>
    </div>

    <div class="hero__media">
      <div class="img-ph hero__image">
        <img src="<?=SITE_TEMPLATE_PATH?>/images/hero-car.jpg" alt="Lamborghini Huracán EVO" width="1600" height="1200">
      </div>
      <div class="hero__hit glass">
        <div>
          <p class="hero__hit-label">Хит недели</p>
          <p class="hero__hit-name">Lamborghini Huracán EVO</p>
        </div>
        <span class="price-tag">89 000 ₽</span>
      </div>
    </div>
  </div>
</section>

<!-- Популярные автомобили -->
<section class="section">
  <div class="container popular">
    <div class="popular__head">
      <div>
        <p class="eyebrow eyebrow--violet">Автопарк</p>
        <h2 class="section-title">Популярные автомобили</h2>
      </div>
      <a href="/catalog/" class="popular__all">Весь каталог →</a>
    </div>

    <div class="popular__list">
      <!-- Шаблон карточки (bitrix:news.list). Модификатор цвета: home-card--cyan / --violet / --lime -->
      <article class="home-card home-card--cyan glass">
        <div class="img-ph home-card__image">
          <img src="<?=SITE_TEMPLATE_PATH?>/images/card-huracan-evo.jpg" alt="Lamborghini Huracán EVO" width="1600" height="1000" loading="lazy">
          <span class="badge badge--cyan">Суперкар</span>
        </div>
        <div class="home-card__body">
          <h3 class="home-card__title">Lamborghini Huracán EVO</h3>
          <p class="home-card__specs">2.9 с · 640 л.с. · AWD</p>
          <div class="home-card__footer">
            <span class="price-tag">89 000 ₽ / сутки</span>
            <a href="/catalog/detail.php" class="home-card__more">Подробнее →</a>
          </div>
        </div>
      </article>

      <article class="home-card home-card--violet glass">
        <div class="img-ph home-card__image">
          <img src="<?=SITE_TEMPLATE_PATH?>/images/card-porsche-911-turbo-s.jpg" alt="Porsche 911 Turbo S" width="1600" height="1000" loading="lazy">
          <span class="badge badge--violet">Спорт</span>
        </div>
        <div class="home-card__body">
          <h3 class="home-card__title">Porsche 911 Turbo S</h3>
          <p class="home-card__specs">2.7 с · 650 л.с. · AWD</p>
          <div class="home-card__footer">
            <span class="price-tag">64 000 ₽ / сутки</span>
            <a href="/catalog/detail.php" class="home-card__more">Подробнее →</a>
          </div>
        </div>
      </article>

      <article class="home-card home-card--lime glass">
        <div class="img-ph home-card__image">
          <img src="<?=SITE_TEMPLATE_PATH?>/images/card-amg-g63.jpg" alt="Mercedes-AMG G 63" width="1600" height="1000" loading="lazy">
          <span class="badge badge--lime">Внедорожник</span>
        </div>
        <div class="home-card__body">
          <h3 class="home-card__title">Mercedes-AMG G 63</h3>
          <p class="home-card__specs">4.5 с · 585 л.с. · 4MATIC</p>
          <div class="home-card__footer">
            <span class="price-tag">42 000 ₽ / сутки</span>
            <a href="/catalog/detail.php" class="home-card__more">Подробнее →</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- Как это работает -->
<section class="section" id="how">
  <div class="container steps">
    <div class="steps__head">
      <p class="eyebrow eyebrow--cyan">Просто</p>
      <h2 class="section-title">Как это работает</h2>
    </div>

    <ol class="steps__list">
      <li class="step step--cyan glass">
        <div class="step__top">
          <span class="step__icon">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          </span>
          <span class="step__num">01</span>
        </div>
        <h3 class="step__title">Выберите авто</h3>
        <p class="step__text">Фильтруйте по классу, мощности и цене. Все автомобили в наличии и готовы к выезду.</p>
      </li>
      <li class="step step--violet glass">
        <div class="step__top">
          <span class="step__icon">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
          </span>
          <span class="step__num">02</span>
        </div>
        <h3 class="step__title">Забронируйте онлайн</h3>
        <p class="step__text">Укажите даты и место подачи. Подтверждение приходит в течение 5 минут.</p>
      </li>
      <li class="step step--lime glass">
        <div class="step__top">
          <span class="step__icon">
            <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>
          </span>
          <span class="step__num">03</span>
        </div>
        <h3 class="step__title">Получите ключи</h3>
        <p class="step__text">Доставим автомобиль по адресу в течение часа. Остаётся только нажать на газ.</p>
      </li>
    </ol>
  </div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
