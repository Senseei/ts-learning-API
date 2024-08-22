import { DataSource } from 'typeorm';

export default class AppDataSource {
  private static instance: DataSource;

  private constructor() {}

  public static getInstance(): DataSource {
    const environment = process.env.NODE_ENV ?? 'development';
    if (!AppDataSource.instance) {
      AppDataSource.instance = new DataSource({
        type: 'postgres',
        host: 'db',
        port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: true,
        logging: true,
        entities: [
          environment === 'development' ? 'src/models/**/*.ts' : 'dist/models/**/*.js'
        ],
        migrations: [
          environment === 'development' ? 'src/migrations/**/*.ts' : 'dist/migrations/**/*.js'
        ],
        subscribers: [
          environment === 'development' ? 'src/subscribers/**/*.ts' : 'dist/subscribers/**/*.js'
        ]
      });
    }
    return AppDataSource.instance;
  }
}