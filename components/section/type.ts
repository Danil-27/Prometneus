//SectionQuestions
interface Question {
  id: number;
  question: string;
  answer: string;
}

export const questions: Array<Question> = [
  {
    id: 1,
    question: 'Какие основные цели ухода за кожей?',
    answer:
      'Основные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекций.Основные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекцийОсновные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекций',
  },
  {
    id: 2,
    question: 'Какие основные цели ухода за кожей?',
    answer:
      'Основные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекций.',
  },
  {
    id: 3,
    question: 'Какие основные цели ухода за кожей?',
    answer:
      'Основные цели ухода за кожей включают улучшение внешнего вида, уменьшение дефектов, улучшение гигиены, снижение риска заболеваний и инфекций.',
  },
];

// Achievement

interface Achievement {
  id: number;
  content: string;
  number: string;
}

export const achievements: Achievement[] = [
  { id: 1, content: 'городов <br> и стран ', number: '14+' },
  { id: 2, content: 'лет опыта <br> работы', number: '5+' },
  { id: 3, content: 'реализованно <br> проектов', number: '50+' },
];

// cards
import project from '~/assets/images/img/cards/project-1.png';

interface Card {
  id: number;
  src: string;
  alt: string;
  content: string;
}

export const cards: Card[] = [
  {
    id: 1,
    src: project,
    alt: 'ss',
    content: 'Апартаменты <br> в ЖК "Элегант"',
  },
  {
    id: 2,
    src: project,
    alt: 'ss',
    content: 'Апартаменты <br> в ЖК "Элегант"',
  },
  {
    id: 3,
    src: project,
    alt: 'ss',
    content: 'Апартаменты <br> в ЖК "Элегант"',
  },
  {
    id: 4,
    src: project,
    alt: 'ss',
    content: 'Апартаменты <br> в ЖК "Элегант"',
  },
];

// price

import price from '~/assets/images/img/price/edge.png';
import background from '~/assets/images/img/price/background.png';
import x from '~/assets/images/img/price/x.png';
import y from '~/assets/images/img/price/y.png';
import v from '~/assets/images/img/price/home-mobule.png';
import m from '~/assets/images/img/price/m.png';

interface ImgPrice {
  url: string;
  alt: string;
}

export const imagesPrice: ImgPrice[] = [
  { url: background, alt: '123' },
  { url: price, alt: '123' },
  { url: x, alt: '123' },
  { url: y, alt: '123' },
  { url: v, alt: '123' },
  { url: m, alt: '123' },
];

// stages

export interface Topic {
  index: number;
  title: string;
  content: string;
}

export const topics: Topic[] = [
  {
    index: 1,
    title: 'Техническое задание',
    content: 'Проводим консультацию, обсуждаем детали, приезжаем на замер',
  },
  {
    index: 2,
    title: 'Планировочное решение',
    content: 'Предоставляем на выбор три предложения или составляем из них Ваш вариант',
  },
  { index: 3, title: '3D визуализация', content: 'Детально воссоздаем помещения по выбранному плану интерьера.' },
  {
    index: 4,
    title: 'Строительные чертежи ',
    content: 'Планы сантехники, электрики, полов, потолков, развертки стен',
  },
  { index: 5, title: 'Комплектация  проекта', content: 'Составляем смету мебели, товаров, отделочных материалов' },
  {
    index: 6,
    title: 'Авторский  надзор',
    content: 'Контроль проекта дизайнером на протяжении всего производства работ',
  },
];

// input

import inputBackground from '~/assets/images/img/input/img-input.png';

export const inputBg: string = inputBackground;
