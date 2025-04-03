import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'} />
      </div>
        
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Shopping Online was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p>Since our inception, we ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and areterence. rrom tasmon and deduty To electronics and nome essentios, we otter on extensive collection sourced trom trusted brands and subdiers.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at Forever is to embower customers with choice, convenience. and confidence. We're dedicated to providing a seamless shopping experience thot exceeds expectations, from browsing and ordering to delivery and beyond</p>
          </div>
        </div>
        <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20 gap-5" >
          <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 shadow-lg shadow-green-500 ">
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously setect and vet egen product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 shadow-lg shadow-green-500">
            <b>Convenience:</b>
            <p className='text-gray-600'>With our user-friendly inter face and hassle- free ordering process, shopping has never been eaiser.</p>
          </div>
          <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 shadow-lg shadow-green-500">
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Vur Tear of dedicated professionals is here To assist yau the way, ensuring vour satistoction is our top pnariy</p>
          </div>
        </div>
        <NewsletterBox />
    </div>
  )
}

export default About
