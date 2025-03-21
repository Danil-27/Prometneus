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

// Questions
interface Question {
  id: number;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'Берёт ли дизайнер ответственность за снос перегородок в квартире?',
    answer:
      'Мы не предлагаем снос несущих конструкций или конструкций, находящихся под вопросом. Всегда действуем в рамках архитектурных норм и только по согласованию с БТИ. Со своей стороны рекомендуем только законные переносы перегородок или устройства конструкций. Если заказчик решает перенести то, что не узаконено, всю ответственность за эти действия он берет на себя.',
  },
  {
    id: 2,
    question: 'Можно ли делать дизайн-проект, если объект ещё не сдан?',
    answer:
      'Нежелательно. Могут возникнуть сложности из-за неточностей и погрешностей в ходе реализации объекта. Для нас важен каждый сантиметр вашего пространства для обустройства.',
  },
  {
    id: 3,
    question: 'Насколько реально купить то, что ставите в проект?',
    answer:
      'Все предметы мебели всегда реально существующие и представлены в конкретных магазинах. В зависимости от выбранного пакета дизайн-проекта, мы предоставляем полную комплектацию по мебели и отделочным материалам, а также учитываем бюджетные возможности заказчика.',
  },
  {
    id: 4,
    question: 'Вы ведёте авторский надзор?',
    answer:
      'Да. Выезды на объекты и в магазины оплачиваются отдельно, по договоренности. Бесплатно входит консультация по телефону и мессенджерам два раза в неделю.',
  },
  {
    id: 5,
    question: 'Работаете ли вы онлайн?',
    answer: 'Да, мы работаем удалённо по всему миру.',
  },
];
