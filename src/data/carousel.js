const items = [
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    href: 'https://www.scribd.com/book/249309210/The-Handmaid-s-Tale',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/249309210/149x198/66b49448d6/1556391052?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/249309210/298x396/43e06f6fcd/1556391052?v=1 2x',
  },
  {
    title: 'Animal Farm and 1984',
    author: 'George Orwell',
    href: 'https://www.scribd.com/book/249309197/Animal-Farm-and-1984',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/249309197/149x198/1aad72baf2/1555640498?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/249309197/298x396/d428cd566a/1555640498?v=1 2x',
  },
  {
    title: '11/22/63: A Novel',
    author: 'Stephen King',
    href: 'https://www.scribd.com/book/224339388/11-22-63-A-Novel',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/224339388/149x198/f5f81c21b7/1556761733?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224339388/298x396/7f6d903686/1556761733?v=1 2x',
  },
  {
    title: 'The Graveyard Book',
    author: 'Neil Gaiman',
    href: 'https://www.scribd.com/book/163600930/The-Graveyard-Book',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/163600930/149x198/25c730f1a0/1556657999?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/163600930/298x396/6e57b3bff3/1556657999?v=1 2x',
  },
  {
    title: 'That Hideous Strength: (Space Trilogy, Book Three)',
    author: 'C. S. Lewis',
    href:
      'https://www.scribd.com/book/163565828/That-Hideous-Strength-Space-Trilogy-Book-Three',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/163565828/149x198/2a592d1696/1555537797?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/163565828/298x396/08bdb05d24/1555537797?v=1 2x',
  },
  {
    title: 'Ubik',
    author: 'Philip K. Dick',
    href: 'https://www.scribd.com/book/249308173/Ubik',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/249308173/149x198/dd0b427acc/1555638350?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/249308173/298x396/9b34b3eb36/1555638350?v=1 2x',
  },
  {
    title: 'Fahrenheit 451: A Novel',
    author: 'Ray Bradbury',
    href: 'https://www.scribd.com/book/224253698/Fahrenheit-451-A-Novel',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224253698/149x198/01f52475bf/1555465193?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224253698/298x396/d0c133839e/1555465193?v=1 2x',
  },
  {
    title: 'The Call of Cthulhu',
    author: 'H. P. Lovecraft',
    href: 'https://www.scribd.com/book/317245182/The-Call-of-Cthulhu',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/317245182/149x198/800dad2bda/1554761366?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/317245182/298x396/3b17fb205a/1554761366?v=1 2x',
  },
  {
    title: 'The Electric State',
    author: 'Simon Stålenhag',
    href: 'https://www.scribd.com/book/386387079/The-Electric-State',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/386387079/149x198/0b07887f36/1555382037?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/386387079/298x396/c6399dec19/1555382037?v=1 2x',
  },
  {
    title: "Dirk Gently's Holistic Detective Agency",
    author: 'Douglas Adams',
    href:
      'https://www.scribd.com/book/224256014/Dirk-Gently-s-Holistic-Detective-Agency',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224256014/149x198/cde373996f/1554809797?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/224256014/298x396/ae5986b462/1554809797?v=1 2x',
  },
  {
    title: 'Flowers for Algernon',
    author: 'Daniel Keyes',
    href: 'https://www.scribd.com/book/249307845/Flowers-for-Algernon',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/249307845/149x198/94c2f0601d/1555639408?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/249307845/298x396/08e6e10f55/1555639408?v=1 2x',
  },
  {
    title: 'The Ocean at the End of the Lane: A Novel',
    author: 'Neil Gaiman',
    href:
      'https://www.scribd.com/book/163611526/The-Ocean-at-the-End-of-the-Lane-A-Novel',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/163611526/149x198/8675ea35ab/1555541444?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/163611526/298x396/e38250b9da/1555541444?v=1 2x',
  },
  {
    title: 'The Dosadi Experiment',
    author: 'Frank Herbert',
    href: 'https://www.scribd.com/book/182506950/The-Dosadi-Experiment',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/182506950/149x198/54dc4ead71/1555530546?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/182506950/298x396/0debfe0f86/1555530546?v=1 2x',
  },
  {
    title: 'Brave New World Revisited',
    author: 'Aldous Huxley',
    href: 'https://www.scribd.com/book/230130754/Brave-New-World-Revisited',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/230130754/149x198/011e5ff298/1555543920?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/230130754/298x396/4f8463b832/1555543920?v=1 2x',
  },
  {
    title: 'Gears of War: The Slab',
    author: 'Karen Traviss',
    href: 'https://www.scribd.com/book/224367869/Gears-of-War-The-Slab',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224367869/149x198/e5e4d7f5d6/1554750086?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224367869/298x396/61e574f006/1554750086?v=1 2x',
  },
  {
    title: 'Time Out of Joint',
    author: 'Philip K. Dick',
    href: 'https://www.scribd.com/book/249308710/Time-Out-of-Joint',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/249308710/149x198/7fcfc87db9/1555638264?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/249308710/298x396/9c717fad28/1555638264?v=1 2x',
  },
  {
    title: 'The Man in the High Castle',
    author: 'Philip K. Dick',
    href: 'https://www.scribd.com/book/249309559/The-Man-in-the-High-Castle',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/249309559/149x198/d5cabf640f/1555638866?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/249309559/298x396/f61be529cc/1555638866?v=1 2x',
  },
  {
    title: 'Stardust',
    author: 'Neil Gaiman',
    href: 'https://www.scribd.com/book/163644810/Stardust',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/163644810/149x198/648ca0ceed/1575274350?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/163644810/298x396/ce2ae129af/1575274350?v=1 2x',
  },
  {
    title: 'Insomnia',
    author: 'Stephen King',
    href: 'https://www.scribd.com/book/293485135/Insomnia',
    imageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/293485135/149x198/edc645bd46/1570375931?v=1',
    retinaImageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/293485135/298x396/d1b3810a54/1570375931?v=1 2x',
  },
  {
    title: 'Long Dark Tea-Time of the Soul',
    author: 'Douglas Adams',
    href:
      'https://www.scribd.com/book/224285938/Long-Dark-Tea-Time-of-the-Soul',
    imageSrc:
      'https://imgv2-1-f.scribdassets.com/img/word_document/224285938/149x198/c04ef7e06a/1574305938?v=1',
    retinaImageSrc:
      'https://imgv2-2-f.scribdassets.com/img/word_document/224285938/298x396/abe4f220d4/1574305938?v=1 2x',
  },
];

const data = [
  {
    title: 'Bestselling Books',
    items: items,
  },
  {
    title: 'Buzzy Reads This Week',
    subTitle: 'The books everybody’s talking about.',
    categoryHref: 'https://www.scribd.com/lists/21604319/Buzzy-Reads-This-Week',
    items: items,
  },
  {
    title: 'Science Fiction For You',
    categoryHref:
      'https://www.scribd.com/explore/Fiction/Science-Fiction-Fantasy/Science-Fiction',
    items: items,
  },
];

export default data;
