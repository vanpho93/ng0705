export interface Word {
    _id: string;
    en: string;
    vn: string;
    isMemorized: boolean;
}

export interface AppState {
    value: number;
    words: Word[];
    filterMode: string;
    shouldShowForm: boolean;
}
