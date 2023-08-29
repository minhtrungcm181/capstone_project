import { ConfigService } from "@nestjs/config";
import { FileService } from "./file.service";
import { Controller, Post, UseInterceptors,  UploadedFile,} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { IFileUpload } from "src/common/fileupload.interface";
import { File } from "src/entities/file.entity";

@Controller('file')
export class FileController{
    constructor(
        private readonly fileService: FileService,
        private readonly configService: ConfigService,
    ){}
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
  async handleUploadFile(@UploadedFile() file: IFileUpload) {
    const newFile = new File(
      file.fieldname,
      file.originalname,
      file.encoding,
      file.mimetype,
      file.size,
      file.bucket,
      file.key,
      file.acl,
      file.contentType,
      file.storageClass,
      file.location,
      file.etag,
    );
    if (newFile) {
      // await this.fileRepository.createFileRecord(newFile);
      return await this.fileService.createFileRecord(newFile);
    } else {
      return null;
    }
  }
}