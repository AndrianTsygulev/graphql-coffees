import { Module } from '@nestjs/common';
import { CoffeesResolver } from './resolvers/coffees.resolver';
import { CoffeesService } from './services/coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
