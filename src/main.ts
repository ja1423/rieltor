import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

const start = async() => {
  try{
  const app=await NestFactory.create(AppModule)
  const PORT=process.env.PORT||3333;
        app.setGlobalPrefix('api')
         app.use(cookieParser())
          app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, () => {
      console.log(`Server ${PORT} portda ishga tushdi`);
    })
  } catch (error){
    console.log(error);
    
  }
  }
start();


