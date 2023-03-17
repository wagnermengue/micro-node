import {bind, BindingScope} from '@loopback/core';
import {rabbitmqSubscribe} from "../decorators";
import {repository} from "@loopback/repository";
import {CastMemberRepository} from "../repositories";
import {Message} from "amqplib";
import {BaseModelSyncService} from "./base-model-sync.service";

@bind({scope: BindingScope.SINGLETON})
export class CastMemberSyncService extends BaseModelSyncService {
  constructor(
      @repository(CastMemberRepository) private repo: CastMemberRepository,
  ) {
    super();
  }
  @rabbitmqSubscribe({
    exchange: 'amq.topic',
    queue: 'micro-catalog/sync-videos/cast-member',
    routingKey: 'model.cast-member.*'
  })

  async handler({data, message}: {data: any, message: Message}){
    await this.sync({
      repo: this.repo,
      data,
      message
    });
  }
}
