export interface EventInterFace {
    id: number;
    name : string;
    location: string;
    start_date: Date;
    end_date: Date;
    status_id: number;
    status: string;
    friday_lunch: number;
    friday_dinner: number;
    saturday_breakfast: number;
    saturday_lunch: number;
    saturday_dinner: number;
    sunday_breakfast: number;
    sunday_lunch: number;
    friday_room: number;
    saturday_room: number;
    createdAt: Date;
    updatedAt: Date;
}