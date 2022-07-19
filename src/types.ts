export interface UrlParams {
  id: string;
}

export interface ICreateProductType {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}
export interface IProductType {
  avatar: string;
  category: string;
  createdAt: Date;
  description: string;
  developerEmail: string;
  id: string;
  name: string;
  price: number;
  
}
export interface ICategoryType {
  createdAt: Date;
  id: string;
  name: string;
}
