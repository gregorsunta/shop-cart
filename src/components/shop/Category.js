import styles from '../../styles/components/Category.module.css';
import LinkButton from '../common/LinkButton';

const Category = ({ title }) => {
  const link = title.toLowerCase().replaceAll(' ', '-');
  return <LinkButton title={title} styleClass={styles} link={link} />;
};

export default Category;
