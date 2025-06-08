// Файл: src/data/products.js - ПОЛНАЯ ВЕРСИЯ СО ВСЕМИ ТОВАРАМИ

// Импорты для Стикеров
import stikerOne1 from '../Components/img/TovarStikers/One/one.png';
import stikerOne2 from '../Components/img/TovarStikers/One/onee.png';
import stikerOne3 from '../Components/img/TovarStikers/One/oneee.png';

import stikerTwo1 from '../Components/img/TovarStikers/Two/two.png';
import stikerTwo2 from '../Components/img/TovarStikers/Two/twoo.png';

import stikerThree1 from '../Components/img/TovarStikers/Three/three.png';
import stikerThree2 from '../Components/img/TovarStikers/Three/threee.png';
import stikerThree3 from '../Components/img/TovarStikers/Three/threeee.png';

// Новые импорты для стикеров
import stikerFour1 from '../Components/img/TovarStikers/Four/four.png';
import stikerFour2 from '../Components/img/TovarStikers/Four/fourr.png';

import stikerFive1 from '../Components/img/TovarStikers/Five/five.png';
import stikerFive2 from '../Components/img/TovarStikers/Five/fivee.png';
import stikerFive3 from '../Components/img/TovarStikers/Five/fiveee.png';

import stikerSix1 from '../Components/img/TovarStikers/Six/six.png';
import stikerSix2 from '../Components/img/TovarStikers/Six/sixx.png';
import stikerSix3 from '../Components/img/TovarStikers/Six/sixxx.png';

import stikerSeven1 from '../Components/img/TovarStikers/Seven/seven.png';
import stikerSeven2 from '../Components/img/TovarStikers/Seven/sevenn.png';
import stikerSeven3 from '../Components/img/TovarStikers/Seven/sevennn.png';


// Импорты для Стикербуков
import stikerbookOne1 from '../Components/img/TovarStikerBook/One/one.png';
import stikerbookOne2 from '../Components/img/TovarStikerBook/One/onee.png';
import stikerbookOne3 from '../Components/img/TovarStikerBook/One/oneee.png';
import stikerbookOne4 from '../Components/img/TovarStikerBook/One/oneeee.png';

import stikerbookTwo1 from '../Components/img/TovarStikerBook/Two/two.png';
import stikerbookTwo2 from '../Components/img/TovarStikerBook/Two/twoo.png';
import stikerbookTwo3 from '../Components/img/TovarStikerBook/Two/twooo.png';
import stikerbookTwo4 from '../Components/img/TovarStikerBook/Two/twoooo.png';

import stikerbookThree1 from '../Components/img/TovarStikerBook/Three/three.png';
import stikerbookThree2 from '../Components/img/TovarStikerBook/Three/threee.png';


// Импорты для Мудпаков
import moodpackOne1 from '../Components/img/TovarMoodPack/One/one.png';
import moodpackOne2 from '../Components/img/TovarMoodPack/One/onee.png';
import moodpackOne3 from '../Components/img/TovarMoodPack/One/oneee.png';

import moodpackTwo1 from '../Components/img/TovarMoodPack/Two/two.png';
import moodpackTwo2 from '../Components/img/TovarMoodPack/Two/twoo.png';

import moodpackThree1 from '../Components/img/TovarMoodPack/Three/three.png';
import moodpackThree2 from '../Components/img/TovarMoodPack/Three/threee.png';

import moodpackFour1 from '../Components/img/TovarMoodPack/Four/four.png';
import moodpackFour2 from '../Components/img/TovarMoodPack/Four/fourr.png';

// Импорты для Сертификатов
import sertif500 from '../Components/img/TovarSertif/1.png';
import sertif1000 from '../Components/img/TovarSertif/2.png';
import sertif1500 from '../Components/img/TovarSertif/3.png';
import sertif2000 from '../Components/img/TovarSertif/4.png';


