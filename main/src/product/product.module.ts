import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../product/product.model';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
