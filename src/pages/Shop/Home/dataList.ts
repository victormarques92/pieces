const dataList = [
  {
    id: 1,
    product: {
      image:
        'https://img.irroba.com.br/filters:fill(fff):quality(95)/fabricad/catalog/produtos/aneis/101266/solitario-11.jpg',
      title: 'Bracelete Ninja Duplo Fiord Line',
      description:
        'Lorem ipsum facilisis gravida habitasse vestibulum, massa maecenas facilisis consectetur, suspendisse tortor morbi dolor.',
      label: 'Featured',
      featured: true,
      price: {
        unitary: 4.8,
        mint: 480,
      },
    },
    author: {
      name: 'Eduardo Rauchbach',
      role: 'Specialized in rings',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Eduardo Rauchbach',
          role: 'Specialized in rings',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
      {
        id: 2,
        author: {
          name: 'Victor Marques',
          role: 'Front-end developer',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
  {
    id: 2,
    product: {
      image:
        'https://images.vivara.com.br/Stores/Fotos/AL00087700-2.jpg',
      title: 'Anel Life Topázio',
      description:
        'Anel Life Acqua, confeccionado em prata 925 cravejado com topázio sky e topázio incolor.',
      price: {
        unitary: 3.9,
        mint: 390,
      },
    },
    author: {
      name: 'Marina Ruy Barbosa',
      role: 'Designer',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Victor Marques',
          role: 'Front-end developer',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
  {
    id: 3,
    product: {
      image:
        'https://images.vivara.com.br/Stores/Fotos/AL00096800-2.jpg',
      title: 'Anel Life Masculino',
      description:
        'Lifestyle For Men Life By Vivara, pensada e criada para homens modernos que gostam de se vestir bem, expressar seu estilo através de acessórios e são reconhecidos por seu estilo.',
      price: {
        unitary: 1.5,
        mint: 150,
      },
    },
    author: {
      name: 'Otávio Lourenço',
      role: 'Artist',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Eduardo Rauchbach',
          role: 'Specialized in rings',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
  {
    id: 4,
    product: {
      image:
        'https://images.vivara.com.br/Stores/Fotos/AN00052432-2.jpg',
      title: 'Anel Ouro Amarelo',
      description:
        'Anel Vivara, confeccionado em ouro amarelo 18k e 14,5 pontos de diamantes.',
      price: {
        unitary: 1.29,
        mint: 12.9,
      },
    },
    author: {
      name: 'Otávio Lourenço',
      role: 'Artist',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Eduardo Rauchbach',
          role: 'Specialized in rings',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
  {
    id: 4,
    product: {
      image:
        'https://images.vivara.com.br/Stores/Fotos/AL00087700-2.jpg',
      title: 'Anel Life Topázio',
      description:
        'Anel Life Acqua, confeccionado em prata 925 cravejado com topázio sky e topázio incolor.',
      price: {
        unitary: 3.9,
        mint: 390,
      },
    },
    author: {
      name: 'Marina Ruy Barbosa',
      role: 'Designer',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Victor Marques',
          role: 'Front-end developer',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
  {
    id: 5,
    product: {
      image:
        'https://img.irroba.com.br/filters:fill(fff):quality(95)/fabricad/catalog/produtos/aneis/101266/solitario-11.jpg',
      title: 'Bracelete Ninja Duplo Fiord Line',
      description:
        'Lorem ipsum facilisis gravida habitasse vestibulum, massa maecenas facilisis consectetur, suspendisse tortor morbi dolor.',
      price: {
        unitary: 4.8,
        mint: 480,
      },
    },
    author: {
      name: 'Eduardo Rauchbach',
      role: 'Specialized in rings',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Eduardo Rauchbach',
          role: 'Specialized in rings',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
      {
        id: 2,
        author: {
          name: 'Victor Marques',
          role: 'Front-end developer',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
  {
    id: 6,
    product: {
      image:
        'https://images.vivara.com.br/Stores/Fotos/AL00096800-2.jpg',
      title: 'Anel Life Masculino',
      description:
        'Lifestyle For Men Life By Vivara, pensada e criada para homens modernos que gostam de se vestir bem, expressar seu estilo através de acessórios e são reconhecidos por seu estilo.',
      price: {
        unitary: 1.5,
        mint: 150,
      },
    },
    author: {
      name: 'Otávio Lourenço',
      role: 'Artist',
    },
    comments: [
      {
        id: 1,
        author: {
          name: 'Eduardo Rauchbach',
          role: 'Specialized in rings',
        },
        message:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum',
      },
    ],
  },
];

export default dataList;
