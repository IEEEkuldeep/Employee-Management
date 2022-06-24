import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    exports: [FormsModule, MatDialogModule, MatButtonModule, MatInputModule]
  })
export class MaterialModule { }
