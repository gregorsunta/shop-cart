import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/Category.module.css';

const Category = ({ title }) => {
  const link = title.toLowerCase().replaceAll(' ', '-');
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.name}  ${styles.active}` : `${styles.name}`
      }
      to={`/shop/${link}`}
    >
      <p>{title}</p>
    </NavLink>
  );
};

export default Category;
