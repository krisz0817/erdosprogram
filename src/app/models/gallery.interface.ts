export interface Gallery {
    id: number;
    year: number;
    title: string;
    images: Array<Image>;    
    createdAt: Date;
    updatedAt: Date;
}
interface Image{
    gallery_id: number;
    name: string;
}