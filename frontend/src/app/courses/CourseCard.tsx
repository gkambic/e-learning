"use client";

import { Card } from 'primereact/card';
import { useRouter } from 'next/navigation';
import styles from './CourseCard.module.css';
import { classNames } from 'primereact/utils';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  value: string;
  imageUrl: string;
}

export default function CourseCard({
  id,
  title,
  description,
  duration,
  startDate,
  value,
  imageUrl
}: CourseCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${id}`);
  };

  const header = (
    <img alt="Card" src={imageUrl} />
  );

  const footer = (

    <div className={classNames('p-d-flex', 'p-jc-between', styles.cardFooter)}>
      <div className="p-d-flex p-ai-center">
        <i className="pi pi-calendar" style={{ marginRight: '0.5rem' }}></i>
        <span>{startDate}</span>
      </div>
      <div className="p-d-flex p-ai-center">
        <i className="pi pi-clock" style={{ marginRight: '0.5rem' }}></i>
        <span>{duration}</span>
      </div>
    </div>


);
  return (
    <div className={`${styles.cardContainer} card flex justify-content-center`} onClick={handleClick}>
            <Card title={title} footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
/*     <Card
      title={description}
      className={styles.cardContainer}
      onClick={handleClick}
    >
      <div className={styles.cardImage}>
        <img src={imageUrl} alt={title} />
        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <p>{duration}</p>
          <p>{startDate}</p>
          <p>{value}</p>
        </div>
      </div>
    </Card> */
  );
  
}
