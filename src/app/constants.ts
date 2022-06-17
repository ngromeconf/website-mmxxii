export interface EventDateType {
  when: string;
  where: string;
  romanYear: string;
}

export interface TicketType {
  conferenceTicketLink: string;
  showButton: boolean;
}

export const EVENT_DATE: EventDateType = {
  when: 'December 2nd 2022',
  where: 'Rome',
  romanYear: 'MMXXII',
}

export const TICKET: TicketType = {
  conferenceTicketLink: '',
  showButton: false,
}
