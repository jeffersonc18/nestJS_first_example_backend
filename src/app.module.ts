import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule, 
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.gw2qm.mongodb.net/db_project_example',{
      useNewUrlParser: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
