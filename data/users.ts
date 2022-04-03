enum Role {
  USER,
  ADMIN,
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: Role;
}

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    role: Role.USER,
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    role: Role.ADMIN,
  },
];
