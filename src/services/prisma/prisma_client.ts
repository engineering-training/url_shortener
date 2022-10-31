import { PrismaClient as PrismaClientBase } from '@prisma/client';

export class PrismaClient {
  private readonly client: PrismaClientBase;

  constructor() {
    this.client = new PrismaClientBase();
  }

  get UrlRecord() {
    return this.client.urlRecord;
  }
}
