import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NestjsFormDataModule } from "nestjs-form-data";
import { File } from "src/entities/file.entity";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";
import { MulterModule } from "@nestjs/platform-express";
import { S3Module } from "../s3/s3.module";
import { S3Service } from "../s3/s3.service";
import { ConfigService, ConfigModule } from "@nestjs/config";
import * as multerS3 from 'multer-s3';
import {v4 as uuidv4} from 'uuid';

@Module({
    controllers:[FileController],
    providers:[FileService, S3Service, ConfigService ],
    imports:[
        NestjsFormDataModule,
        TypeOrmModule.forFeature([File]),
        MulterModule.registerAsync({
            imports: [ConfigModule, S3Module],
            useFactory: async (configService: ConfigService, s3service: S3Service) => ({
              storage: multerS3({
                s3: s3service.client,
                bucket: configService.get<string>('S3_BUCKET'),
                acl: 'public-read',
                // contentType: multerS3.AUTO_CONTENT_TYPE,
                key: (_req, _file, callback) => {
                  const filename = _file.originalname;
                  callback(null, filename);
                },
                
              }),
            }),
            inject: [ConfigService, S3Service],
          }),
    ]
})
export class FileModule {}