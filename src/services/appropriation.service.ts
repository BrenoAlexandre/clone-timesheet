import { ITimesheet } from '../interfaces';

export class AppropriationService {
  constructor() {}

  public async getAppropriatedHours(): Promise<ITimesheet> {
    const response: ITimesheet = {
      totalHoursSubjected: '28:20',
      predictedHoursSubjected: '24:00',
      monthTotalHours: '160',
      extraHours: '04:20',
      missingHours: '00:00',
      timesheet: [
        {
          project: 'Trampeei',
          activities: 'Fase Piloto > Execução dos pilotos',
          start: '20.10.2022',
          hours: '6',
          subjectedHours: '6',
        },
        {
          project: 'Trampeei',
          activities: 'Fase Piloto > Execução dos pilotos',
          start: '20.10.2022',
          hours: '6',
          subjectedHours: '6',
        },
        {
          project:
            'Desafio Semestral Dos Trainees > Onde eles levam um capote absurdo e zaz e zaz e zaz',
          activities: 'Desafio Full-Stack',
          start: '13.11.2022',
          hours: '6',
          subjectedHours: '9:20',
        },
        {
          project: 'Aulas De Reforço > Recuperação do capote',
          activities: 'Se virem nos 30',
          start: '19.11.2022',
          hours: '6',
          subjectedHours: '7',
        },
      ],
    };

    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(response);
      }, 600);
    });
  }
}
