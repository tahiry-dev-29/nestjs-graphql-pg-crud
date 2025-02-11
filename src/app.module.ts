import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantModule } from './featurs/etudiant/etudiant.module';

@Module({
  imports: [EtudiantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
