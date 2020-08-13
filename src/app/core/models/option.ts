export interface Option<T> {
  value: T;
  label: string;
}

export interface MultiOption<T> extends Option<T> {
  selected?: boolean;
}
