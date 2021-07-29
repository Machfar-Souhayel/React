import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'

// Data passed to all components as props
import { 
  formData, 
  articleData, 
  footerData,
  ratedCardData,
  expertiseListData,
  catalogueMenuData,
  scrollDownData
} from './../../data/data'

// Components
import LanguageSwitch from './../../components/languageSwitch/LanguageSwitch'
import Form from './../../components/form/Form'
import Article from './../../components/article/Article';
import Footer from './../../components/footer/Footer';
import RatedCard from './../../components/ratedCard/RatedCard';
import ExpertiseList from './../../components/expertiseList/ExpertiseList';
import CatalogueMenu from './../../components/catalogueMenu/CatalogueMenu';
import Card from './../../components/card/Card';
import ScrollButton from './../../components/scrollButton/ScrollButton'

function Dashboard() {
    const [languageState, setLanguageState] = useState('FR')
    // Setting up state for all component data as props
    const [formDataBasedOnState, setFormDataBasedOnState] = useState([])
    const [articleDataBasedOnState, setArticleDataBasedOnState] = useState([])
    const [footerDataBasedOnState, setFooterDataBasedOnState] = useState([])
    const [ratedCardDataBasedOnState, setRatedCardDataBasedOnState] = useState([])
    const [expertiseListDataBasedOnState, setExpertiseListDataBasedOnState] = useState([])
    const [catalogueMenuDataBasedOnState, setCatalogueMenuDataBasedOnState] = useState([])
    const [scrollDownDataBasedOnState, setScrollDownDataBasedOnState] = useState([])

    // The useEffect hook will be called only when setLanguageState method is called
    useEffect(() => {
    setFormDataBasedOnState(languageState === 'FR' ? formData[0] : formData[1]);
    setArticleDataBasedOnState(languageState === 'FR' ? articleData[0] : articleData[1])
    setFooterDataBasedOnState(languageState === 'FR' ? footerData[0] : footerData[1])
    setRatedCardDataBasedOnState(languageState === 'FR' ? ratedCardData[0] : ratedCardData[1])
    setExpertiseListDataBasedOnState(languageState === 'FR' ? expertiseListData[0] : expertiseListData[1])
    setCatalogueMenuDataBasedOnState(languageState === 'FR' ? catalogueMenuData[0] : catalogueMenuData[1])
    setScrollDownDataBasedOnState(languageState === 'FR' ? scrollDownData[0] : scrollDownData[1])
    }, [languageState])
    return (
        <React.Fragment>
            <img src="./images/chowcaseImage.png" alt="showcaseImg"/>
            <header>
                <figure>
                    <img src="./images/Group 973.png" alt="logo"/>
                    <figcaption>AGORIM</figcaption>
                </figure>
                <LanguageSwitch onChange={val => setLanguageState(val)}/>
            </header>
            <section className={styles.showcaseSection}>
                <Article data={articleDataBasedOnState}/>
                <RatedCard data={ratedCardDataBasedOnState}/>
                <ExpertiseList data={expertiseListDataBasedOnState}/>
                <ScrollButton data={scrollDownDataBasedOnState} />
            </section>
            <CatalogueMenu data={catalogueMenuDataBasedOnState}/>
            <section className={styles.cardSection}>
                <Card imgSrc={"/images/imgCard1.png"} cap={"Old Vicarage"}/>
                <Card imgSrc={"/images/imgCard2.png"} cap={"Sunnyside House"}/>
                <Card imgSrc={"/images/imgCard3.png"} cap={"Springfield House"}/>
            </section>
            <Form data={formDataBasedOnState} className="floatingForm"/>            
            <Footer data={footerDataBasedOnState}/>
        </React.Fragment>
    )
}

export default Dashboard
