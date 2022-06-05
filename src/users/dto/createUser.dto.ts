import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserdto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  emailId: string;

  @IsNotEmpty()
  mobileNumber: string;

  @IsNotEmpty()
  homeAdress: string;

  @IsNotEmpty()
  officeAdress: string;
}
