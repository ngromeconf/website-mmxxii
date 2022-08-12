
/**
 * @description Interface Agenda
 * type: talk, activity
 */
export interface Agenda{
  speakerName: string,
  company: string,
  startTime: Date,
  endTime: Date,
  title: string,
  description: string,
  image: string,
  type: string,
  visible: true,
}
