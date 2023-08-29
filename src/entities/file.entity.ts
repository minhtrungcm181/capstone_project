import { Entity, Column} from "typeorm";
import { BaseEntity } from "./base.entity";
import {IsNotEmpty, IsNumber} from 'class-validator';

@Entity()

export class File extends BaseEntity{
    constructor(
        fieldname: string,
        originalname: string,
        encoding: string,
        mimetype: string,
        size: number,
        bucket: string,
        key: string,
        acl: string,
        contentType: string,
        storageClass: string,
        location: string,
        etag: string,
      ) {
        super();
        this.fieldname = fieldname;
        this.originalname = originalname;
        this.encoding = encoding;
        this.mimetype = mimetype;
        this.size = size;
        this.bucket = bucket;
        this.key = key;
        this.acl = acl;
        this.contentType = contentType;
        this.storageClass = storageClass;
        this.location = location;
        this.etag = etag;
      }
      @IsNotEmpty()
  @Column()
  fieldname: string;

  @IsNotEmpty()
  @Column()
  originalname: string;

  @IsNotEmpty()
  @Column()
  encoding: string;

  @IsNotEmpty()
  @Column()
  mimetype: string;

  @IsNotEmpty()
  @Column()
  @IsNumber()
  size: number;

  @IsNotEmpty()
  @Column()
  bucket: string;

  @IsNotEmpty()
  @Column()
  key: string;

  @IsNotEmpty()
  @Column()
  acl: string;

  @IsNotEmpty()
  @Column()
  contentType: string;

  @IsNotEmpty()
  @Column()
  storageClass: string;

  @IsNotEmpty()
  @Column()
  location: string;

  @IsNotEmpty()
  @Column()
  etag: string;
}