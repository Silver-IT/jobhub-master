import { TemplateRef } from '@angular/core';

export interface TableColumn {
  label?: string;
  name?: string;
  width?: string;
  templateRef?: TemplateRef<any>;
  // TODO: additional fields
}
