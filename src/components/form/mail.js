import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './mail.module.css'


const templateParams = {
    from_name: '',
    from_full_name: '',
    from_phone: '',
    from_email: ''
};

export default function ContactUs(props) {
  const [isSent, setIsSent] = useState(false);
  const [formContent, setFormContent] = useState(props.data);
  useEffect(() => {
    setFormContent(props.data)
  }, [props.data])
  
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('FirstName is Required'),
      lastName: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('LastName is Required'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('E-mail is Required'),
    }),
    onSubmit: values => {
      // Setting the template parameters to form value after validation
      templateParams.from_name = values.lastName
      templateParams.from_full_name = `${values.firstName} ${values.lastName}`
      templateParams.from_phone = values.phone
      templateParams.from_email = values.email
      console.log('processing')
      // Sending Email
      emailjs.send('service_bux7x09', 'template_j9t9gka', templateParams, 'user_xSvbJdIX1qg7fBmohpwyX')
      .then((result) => {
          setIsSent(true);
          formik.resetForm();
      }, (error) => {
          console.log(error.text);
      });
    }
  });  

  return (
    <div className={styles.formContainer}>
      <h1>{formContent.heading}</h1>
      <p>{formContent.description}</p>
      <p>{formContent.subHeading}</p>
      <ul>
        <li>{formContent.choiceOne}</li>
        <li>{formContent.choiceTwo}</li>
        <li>{formContent.choiceThree}</li>
      </ul>
      <form className={styles.contactForm} onSubmit={formik.handleSubmit}>
        <div className={styles.inputGroup}>
          {/*First name input and label*/}
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Prénom</label>
            <input 
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Entrer votre prénom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
            <div className={styles.errorMessage}>{formik.errors.firstName}</div>
            ) : null}
          </div>
          
          {/*Last name input and label*/}
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Nom</label>
            <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Entrer votre nom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}/>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className={styles.errorMessage}>{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        {/*phone input and label*/}
        <div className={styles.formGroup}>
          <label htmlFor="phone">Numéro téléphone</label>
          <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Entrer votre numéro de téléphone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}/>
          {formik.touched.phone && formik.errors.phone ? (
            <div className={styles.errorMessage}>{formik.errors.phone}</div>
          ) : null}
        </div>
        {/*email input and label*/}
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
          id="email"
          name="email"
          type="email"
          placeholder="Entrer votre email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}/>
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errorMessage}>{formik.errors.email}</div>
          ) : null}
          {isSent ? (<div className={styles.successMessage}>Appel effectué avec succès</div>) : null}
        </div>
        {/*submit button*/}
        <button type="submit" disabled={isSent}>Contactez-moi</button>
      </form>
    </div>
  );
}