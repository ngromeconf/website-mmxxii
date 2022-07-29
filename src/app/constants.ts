export interface EventDateType {
  when: string;
  where: string;
  romanYear: string;
}

export interface TicketType {
  url: string;
  showButton: boolean;
}

export const EVENT_DATE: EventDateType = {
  when: 'December 2nd 2022',
  where: 'Rome',
  romanYear: 'MMXXII',
}

export const TICKET: TicketType = {
  url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022',
  showButton: true,
}

export const CALLFORPAPER: TicketType = {
  url: '',
  showButton: false,
}
