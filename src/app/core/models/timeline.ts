export interface TimelineEvent {
  label: string;
  text: string;
  image: string;
}

export interface Timeline {
  label?: string;
  events: TimelineEvent[];
}
