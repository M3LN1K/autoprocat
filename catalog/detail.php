<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Автомобиль");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/assets/css/detail.css");

$included = [
  'Полное КАСКО и ОСАГО',
  '300 км пробега в сутки',
  'Доставка по Москве',
  'Поддержка 24/7',
  'Детейлинг перед выдачей',
  'Полный бак при выдаче',
];
?>

<section class="section">
  <div class="blob blob--violet detail__blob" aria-hidden="true"></div>

  <div class="container detail">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <ol class="breadcrumbs__list">
        <li><a href="/">Главная</a></li>
        <li aria-hidden="true">/</li>
        <li><a href="/catalog/">Каталог</a></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">Lamborghini Huracán EVO</li>
      </ol>
    </nav>

    <div class="detail__top">

      <!-- Галерея -->
      <div class="gallery">
        <div class="img-ph gallery__main">
          <img src="<?=SITE_TEMPLATE_PATH?>/images/detail-huracan-spyder.jpg" alt="Lamborghini Huracán EVO Spyder" width="1600" height="1000">
          <span class="badge badge--cyan">Суперкар</span>
        </div>
        <ul class="gallery__thumbs">
          <li><button type="button" class="img-ph gallery__thumb is-active" aria-label="Фото 1"><img src="<?=SITE_TEMPLATE_PATH?>/images/detail-huracan-spyder.jpg" alt="Lamborghini Huracán EVO Spyder — экстерьер"></button></li>
          <li><button type="button" class="img-ph gallery__thumb" aria-label="Фото 2"><img src="<?=SITE_TEMPLATE_PATH?>/images/hero-car.jpg" alt="Lamborghini Huracán EVO Spyder в городе"></button></li>
          <li><button type="button" class="img-ph gallery__thumb" aria-label="Фото 3"><img src="<?=SITE_TEMPLATE_PATH?>/images/detail-huracan-interior.jpg" alt="Lamborghini Huracán EVO Spyder — салон"></button></li>
          <li><button type="button" class="img-ph gallery__thumb" aria-label="Фото 4"><img src="<?=SITE_TEMPLATE_PATH?>/images/card-huracan-evo.jpg" alt="Lamborghini Huracán EVO Spyder — вид сбоку"></button></li>
        </ul>
      </div>

      <!-- Информация и бронирование -->
      <div>
        <p class="eyebrow eyebrow--violet">Lamborghini · 2024</p>
        <h1 class="detail__title">Huracán EVO Spyder</h1>
        <p class="detail__price">
          <span class="detail__price-value">89 000 ₽</span>
          <span class="detail__price-unit">/ сутки</span>
        </p>
        <p class="detail__desc">
          Атмосферный V10, полный привод и открытый верх. Автомобиль для тех, кто хочет почувствовать каждую из 640 лошадиных сил — с доставкой в любую точку Москвы.
        </p>

        <form class="booking glass" aria-labelledby="booking-title">
          <h2 id="booking-title" class="booking__title">Бронирование</h2>
          <div class="booking__fields">
            <label class="booking__field">
              <span class="booking__label">Начало аренды</span>
              <input type="date" class="booking__input" value="2026-11-02">
            </label>
            <label class="booking__field">
              <span class="booking__label">Окончание</span>
              <input type="date" class="booking__input" value="2026-11-05">
            </label>
            <label class="booking__field booking__field--wide">
              <span class="booking__label">Телефон</span>
              <input type="tel" class="booking__input" placeholder="+7 (___) ___-__-__">
            </label>
          </div>

          <dl class="booking__summary">
            <div class="booking__row"><dt>3 суток × 89 000 ₽</dt><dd>267 000 ₽</dd></div>
            <div class="booking__row"><dt>Доставка</dt><dd class="text-lime">Бесплатно</dd></div>
            <div class="booking__row booking__row--total"><dt>Итого</dt><dd>267 000 ₽</dd></div>
          </dl>

          <button type="submit" class="btn btn--block btn--lime">Подтвердить</button>
          <p class="booking__note">Оплата при получении · Без залога</p>
        </form>
      </div>
    </div>

    <!-- Характеристики и что включено -->
    <div class="detail__bottom">
      <div class="detail__panel glass">
        <h2 class="detail__panel-title">Характеристики</h2>
        <table class="specs">
          <caption class="sr-only">Технические характеристики автомобиля</caption>
          <tbody>
            <tr><th scope="row">Двигатель</th><td>5.2 V10</td></tr>
            <tr><th scope="row">Мощность</th><td>640 л.с.</td></tr>
            <tr><th scope="row">0–100 км/ч</th><td class="is-accent">2.9 с</td></tr>
            <tr><th scope="row">Топливо</th><td>АИ-98</td></tr>
            <tr><th scope="row">Коробка</th><td>Робот, 7 ступ.</td></tr>
            <tr><th scope="row">Мест</th><td>2</td></tr>
          </tbody>
        </table>
      </div>

      <div class="detail__panel glass">
        <h2 class="detail__panel-title">Включено в стоимость</h2>
        <ul class="included">
          <?foreach($included as $item):?>
          <li class="included__item">
            <span class="included__icon"><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"/></svg></span>
            <?=$item?>
          </li>
          <?endforeach;?>
        </ul>
      </div>
    </div>
  </div>
</section>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php");?>
