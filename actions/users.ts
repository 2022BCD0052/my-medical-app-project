"use server";

import EmailTemplate from "@/components/Emails/email-templete";
import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import bcrypt from "bcrypt";
import {Resend} from "resend"
export async function createUser(formdata: RegisterInputProps) {
    const resend = new Resend(process.env.RESEND_API_KEY)
  const { firstName, lastName, email, phone, password, role } = formdata;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        formdata: null,
        error: `User with this email ( ${email})  already exists in the formdatabase`,
        status: 409,
      };
    }

    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    
    const newUser =await prismaClient.user.create({
      data: {
        Firstname : formdata.firstName,
        Lasttname : formdata.lastName,
        
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });


    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.Firstname.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "Medical App <info@jazzafricaadventures.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ firstName, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
   
    
    return {
        formdata: newUser,
        error: null,
  
    }
  } catch (error) {
    return {
      formdata: null,
      error: "An error occurred while creating the user",
      status: 500,
    };
  }
}
