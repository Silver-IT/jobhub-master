export interface PdfDocDefinition {
  pageSize: string;
  pageOrientation: string;
  pageMargins: Array<number>;
  footer: (currentPage: string) => Array<object>;
  header: () => Array<object>;
  content: Array<object>;
  styles: object;
}

export interface PdfProjectDetailItem {
  label: string;
  value: string | string[];
}
