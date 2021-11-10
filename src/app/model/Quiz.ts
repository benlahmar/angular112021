import { Question } from "./Question";
import { QuizConfig } from "./quiz_config";


export class Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];
   

    constructor(data: any) {
        
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach((q:Question) => {
                this.questions.push(new Question(q));
            });
        
    }
}