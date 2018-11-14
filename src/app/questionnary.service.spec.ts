import { TestBed } from '@angular/core/testing';

import { QuestionnaryService } from './questionnary.service';

describe('QuestionnaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaryService = TestBed.get(QuestionnaryService);
    expect(service).toBeTruthy();
  });
});
