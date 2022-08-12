interface Timestamp {
  /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
   seconds: number;
   /**
    * The fractions of a second at nanosecond resolution.*
    */
    nanoseconds: number;
}



/**
 * @description Interface Agenda
 * type: talk, activity
 */
export interface Agenda{
  speakerName: string,
  company: string,
  startTime: Timestamp,
  endTime: Timestamp,
  title: string,
  description: string,
  image: string,
  type: string,
  visible: true,
}
