import { Injectable } from '@nestjs/common';
import { CreateViewingsHistoryInput } from './dto/create-viewings-history.input';
import { UpdateViewingsHistoryInput } from './dto/update-viewings-history.input';

@Injectable()
export class ViewingsHistoriesService {
  create(createViewingsHistoryInput: CreateViewingsHistoryInput) {
    return 'This action adds a new viewingsHistory';
  }

  findAll() {
    return `This action returns all viewingsHistories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viewingsHistory`;
  }

  update(id: number, updateViewingsHistoryInput: UpdateViewingsHistoryInput) {
    return `This action updates a #${id} viewingsHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} viewingsHistory`;
  }
}
