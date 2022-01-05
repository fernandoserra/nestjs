import { Module } from '@nestjs/common';
import { PersonsController } from './controllers/persons/persons.controller';
import { PersonsService } from './services/persons/persons.service';

@Module({
    controllers: [PersonsController],
    providers: [PersonsService],
})
export class PersonsModule {}
