import React, { useState, useRef } from 'react';
import PageBanner from '../page-banner/banner.component';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';


const SurveyForm = () => {
  const form = useRef();
  var [step, setStep] = useState(1);
  var [formData, setFormData] = useState({
        name:'',
        email: '',
        phonenumber:'',
        income:'',
        rate:'',
        salary:'',
        salaryrate:'',
        office:'',
        officerole:'',
        currentjob:'',
        program:'',
        invest:''});
  var [submitting, setSubmitting] = useState(false);

  const previousStep = () => {
    setStep(step - 1);
  }

  const nextStep = () => {
    setStep(step + 1);
  }

  const handleSubmit = (e) => {
    
      e.preventDefault();
      emailjs.sendForm('survey_service', 'survey_template',  form.current, 'user_tWELKPjR62qHcFOOLxqsa')
      .then((result) => {
          alert("Thank you for your time your responses have been submitted");
          setSubmitting(false);

      }, (error) => {
          console.log(error.text);
      });
  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData, [name]:value})
  }

    return (
    <div>
      <PageBanner heading="Survey" text="To get started we need you to fill in the form below so that we can fully take your potential to the next level"/>
      
        <div className='container mx-auto md:w-1/3 lg:w-1/3 w-11/12 my-11 md:mt-28 md:mb-28'>
        
          <form ref={form} onSubmit={handleSubmit}>
            
              <div className={step === 1 ? 'block' : 'hidden'}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    What is your full name?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="John Doe"
                  />
                </div>
              </div>


           <div className={step === 2 ? 'block' : 'hidden'}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                What is your email address?
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  id="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
          
              </div>
            </div>
 
            <div className={step === 3 ? 'block' : 'hidden'}>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  What is your phone number?
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option>US</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phonenumber"
                  id="phone-number"
                  onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                  placeholder="+1 (555) 987-6543"
                />
                
              </div>
            </div>

            <div className={step === 4 ? 'block' : 'hidden'}>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  What is your current hourly pay or yearly salary? 
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="income"
                  id="income"
                  onChange={handleChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="60"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="rate" className="sr-only">
                    Rate
                  </label>
                  <select
                    id="rate"
                    name="rate"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option>Select</option>
                    <option>Yearly</option>
                    <option>Hourly</option>
                  </select>
                
                </div>
                  
              </div>
              
            </div>


              <div className={step === 5 ? 'block' : 'hidden'}>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                  What is your desired hourly pay or yearly salary?
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    onChange={handleChange}
    

                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="60"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="salaryrate" className="sr-only">
                      Salary Rate
                    </label>
                    <select
                      id="salaryrate"
                      name="salaryrate"
                      onChange={handleChange}

                      className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                      <option>Select</option>
                      <option>Yearly</option>
                      <option>Hourly</option>
                    </select>
                  </div>
                    
                </div>
                
              </div>

            

            
            
            <div className={step === 6 ? 'block' : 'hidden'}>
                <label htmlFor="office" className="block text-sm font-medium text-gray-700">
                  Do you work in an office setting currently? 
                </label>
                <select
                  id="office"
                  name="office"
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              
            
            
           { 
            formData.office === "No" ?
     
              <div>
              <label htmlFor="officerole" className="block text-sm font-medium text-gray-700">
                Do you desire to be in an office role? 
              </label>
              <select
                id="officerole"
                name="officerole"
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                
              >
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            
              { formData.officerole === "No"?
              <p className='pt-5 text-sm'>
              At this time, we are only seeking participants who want to work in corporate America office roles. In the future, you are welcome to join if you are open to office jobs.
              </p> :null}
            </div> 
            :
            null
            }
           </div>
          
            
          
    
                
              <div className={step === 7 ? 'block' : 'hidden'}>
                <label htmlFor="currentjob" className="block text-sm font-medium text-gray-700">
            	    Are you open to leaving your current job? 
                </label>
                <select
                  id="currentjob"
                  name="currentjob"
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

              {
                formData.currentjob === "No"?
              <p className='pt-5 text-sm'>
                  At this time, the Salary Boost Accelerator may not be the best option for you. If you request a raise at your current job and do NOT receive it, then we encourage our participants to enter the job market, get job offers, and quit their old jobs once they have a new opportunity in place. It is suggested that a person be willing to leave their current company if their goal is higher pay.
              </p>
              :
              null
              }

              </div>

              <div className={step === 8 ? 'block' : 'hidden'}>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                  Have you ever invested in a coaching program to grow yourself?
                </label>
                <select
                  id="program"
                  name="program"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

        
               
              <div className={step === 9 ? 'block' : 'hidden'}>
                <label htmlFor="invest" className="block text-sm font-medium text-gray-700">
                    How much are you willing to invest in yourself? 
                </label>
                <select
                  id="invest"
                  name="invest"
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Select</option>
                  <option>$0-$200</option>
                  <option>$201-$500</option>
                  <option>$501-$1,000</option>
                  <option>$1,001-2,500</option>
                  <option>$2,501-5,000</option>
                  <option>$5,001+</option>
                </select>
              </div>

                {
                  formData.invest === "$0-$200" ?
                  <p className='pt-5 text-sm'>
                    <p>
                      Thank you for your time today. At this time, we require a minimum investment of $499 to grow your salary with us. We do have a complimentary DIY e-book that shows you how to impact your salary using just your presentation skills! 
                    </p>
                    <p className='py-3'>
                      In case you reconsider your budget for massive return, please consider our programs below:
                    </p>

                    <p  className='pb-3'>
                      Our hands-off salary boost coaching program is $499.97.<span className='blue-text'><Link target={"_blank"} to="https://www.dreamjobuniversity.com">www.dreamjobuniversity.com</Link></span>. 
                    </p>

                    <p className='pb-3'>
                      And our group coaching program, working directly with Zana’s team is $1,499.97 link here. Click here to schedule a free one-on-one consultation call. 
                    </p>

                    <p>
                      For those interested in being personally coached, please schedule a free 1:1 consultation call here. Personal coaching is for people looking to increase their pay substantially, by over $45k, in a short amount of time, as well as people with complex backgrounds, limited work history, or no references.

                      To join the talent network of Intercom Staffing, a staffing company dedicated to placing high quality professionals in sales, marketing, technology, recruiting, and application development, please visit: <span className='blue-text'><Link target={"_blank"} to="http://www.intercomstaffing.com/">www.intercomstaffing.com</Link></span>.
                    </p>
                  </p>
                  
                  :
                
                  formData.invest === "$0-$200" ?
           
                  <div>
                    <p className='pt-5 pb-3 text-sm'>
                      Great! At this time, we offer 3 salary coaching programs to get you the pay you deserve:
                    </p>
                    <ul>
                  <li>
                    Hands-Off Coaching: Go at your own pace! Videos, step-by-step guide, downloadable forms.
                  </li>
                  <li className='py-3'>
                    Group Coaching: Work with Zana’s team and take part in weekly group sessions to ensure your success to making more in your 9-5!
                  </li>
                  <li>
                    One-on-One Coaching: Work directly with Zana! Schedule free consult here: <Link className='blue-text' target="_blank" to="https://calendly.com/zana-m">https://calendly.com/zana-m</Link>
                  </li>
                </ul>
                  </div>
                  :

                  formData.invest === "$201-$500" ?
           
                  <div>
                    <p className='pt-5 pb-3 text-sm'>
                      Great! At this time, we invite you to schedule a time on our calendar to assess your fit for your program, to increase your pay by 25% in under 90-days. Please email us at support@upmysalary.com.
                    </p>
                    <ul>
                  <li>
                    Hands-Off Coaching: Go at your own pace! Videos, step-by-step guide, downloadable forms.
                  </li>
                  <li className='py-3'>
                    Group Coaching: Work with Zana’s team and take part in weekly group sessions to ensure your success to making more in your 9-5!
                  </li>
                  <li>
                    One-on-One or Group Coaching: Work directly with Zana! Schedule free consult here: <Link className='blue-text' target="_blank" to="https://calendly.com/zana-m">https://calendly.com/zana-m</Link>
                  </li>
                </ul>
                  </div>

                  :

                  formData.invest === "$501-$1,000" ?
           
                  <div>
                    <p className='pt-5 pb-3 text-sm'>
                      Great! At this time, we offer 3 salary coaching programs to get you the pay you deserve:
                    </p>
                    <ul>
                  <li>
                    Hands-Off Coaching: Go at your own pace! Videos, step-by-step guide, downloadable forms.
                  </li>
                  <li className='py-3'>
                    Group Coaching: Work with Zana’s team and take part in weekly group sessions to ensure your success to making more in your 9-5!
                  </li>
                  <li>
                    One-on-One Coaching: Work directly with Zana! Schedule free consult here: <Link className='blue-text' target="_blank" to="https://calendly.com/zana-m">https://calendly.com/zana-m</Link>
                  </li>
                </ul>
                  </div>

                  :

                  formData.invest === "$2,501-5,000" ?
           
                  <div>
                    <p className='pt-5 pb-3 text-sm'>
                      Great! At this time, we offer 3 salary coaching programs to get you the pay you deserve:
                    </p>
                    <ul>
                  <li>
                    Hands-Off Coaching: Go at your own pace! Videos, step-by-step guide, downloadable forms.
                  </li>
                  <li className='py-3'>
                    Group Coaching: Work with Zana’s team and take part in weekly group sessions to ensure your success to making more in your 9-5!
                  </li>
                  <li>
                    One-on-One Coaching: Work directly with Zana! Schedule free consult here: <Link className='blue-text' target="_blank" to="https://calendly.com/zana-m">https://calendly.com/zana-m</Link>
                  </li>
                </ul>
                  </div>

                  :

                  formData.invest === "$5,001+" ?
           
                  <div>
                    <p className='pt-5 pb-3 text-sm'>
                      Great! At this time, we offer 3 salary coaching programs to get you the pay you deserve:
                    </p>
                    <ul>
                  <li>
                    Hands-Off Coaching: Go at your own pace! Videos, step-by-step guide, downloadable forms.
                  </li>
                  <li className='py-3'>
                    Group Coaching: Work with Zana’s team and take part in weekly group sessions to ensure your success to making more in your 9-5!
                  </li>
                  <li>
                    One-on-One Coaching: Work directly with Zana! Schedule free consult here: <Link className='blue-text' target="_blank" to="https://calendly.com/zana-m">https://calendly.com/zana-m</Link>
                  </li>
                </ul>
                  </div>
                  :
                 <p className='hidden'></p>
                }
                
             

            
        
        
            <div className='mt-5 flex flex-row justify-between'>
              <button
                type="button"
                className={step > 1 ? 'inline-flex items-center  px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white blue-bg button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' : 'hidden' }
                onClick={previousStep}
              >
                Previous
              </button>
    
              {
                step === 9 ?

                <input
                  type="submit"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white blue-bg button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  value="Submit"
                  disabled={submitting}
                />
                :
                <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white blue-bg button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={nextStep}
                
              >
                Next
              </button>
              
              }
            </div>
          </form>
        
          </div>
        
        
    </div>
    )
}

export default SurveyForm;