export interface Article {
    id: number;
    title: string;
    description: string;
    page_id: number;
    page: string;
    page_real_name: string;
    img: string;
    swiper: boolean;
    src: string;
    year: string;
    createdAt: Date;
    updatedAt: Date;
}