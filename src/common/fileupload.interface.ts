export interface IFileUpload extends Express.Multer.File{
  bucket: string;
  key: string;
  acl: string;
  contentType: string;
  storageClass: string;
  location: string;
  etag: string; 
}