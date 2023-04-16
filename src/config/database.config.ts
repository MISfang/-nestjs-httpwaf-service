import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { databaseEnum } from '../enum/config.enum';

const configObj = config.get(databaseEnum.DATABASE_OBJ);
console.log('%c 🍿 configObj', 'font-size:16px;color:#ea7e5c', configObj);
const TypeOrmConfig = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: configObj[databaseEnum.TYPE],
    host: configObj[databaseEnum.HOST],
    port: configObj[databaseEnum.PORT],
    username: configObj[databaseEnum.USERNAME],
    password: configObj[databaseEnum.PASSWORD],
    database: configObj[databaseEnum.DATABASE],
    entities: [],
    synchronize: configObj[databaseEnum.SYNCHRONIZE],
  }),
});

export default TypeOrmConfig;
