export interface FormModel {
    allAttending: boolean;
    childrenAttending: {
        number: number;
        dietary?: string;
        highChairs: number; 
    };
    dietary: string;
    transport: string;
}