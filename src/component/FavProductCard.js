import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';



const FavProductCard = ({item,setFavList,favList}) => {
    const navigate = useNavigate();
    const goDetailPage = () => {
        navigate(`/products/${item.id}`);
  }
    const removeFavProduct = (event) => {
        event.stopPropagation();
        const currentFavList = JSON.parse(localStorage.getItem('favId'));
        const newFavList = currentFavList.filter(id => id!==item.id);
        setFavList(newFavList);
        localStorage.setItem('favId',JSON.stringify(newFavList));
    }
  return (
    <div className='fav-card' onClick={()=>{goDetailPage()}}>
        <div className='img-box'>
            <img src={item.img} alt={item.title}/>
            <button className='remove-btn' onClick={(e)=>{removeFavProduct(e)}}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
        <h3>{item.title}</h3>
        <strong>₩{item.price}</strong>
    </div>
  )
}

export default FavProductCard
