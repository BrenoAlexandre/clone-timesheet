import React from 'react';
import style from './style.module.scss';

interface IProps {
  size?: string;
  className?: string;
  children: React.ReactNode;
}

const Card = ({ size, className, children }: IProps): React.ReactElement => {
  return (
    <div className={`${size === 'small' ? style.card__small : style.card__large} ${className}`}>
      {children}
    </div>
  );
};

Card.defaultProps = { size: 'small', className: '' };
export default Card;
