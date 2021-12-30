import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from 'src/persons/dto/person.dto';
import { Person } from 'src/persons/entities/person.entity';

@Injectable()
export class PersonsService {
    private personId = 1;
    private person: Person[] = [
        {
            id: 1,
            name: 'Fernando Serra',
            email: 'fernando@gmail.com',
        },
    ];

    findAll() {
        return this.person;
    }

    findOne(id: number) {
        const user = this.person.find((item) => item.id === id);
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }

    create(data: CreatePersonDto) {
        this.personId = this.personId + 1;
        const newPerson = {
            id: this.personId,
            ...data,
        };
        this.person.push(newPerson);
        return newPerson;
    }

    update(id: number, changes: UpdatePersonDto) {
        const person = this.findOne(id);
        const index = this.person.findIndex((item) => item.id === id);
        this.person[index] = {
            ...person,
            ...changes,
        };
        return this.person[index];
    }

    remove(id: number) {
        const index = this.person.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`User #${id} not found`);
        }
        this.person.splice(index, 1);
        return true;
    }
}
