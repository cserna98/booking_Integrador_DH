
import React from 'react';
import categories from '../../assest/Json/categories.json'
import './BlockCategories.css'
import img from '../../assest/images/category4.jpeg'

const Categories = () => {

 console.log(categories)

  return (
    <div className='categories Disp_grid'>
        <h2 id="cate">Categorías</h2>
        <p id="CategoriesText">Elige la categoría que más te interese</p>      
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












