import React, { useCallback, useEffect, useState } from 'react';
import style from './style.module.scss';
import Card from '../../components/Card/';
import TimeCard from './TimeCard';
import ArrowUp from '../../assets/ArrowUp.svg';
import { ITimesheet } from '../../interfaces';
import { AppropriationService } from '../../services/appropriation.service';

const user = {
  name: 'Breno Alexandre',
};

const Sheet: React.FunctionComponent = () => {
  const [timesheet, setTimesheet] = useState<ITimesheet>({
    totalHoursSubjected: '',
    predictedHoursSubjected: '',
    monthTotalHours: '',
    extraHours: '',
    missingHours: '',
    timesheet: [
      {
        project: '',
        activities: '',
        start: '',
        hours: '',
        subjectedHours: '',
      },
    ],
  });

  const fetchTimesheet = useCallback(async () => {
    const service = new AppropriationService();
    const result = await service.getAppropriatedHours();
    setTimesheet(result);
  }, []);

  useEffect(() => {
    fetchTimesheet();
  }, []);
  return (
    <Card size='large' className={style.home}>
      <span className={style.homeTitle}>Boas-Vindas, {user.name}!</span>
      <section className={style.cardContainer}>
        <TimeCard
          className={style.subjectHours}
          title='Horas feitas no mês'
          content={`${timesheet.totalHoursSubjected} / ${timesheet.monthTotalHours}h`}
        />
        <TimeCard
          className={style.expectedHours}
          title='Previsão de horas'
          content={`${timesheet.predictedHoursSubjected} / ${timesheet.monthTotalHours}h`}
        />
        <TimeCard
          className={timesheet.extraHours !== '00:00' ? style.extraHours : style.HourTypography}
          title='Horas Extras'
          content={timesheet.extraHours}
        />
        <TimeCard
          className={timesheet.missingHours !== '00:00' ? style.missingHours : style.HourTypography}
          title='Horas Negativas'
          content={timesheet.missingHours}
        />
      </section>
      <div className={style.tableTitle}>
        <span>Projeto em andamento</span>
      </div>
      <section className={style.homeTable}>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.tableColumn__1}>
                <span>Projeto</span>
                <img src={ArrowUp} />
              </th>
              <th className={style.tableColumn__2}>
                <span>Atividades</span>
                <img src={ArrowUp} />
              </th>
              <th className={style.tableColumn__3}>
                <span>Início</span>
                <img src={ArrowUp} />
              </th>
              <th className={style.tableColumn__4}>
                <span>Horas projeto</span>
                <img src={ArrowUp} />
              </th>
              <th className={style.tableColumn__5}>
                <span>Horas apropriadas</span>
                <img src={ArrowUp} />
              </th>
            </tr>
          </thead>
          <tbody>
            {!!timesheet &&
              timesheet.timesheet.map((day, i) => {
                return (
                  <tr key={i}>
                    <td className={style.tableColumn__1}>{day.project}</td>
                    <td className={style.tableColumn__2}>{day.activities}</td>
                    <td className={style.tableColumn__3}>{day.start}</td>
                    <td className={style.tableColumn__4}>{day.hours} horas</td>
                    <td className={style.tableColumn__5}>{day.subjectedHours} horas</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </Card>
  );
};

export default Sheet;
