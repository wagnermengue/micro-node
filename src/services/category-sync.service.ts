import {bind, BindingScope} from '@loopback/core';
import {rabbitmqSubscribe} from "../decorators";
import {repository} from "@loopback/repository";
import {CategoryRepository} from "../repositories";

@bind({scope: BindingScope.TRANSIENT})
export class CategorySyncService {
  constructor(
      @repository(CategoryRepository) private categoryRepo: CategoryRepository,
  ) {}
  @rabbitmqSubscribe({
    exchange: 'amq.topic',
    queue: 'x',
    routingKey: 'model.category.*'
  })

  handler({data}: {data: any}){
    console.log(data);
  }
}
