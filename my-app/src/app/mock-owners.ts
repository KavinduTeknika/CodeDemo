import { Owner } from 'src/app/owners/owner';

export const OWNERS: Owner[] =
[
    {
      name : 'Bob',
      gender : 'male',
      age : 23,
      pets : [
        { name: 'Garfield', type: 'Cat' },
        { name: 'test', type: 'Cat' }
      ]
    },
    {
      name : 'Jennifer',
      gender : 'female',
      age : 18,
      pets : [
        { name: 'Garfield', type: 'Cat' },
        { name: 'Fido', type: 'Dog' }
      ]
    },
    {
      name : 'Steve',
      gender : 'male',
      age : 18,
      pets : [
        { name: 'Garfield', type: 'Cat' },
        { name: 'Fido', type: 'Cat' }
      ]}
];

