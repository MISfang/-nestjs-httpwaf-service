import { TypeOrmModule } from '@nestjs/typeorm';

const TypeOrmConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'understandme520',
  database: 'nestjs-waf',
  entities: [],
  synchronize: true,
});

export default TypeOrmConfig;
