import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { File } from "src/entities/file.entity";
import { Repository } from "typeorm";

@Injectable()
export class FileService{
    constructor(
        @InjectRepository(File)
        private readonly fileRepository: Repository<File>,
    ){}
    async createFileRecord(file: File): Promise<string> {
        const savedFile = await this.fileRepository.save(file);
        if (savedFile) {
          return file.location;
        } else {
          return null;
        }
      }
}