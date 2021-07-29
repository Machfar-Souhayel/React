import React, {useState} from 'react'
import styles from './catalogueMenu.module.css';

function CatalogueMenu({data}) {
    const [buttonClicked, setButtonClicked] = useState(false)

    const toggleClassMethod = (event) => {
        if(
            (event.target.innerText.toUpperCase() === 'OUR LATEST SALES' || event.target.innerText.toUpperCase().includes('VENTES'))
            && buttonClicked === false)
        {
            setButtonClicked(!buttonClicked);
        }
        else if(
            (event.target.innerText.toUpperCase() === 'OUR LATEST RENTS' || event.target.innerText.toUpperCase().includes('LOYERS'))
            && buttonClicked === true)
        {
            setButtonClicked(!buttonClicked);
        }
    }

    return (
        <div className={styles.catalogueMenu}>   
            <button 
            className={buttonClicked === true ? styles.isSelected : styles.isNotSelected }
            onClick={(e) => toggleClassMethod(e)}>{data.sales}</button>

            <button 
            className={buttonClicked === false ? styles.isSelected : styles.isNotSelected }
            onClick={(e) => toggleClassMethod(e)}>{data.rents}</button>
        </div>
    )
}

export default CatalogueMenu
