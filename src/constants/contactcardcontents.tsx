export interface ContactCardContent {
  label: string;
  info: string;
}

export const AddressInfo: ContactCardContent[] = [
  {
    label: 'address',
    info: 'Piotrkowska 128 Łódź',
  },
  {
    label: 'phone',
    info: '+48 42 308 00 40',
  },
  {
    label: 'email',
    info: 'restauracjatestowa@gmail.com',
  },
];

export const OpenTimeInfo: ContactCardContent[] = [
  {
    label: 'pon-czw',
    info: '11:00 - 17:00',
  },
  {
    label: 'pt',
    info: '11:00 - 17:00',
  },
  {
    label: 'sob',
    info: '11:00 - 17:00',
  },
  {
    label: 'nd',
    info: '11:00 - 17:00',
  },
];
