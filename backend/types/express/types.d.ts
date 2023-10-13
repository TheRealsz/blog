import { IUserDocument } from '../../models/users'
import { IPostDocument } from '../../models/posts';


declare global {
  namespace Express {
    export interface Request {
      users?: IUserDocument;
      post?: IPostDocument
    }
  }
}