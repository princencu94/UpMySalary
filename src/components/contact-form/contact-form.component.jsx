import React, { useRef } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';

const validate = values => {

    const errors = {};
  
    if (!values.firstname) {
      errors.firstname = 'Required!';
    }

    if (!values.lastname) {
        errors.lastname = 'Required!';
      }
  
    if (!values.email) {
  
        errors.email = 'Required!';
   
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address!';
    }
  
    if (!values.subject) {
      errors.subject = 'Required!';
    }
  
    if (!values.message) {
      errors.message = 'Required!';
    }
   
    return errors;
  }

const ContactForm =  () => {
    const form = useRef();

    const formik = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            email: '',
            phone:'',
            subject:'',
            message:''
        },
        validate,
        onSubmit: values => {
            emailjs.sendForm('survey_service', 'upmysalary_contact', form.current, 'user_tWELKPjR62qHcFOOLxqsa')
          .then((result) => {
              alert("Thank you for connecting with us today!");
          }, (error) => {
              console.log(error.text);
          });
        }
      });

    
    return (
        <form ref={form} onSubmit={formik.handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
             <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-warm-gray-900">
                First name
                </label>
                <div className="mt-1">
                <input
                    type="text"
                    name="firstname"
                    id="first-name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-green-200 focus:border-green-500 border-gray-300 rounded-md"
                />
                {formik.touched.firstname && formik.errors.firstname ? <span className="text-sm text-red-700">{formik.errors.firstname}</span> : null}
                </div>
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                Last name
                </label>
                <div className="mt-1">
                <input
                    type="text"
                    name="lastname"
                    id="last-name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-200 focus:border-green-500 border-gray-300 rounded-md"
                />
                {formik.touched.lastname && formik.errors.lastname ? <span className="text-sm text-red-700">{formik.errors.lastname}</span> : null}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
                </label>
                <div className="mt-1">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-200 focus:border-green-500 border-gray-300 rounded-md"
                />
                {formik.touched.email && formik.errors.email ? <span className="text-sm text-red-700">{formik.errors.email}</span> : null}
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                    Phone
                </label>
                <span id="phone-optional" className="text-sm text-gray-500">
                    Optional
                </span>
                </div>
                <div className="mt-1">
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-200 focus:border-green-500 border-gray-300 rounded-md"
                    aria-describedby="phone-optional"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                Subject
                </label>
                <div className="mt-1">
                <select
                    id="subject"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue="Elite Performer Coaching Program"
                >
                    <option>Elite Performer Coaching Program</option>
                    <option>Group Coaching</option>
                    <option>Self-Walk Program</option>
                    <option>Resume Service</option>
                    <option>Linkedin Service</option>
                    <option>Mock Interviews</option>
                    <option>One on One Coaching</option>
                    <option>Other</option>
                </select>
                {formik.touched.subject && formik.errors.subject ? <span className="text-sm text-red-700">{formik.errors.subject}</span> : null}
                </div>

            </div>
            <div className="sm:col-span-2">
                <div className="flex justify-between">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                </label>
                <span id="message-max" className="text-sm text-gray-500">
                    Max. 500 characters
                </span>
                </div>
                <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-200 focus:border-green-500 border-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={''}
                />
                {formik.touched.message && formik.errors.message ? <span className="text-sm text-red-700">{formik.errors.message}</span> : null}
                </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white blue-bg button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto"
                >
                Submit
                </button>
            </div>
        </form>
    )
}


export default ContactForm;