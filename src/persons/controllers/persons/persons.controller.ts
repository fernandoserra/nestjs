import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
    CreatePersonDto,
    UpdatePersonDto,
    FilterDto,
} from 'src/persons/dto/person.dto';
import { PersonsService } from 'src/persons/services/persons/persons.service';

@ApiTags('persons')
@Controller('persons')
export class PersonsController {
    constructor(private personsService: PersonsService) {}

    @Get()
    @ApiOperation({ summary: 'List of person' })
    findAll(@Query() params: FilterDto) {
        return this.personsService.findAll(params);
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.personsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreatePersonDto) {
        return this.personsService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdatePersonDto,
    ) {
        return this.personsService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.personsService.remove(+id);
    }
}
