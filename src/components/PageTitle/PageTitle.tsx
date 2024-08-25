import styles from './PageTitle.module.css';

import { PageTitleProps } from '../../types/PageTitle.types';

export default function PageTitle({ num, text }: PageTitleProps) {
  return (
    <span className={styles.title}>
      <strong> {num.toString().padStart(2, '0')}</strong> {text}
    </span>
  );
}
