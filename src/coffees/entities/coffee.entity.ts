import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BeanTypes {
  ROASTED = 'roasted',
  BOILED = 'boiled',
  CUSTOM = 'custom',
}

@Entity()
@ObjectType()
export class Coffee {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;
  // @Field({ nullable: true })
  @Column()
  name: string;
  // @Field({ nullable: true })
  @Column()
  brand: string;
  // @Field({ nullable: true })
  @Column('json', { nullable: true })
  flavors?: string[];
  // @Field(() => BeanTypes, { nullable: true })
  // beanType: BeanTypes;
}