export const products = [
  // =====================
  // === СТИКЕРЫ ===
  // =====================
  {
    id: 'black-stiker-001',
    category: 'stikers',
    name: 'BLACK stikers',
    price: 150,
    images: [stikerOne1, stikerOne2, stikerOne3],
    description: `Виниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },
  {
    id: 'flowers-stiker-002',
    category: 'stikers',
    name: 'FLOWERS stikers',
    price: 100,
    images: [stikerTwo1, stikerTwo2],
    description: `Виниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },
  {
    id: 'cats-stiker-003',
    category: 'stikers',
    name: 'CATS stikers',
    price: 115,
    images: [stikerThree1, stikerThree2, stikerThree3],
    description: `Виниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },
  // === НОВЫЕ ТОВАРЫ-СТИКЕРЫ ===
  {
    id: 'stiker-sikomole-004',
    category: 'stikers',
    name: 'SIKOMOLE stikers',
    price: 189,
    images: [stikerFour1, stikerFour2],
    description: `Количество стикеров: 50 шт.\n\nВиниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },
  {
    id: 'stiker-gogotu-005',
    category: 'stikers',
    name: 'GOGOTU stikers',
    price: 189,
    images: [stikerFive1, stikerFive2, stikerFive3],
    description: `Количество стикеров: 60 шт.\n\nВиниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },
  {
    id: 'stiker-pickjoy-006',
    category: 'stikers',
    name: 'PickJoy stikers',
    price: 155,
    images: [stikerSix1, stikerSix2, stikerSix3],
    description: `Количество стикеров: 60 шт.\n\nВиниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },
  {
    id: 'stiker-windycat-007',
    category: 'stikers',
    name: 'WINDYCAT stikers',
    price: 150,
    images: [stikerSeven1, stikerSeven2, stikerSeven3],
    description: `Количество стикеров: 50 шт.\n\nВиниловые стикеры с авторским дизайном, влагостойкие.\nЕсли не получилось приклеить с первого раза - не беда, их легко можно переклеить!\nНе оставляют следов, но советуем предварительно протереть поверхность перед наклеиванием.`
  },

  // =====================
  // === СТИКЕРБУКИ ===
  // =====================
  {
    id: 'pink-stikerbook-001',
    category: 'stikerbook',
    name: 'PINK stikerbook',
    price: 369,
    images: [stikerbookOne1, stikerbookOne2, stikerbookOne3, stikerbookOne4],
    description: `Стикербук с наклейками в эстетичном стиле.\nВ стикербуке 20 матовых листов 21 см х 15 см, более 200 наклеек для самостоятельного вырезания.\nМаленькие наклейки можно объединить в крупные и сделать большую наклейку.\nВысокое качество и яркость печати.`
  },
  {
    id: 'stikerbook-aesthetic-002',
    category: 'stikerbook',
    name: 'AESTHETIC stikerbook',
    price: 369,
    images: [stikerbookTwo1, stikerbookTwo2, stikerbookTwo3, stikerbookTwo4],
    description: `Стикербук с наклейками в эстетичном стиле.\nВ стикербуке 20 матовых листов 21 см х 15 см, более 200 наклеек для самостоятельного вырезания.\nМаленькие наклейки можно объединить в крупные и сделать большую наклейку.\nВысокое качество и яркость печати.`
  },
  {
    id: 'stikerbook-vintage-003',
    category: 'stikerbook',
    name: 'VINTAGE stikerbook',
    price: 369,
    images: [stikerbookThree1, stikerbookThree2],
    description: `Стикербук с наклейками в эстетичном стиле.\nВ стикербуке 20 матовых листов 21 см х 15 см, более 200 наклеек для самостоятельного вырезания.\nМаленькие наклейки можно объединить в крупные и сделать большую наклейку.\nВысокое качество и яркость печати.`
  },
  
  // =====================
  // === МУДПАКИ ===
  // =====================
  {
    id: 'rockstar-moodpack-001',
    category: 'moodpack',
    name: 'ROCKSTAR moodpack',
    price: 280,
    images: [moodpackOne1, moodpackOne2, moodpackOne3],
    description: `Погрузись в атмосферу творчества с нашими мудпаками!\nКаждый набор - это тщательно подобранная коллекция эстетичных предметов: карточек, вырезок, наклеек и декоративной бумаги. Идеально подходит для оформления ежедневников, создания коллажей или просто для вдохновения.`
  },
  {
    id: 'people-moodpack-002',
    category: 'moodpack',
    name: 'PEOPLE moodpack',
    price: 280,
    images: [moodpackTwo1, moodpackTwo2],
    description: `Погрузись в атмосферу творчества с нашими мудпаками!\nКаждый набор - это тщательно подобранная коллекция эстетичных предметов: карточек, вырезок, наклеек и декоративной бумаги. Идеально подходит для оформления ежедневников, создания коллажей или просто для вдохновения.`
  },
  {
    id: 'ribbons-moodpack-003',
    category: 'moodpack',
    name: 'RIBBONS moodpack',
    price: 233,
    images: [moodpackThree1, moodpackThree2],
    description: `Погрузись в атмосферу творчества с нашими мудпаками!\nКаждый набор - это тщательно подобранная коллекция эстетичных предметов: карточек, вырезок, наклеек и декоративной бумаги. Идеально подходит для оформления ежедневников, создания коллажей или просто для вдохновения.`
  },
  {
    id: 'music-moodpack-004',
    category: 'moodpack',
    name: 'MUSIC moodpack',
    price: 280,
    images: [moodpackFour1, moodpackFour2],
    description: `Погрузись в атмосферу творчества с нашими мудпаками!\nКаждый набор - это тщательно подобранная коллекция эстетичных предметов: карточек, вырезок, наклеек и декоративной бумаги. Идеально подходит для оформления ежедневников, создания коллажей или просто для вдохновения.`
  },
  
  // =====================
  // === СЕРТИФИКАТЫ ===
  // =====================
  {
    id: 'sertif-500',
    category: 'sertif',
    name: 'Подарочный сертификат 500',
    price: 500,
    images: [sertif500],
    description: `Идеальный подарок для творческой души!\n\nПосле покупки на указанный вами email будет отправлен уникальный промокод на сумму сертификата. Его можно будет использовать для полной или частичной оплаты любого заказа в нашем магазине.\n\nСрок действия не ограничен. Порадуйте себя или своих близких!`
  },
  {
    id: 'sertif-1000',
    category: 'sertif',
    name: 'Подарочный сертификат 1000',
    price: 1000,
    images: [sertif1000],
    description: `Идеальный подарок для творческой души!\n\nПосле покупки на указанный вами email будет отправлен уникальный промокод на сумму сертификата. Его можно будет использовать для полной или частичной оплаты любого заказа в нашем магазине.\n\nСрок действия не ограничен. Порадуйте себя или своих близких!`
  },
  {
    id: 'sertif-1500',
    category: 'sertif',
    name: 'Подарочный сертификат 1500',
    price: 1500,
    images: [sertif1500],
    description: `Идеальный подарок для творческой души!\n\nПосле покупки на указанный вами email будет отправлен уникальный промокод на сумму сертификата. Его можно будет использовать для полной или частичной оплаты любого заказа в нашем магазине.\n\nСрок действия не ограничен. Порадуйте себя или своих близких!`
  },
  {
    id: 'sertif-2000',
    category: 'sertif',
    name: 'Подарочный сертификат 2000',
    price: 2000,
    images: [sertif2000],
    description: `Идеальный подарок для творческой души!\n\nПосле покупки на указанный вами email будет отправлен уникальный промокод на сумму сертификата. Его можно будет использовать для полной или частичной оплаты любого заказа в нашем магазине.\n\nСрок действия не ограничен. Порадуйте себя или своих близких!`
  }
];