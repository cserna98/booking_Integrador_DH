
import React from 'react';
import categories from '../../assets/Json/categories.json'
import './BlockCategories.css'
import img from '../../assets/img/category3.jpeg'

const Categories = () => {

 console.log(categories)

 console.log(img)
  return (
    <div className='categories'>     
        <h3 className="titleCategories">Busca por tipo de experiencia:</h3>
        <ul className="categories-container Disp_grid">
        {categories.map((category) => (
            <li className="category Disp_grid" key={category.id}>
                <img id="categoryImg" src={category.image} alt={category.title} />
                <div>
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












