<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Каталог");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/assets/css/catalog.css");

$cars = [
  ['Lamborghini Huracán EVO', '89 000', ['3.5 с', '625 л.с.', 'AWD']],
  ['Ferrari 296 GTB',         '95 000', ['2.9 с', '830 л.с.', 'RWD']],
  ['McLaren 720S',            '78 000', ['2.9 с', '720 л.с.', 'RWD']],
  ['Porsche 911 Turbo S',     '64 000', ['2.7 с', '650 л.с.', 'AWD']],
  ['BMW M8 Competition',      '48 000', ['3.2 с', '625 л.с.', 'xDrive']],
  ['Mercedes-AMG G 63',       '42 000', ['4.5 с', '585 л.с.', '4MATIC']],
];
?>

<section class="section">
  <div class="container catalog">

    <!-- bitrix:breadcrumb -->
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <ol class="breadcrumbs__list">
        <li><a href="/">Главная</a></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">Каталог</li>
      </ol>
    </nav>

    <div class="catalog__head">
      <div>
        <h1 class="catalog__title">Каталог</h1>
        <p class="catalog__count">Найдено <span class="text-cyan">24</span> автомобиля</p>
      </div>
      <label class="catalog__sort">
        Сортировка
        <select class="catalog__select glass">
          <option>По популярности</option>
          <option>Сначала дешевле</option>
          <option>Сначала дороже</option>
          <option>По мощности</option>
        </select>
      </label>
    </div>

    <div class="catalog__layout">

      <!-- bitrix:catalog.smart.filter -->
      <aside aria-label="Фильтры">
        <form class="filter glass">
          <div class="filter__head">
            <h2 class="filter__title">Фильтры</h2>
            <button type="reset" class="filter__reset">Сбросить</button>
          </div>

          <fieldset>
            <legend class="filter__legend">Класс авто</legend>
            <div class="filter__options">
              <label class="filter__option">
                <span class="filter__option-label"><input type="checkbox" class="filter__checkbox" checked> Суперкар</span>
                <span class="filter__option-count">8</span>
              </label>
              <label class="filter__option">
                <span class="filter__option-label"><input type="checkbox" class="filter__checkbox" checked> Спорт</span>
                <span class="filter__option-count">7</span>
              </label>
              <label class="filter__option">
                <span class="filter__option-label"><input type="checkbox" class="filter__checkbox"> Бизнес</span>
                <span class="filter__option-count">5</span>
              </label>
              <label class="filter__option">
                <span class="filter__option-label"><input type="checkbox" class="filter__checkbox"> Внедорожник</span>
                <span class="filter__option-count">4</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend class="filter__legend">Цена за сутки</legend>
            <input type="range" class="filter__range" min="10000" max="150000" step="1000" value="90000" aria-label="Максимальная цена">
            <div class="filter__prices">
              <label class="filter__price glass">
                <span class="filter__price-label">От</span>
                <input type="text" class="filter__price-input" value="10 000 ₽">
              </label>
              <label class="filter__price glass">
                <span class="filter__price-label">До</span>
                <input type="text" class="filter__price-input" value="90 000 ₽">
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend class="filter__legend">Коробка передач</legend>
            <div class="filter__switch">
              <label>
                <input type="radio" name="gearbox" class="sr-only" checked>
                <span>Автомат</span>
              </label>
              <label>
                <input type="radio" name="gearbox" class="sr-only">
                <span>Механика</span>
              </label>
            </div>
          </fieldset>

          <button type="submit" class="btn btn--block btn--lime">Показать 24 авто</button>
        </form>
      </aside>

      <!-- bitrix:catalog.section -->
      <div>
        <ul class="catalog__grid">
          <?foreach($cars as [$name, $price, $specs]):?>
          <li>
            <article class="car-card glass">
              <div class="img-ph car-card__image">
                <span class="img-ph__label">Image</span>
                <span class="car-card__price"><?=$price?> ₽/сут</span>
              </div>
              <div class="car-card__body">
                <h3 class="car-card__title"><?=$name?></h3>
                <ul class="car-card__specs">
                  <?foreach($specs as $spec):?><li><?=$spec?></li><?endforeach;?>
                </ul>
                <a href="/catalog/detail.php" class="car-card__more">Подробнее</a>
              </div>
            </article>
          </li>
          <?endforeach;?>
        </ul>

        <!-- system.pagenavigation -->
        <nav class="pagination" aria-label="Страницы">
          <ul class="pagination__list glass">
            <li><a href="/catalog/" class="pagination__link" aria-label="Предыдущая">←</a></li>
            <li><a href="/catalog/" class="pagination__link" aria-current="page">1</a></li>
            <li><a href="/catalog/" class="pagination__link">2</a></li>
            <li><a href="/catalog/" class="pagination__link">3</a></li>
            <li><span class="pagination__dots">…</span></li>
            <li><a href="/catalog/" class="pagination__link">8</a></li>
            <li><a href="/catalog/" class="pagination__link" aria-label="Следующая">→</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php");?>
