
import React from 'react';
import categories from '../../assets/Json/categories.json'
import styles from './BlockCategories.module.css'
import img from '../../assets/img/category3.jpeg'
import '../../stylesVariables/variables.css'

const Categories = () => {

 console.log(categories)

 console.log(img)
  return (
    <div className={styles.categories}>     
        <h3 className={styles.titleCategories}>Busca por tipo de experiencia:</h3>
        <ul className={styles.categoriesContainer} >
        {categories.map((category) => (
            <li className={styles.category}  key={category.id}>
                <img id={styles.categoryImg} src={category.image} alt={category.title} />
                <div className={styles.text}>
                    <h4>{category.title}</h4>
                    <p>{category.Description}</p>
                </div>            
            </li>
        ))}
        </ul>
    </div>
  );
};

export default Categories;












