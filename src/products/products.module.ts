import { Module, Logger } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsResolver,
    { provide: Logger, useFactory: () => new Logger('ProductsModule') },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
