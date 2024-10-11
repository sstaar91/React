export const HOME_CARD_LIST = [
  {
    id: 1,
    title: 'Accordion',
    thumnail: 'accordion',
    description:
      '토글 형태의 UI로 특정 영역을 선택하면, 숨겨져 있던 내용들이 나오는 UI',
  },
  {
    id: 2,
    title: 'CheckBox',
    thumnail: 'checkbox',
    description:
      '여러가지 항목을 체크 할 수 있고, 전체 체크를 한번에 동작할 수 있게 하는 UI',
  },
  {
    id: 3,
    title: 'Dropdown',
    thumnail: 'dropdown',
    description:
      '특정 버튼을 클릭하면 여러가지 선택할 수 있는 리스트가 나오는 UI',
  },
];

export const ACCORDION_MENU_LIST = [
  {
    id: 1,
    category: '양식',
    list: [
      { id: 1, title: '파스타', price: 13000 },
      { id: 2, title: '리조또', price: 17000 },
      { id: 3, title: '스테이크', price: 33000 },
    ],
  },
  {
    id: 2,
    category: '중식',
    list: [
      { id: 1, title: '자장면', price: 8000 },
      { id: 2, title: '짬뽕', price: 10000 },
      { id: 3, title: '탕수육', price: 16000 },
    ],
  },
  {
    id: 3,
    category: '일식',
    list: [
      { id: 1, title: '초밥', price: 12000 },
      { id: 2, title: '소바', price: 8000 },
    ],
  },
  {
    id: 4,
    category: '한식',
    list: [
      { id: 1, title: '김치찌개', price: 9000 },
      { id: 2, title: '제육볶음', price: 9000 },
      { id: 3, title: '김치볶음밥', price: 7000 },
    ],
  },
  {
    id: 5,
    category: '분식',
    list: [{}],
  },
];

export const CHECKBOX_LIST = [
  { id: 1, title: '14세 이상입니다.' },
  { id: 2, title: '모든 약관을 확인했습니다.' },
  { id: 3, title: '이 체크박스를 누르면 당신은 슈퍼 개발자가 됩니다.' },
];

export const SELECT_LIST = [
  {
    id: 1,
    name: 'size',
    option: [
      { id: 1, value: '' },
      { id: 2, value: 'S' },
      { id: 3, value: 'M' },
      { id: 4, value: 'L' },
      { id: 5, value: 'XL' },
    ],
  },
  {
    id: 2,
    name: 'color',
    option: [
      { id: 1, value: '' },
      { id: 2, value: 'black' },
      { id: 3, value: 'red' },
      { id: 4, value: 'yellow' },
    ],
  },
  {
    id: 3,
    name: 'option',
    option: [
      { id: 1, value: '' },
      { id: 2, value: '1+1' },
      { id: 3, value: '1+1+1' },
      { id: 4, value: '5+2' },
    ],
  },
];

export const SELECT_RESULT_LIST = [
  { id: 1, name: 'size', title: 'SIZE' },
  { id: 2, name: 'color', title: 'COLOR' },
  { id: 3, name: 'option', title: 'OPTION' },
];
