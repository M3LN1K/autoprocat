<?if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();?>
<?php
use Bitrix\Main\Page\Asset;
Asset::getInstance()->addString('<link rel="preconnect" href="https://fonts.googleapis.com">');
Asset::getInstance()->addString('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
Asset::getInstance()->addCss('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
Asset::getInstance()->addCss(SITE_TEMPLATE_PATH.'/assets/css/main.css');

$curPage = $APPLICATION->GetCurPage(false);
$menu = [
  ['/', 'Главная'],
  ['/catalog/', 'Каталог'],
  ['/catalog/detail.php', 'Автомобиль'],
];
$isActive = function($link) use ($curPage) {
  if ($link === '/') return $curPage === '/' || $curPage === '/index.php';
  if ($link === '/catalog/') return $curPage === '/catalog/' || $curPage === '/catalog/index.php';
  return $curPage === $link;
};
?>
<!DOCTYPE html>
<html lang="<?=LANGUAGE_ID?>">
<head>
  <meta charset="<?=LANG_CHARSET?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?$APPLICATION->ShowTitle()?></title>
  <?$APPLICATION->ShowHead()?>
</head>
<body>
<div id="panel"><?$APPLICATION->ShowPanel()?></div>

<header class="header">
  <div class="container header__inner">
    <a href="/" class="logo">
      <span class="logo__dot"></span>
      NEON<span class="logo__accent">DRIVE</span>
    </a>

    <nav class="nav" aria-label="Основная навигация">
      <ul class="nav__list">
        <?foreach($menu as [$link, $name]):?>
          <li><a href="<?=$link?>" class="nav__link<?=$isActive($link) ? ' is-active' : ''?>"<?=$isActive($link) ? ' aria-current="page"' : ''?>><?=$name?></a></li>
        <?endforeach;?>
        <li><a href="/#how" class="nav__link">Условия</a></li>
      </ul>
    </nav>

    <div class="header__actions">
      <a href="tel:+74950000000" class="header__phone">+7 (495) 000-00-00</a>
      <a href="/catalog" class="btn btn--outline-cyan">Забронировать</a>
    </div>
  </div>

  <nav class="nav-mobile" aria-label="Мобильная навигация">
    <ul class="nav-mobile__list">
      <?foreach($menu as [$link, $name]):?>
        <li><a href="<?=$link?>" class="nav__link<?=$isActive($link) ? ' is-active' : ''?>"><?=$name?></a></li>
      <?endforeach;?>
    </ul>
  </nav>
</header>

<main class="page">
  <div class="page__grid" aria-hidden="true"></div>
