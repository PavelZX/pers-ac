import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { UserEntity } from '../src/app/users';

export class SeedUserRowb1563611829371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const user = getRepository(UserEntity).create({
      username: 'pavelz',
      password: 'bOOm757s'
    });

    await getRepository(UserEntity).save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
