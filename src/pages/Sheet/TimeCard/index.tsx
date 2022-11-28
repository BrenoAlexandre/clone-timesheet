import React from 'react';
import Card from '../../../components/Card';
import style from './style.module.scss';

interface IProps {
  className: string;
  title: string;
  content: string;
}

const TimeCard = ({ className, title, content }: IProps) => {
  return (
    <Card>
      <span className={style.cardTitle}>{title}</span>
      <span className={className}>{content}</span>
    </Card>
  );
};

export default TimeCard;
