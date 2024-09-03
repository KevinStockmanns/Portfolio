import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { Title } from '@angular/platform-browser';
import { ButtonComponent } from '../../components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, ReactiveFormsModule, LoaderComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  form:FormGroup
  loading = false;
  message = "";

  constructor(protected titleService: Title, private formBuilder:FormBuilder,
    private http: HttpClient
  ){
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(3000), Validators.minLength(20)]]
    })


    // this.form.events.subscribe(el=>console.log(el))
  }


  getValue(control:string){
    return this.form.get(control)?.value;
  }
  hasOneError(control:string){
    return this.form.get(control)?.invalid && this.form.get(control)?.touched;
  }
  hasError(control:string, error:string){
    return this.form.get(control)?.getError(error) && this.form.get(control)?.touched;
  }
  getError(control:string, error:string){
    return this.form.get(control)?.getError(error);
  }


  onSubmit(){
    this.form.markAllAsTouched();
    if(this.form.valid && !this.loading){
      this.loading = true;
      this.http.post('https://formsubmit.co/ajax/stockmannskevin@email.com', {form_data: this.form.value}).subscribe({
        next: (res:any)=>{
          console.log(res);
          this.loading = false;
          if(res.succes){
            this.message = 'Mensaje enviado con éxito.'
          }else{
            this.message = 'Ocurrio un error al enviar el mensaje.'
          }
          
        },
        error: err=>{
          console.log(err);
          this.loading = false;
          this.message = 'Ocurrio un error al enviar el mensaje.'
        }
      });
    }
  }
}
