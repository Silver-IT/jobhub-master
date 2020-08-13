import { FormGroup } from '@angular/forms';

export function areFormControlsValid(form: FormGroup, fields: string[]) {
  const valids = fields.map(field => form.get(field).valid).filter(x => x);
  return valids.length === fields.length;
}
