export class Question {
    public id: number;
    public name?: string;
    public question: string;
    public reponse1: string;
    public reponse2?: string;

    constructor(p_id: number, p_name: string, p_question: string, p_reponse1: string, p_reponse2: string) {
        this.id = p_id;
        this.name = p_name;
        this.question = p_question;
        this.reponse1 = p_reponse1;
        this.reponse2 = p_reponse2;
    }
}

export const QUESTIONS: Question[] = [
    {
        "id": 0,
        "question": "READY TO DISCOVER YOUR INNER PLANET ?",
        "reponse1": "START"
    },
    
    {
        "id": 1,
        "name": "Question 1",
        "question": "WHAT DO YOU PREFER, OCEANS OR MOUNTAINS ?",
        "reponse1": "OCEAN",
        "reponse2": "MOUNTAIN"
    },

    {
        "id": 2,
        "name": "Question 2",
        "question": "ARE YOU SOCIABLE OR LONER ?",
        "reponse1": "SOCIABLE",
        "reponse2": "LONER"
    },

    {
        "id": 3,
        "name": "Question 3",
        "question": "DO YOU LIKE TRAVELING OR STAYING AT HOME ?",
        "reponse1": "TRIP",
        "reponse2": "COUCH POTATOES"
    },

    {
        "id": 4,
        "name": "Question 4",
        "question": "ARE YOU DOING SPORTS TWICE A WEEK OR MORE LIKE ONCE A YEAR ?",
        "reponse1": "SPORTY",
        "reponse2": "LAZY"
    },

    {
        "id": 5,
        "name": "Question 5",
        "question": "DO YOU PREFER BEING FROZEN AT ABSOLUTE ZERO OR BEING BURNED LIKE HELL ?",
        "reponse1": "ICE",
        "reponse2": "FIRE"
    },
];
