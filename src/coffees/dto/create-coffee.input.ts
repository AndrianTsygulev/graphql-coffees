import { Field, ID, InputType } from '@nestjs/graphql';
import { BeanTypes } from '../entities/coffee.entity';
import { MinLength } from 'class-validator';

// import { BeanTypes } from '../entities/coffee.entity';

@InputType()
export class CreateCoffeeInput {
  // @Field(() => ID, {
  //   defaultValue: '1',
  //   description: 'unique item id',
  //   deprecationReason: 'out of date and not secure',
  //   nullable: false,
  // })
  // id: number;
  @MinLength(3)
  name: string;
  brand: string;
  flowers?: string[];
  // @Field(() => BeanTypes)
  // beanType: BeanTypes;
}
