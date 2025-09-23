import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';   // 👈 this works fine without @types

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    (emailjs as any).send(
      'service_939fivl',   //service
      'template_4231hps',  //template
      {
        from_name: this.contact.name,
        reply_to: this.contact.email,
        message: this.contact.message,
      },
      'eAq-qqQRqcm_XOmT0'    //public
    ).then((result: any) => {
      alert('✅ Email sent successfully!');
      this.contact = { name: '', email: '', message: '' };
    }).catch((error: any) => {
      alert('❌ Failed to send email.');
      console.error(error);
    });
  }
}
