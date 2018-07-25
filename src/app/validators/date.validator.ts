import { FormControl, AbstractControl } from '@angular/forms';

export function ValidateDate(control: FormControl): { [key: string]: boolean } {
    const date = Date.parse(control.value);
    if (isNaN(date)) {
      return { 'dateInvalid': true };
    }
    return null;
}
