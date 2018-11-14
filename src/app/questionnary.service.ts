import { Injectable } from '@angular/core';
import { Question, QUESTIONS } from './questionnary';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaryService {

  constructor() { }

  public getQuestions():Question[] {
    return QUESTIONS;
  }
}
