export interface FormModel {
    name: string,
    email: string,
    allAttending: boolean;
    childrenAttending: {
        number: number;
        dietary?: string;
        highChairs: number; 
    };
    dietary: string;
    transport: string;
}