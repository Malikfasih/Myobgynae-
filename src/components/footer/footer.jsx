import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

import { animateScroll as scroll } from 'react-scroll';

import circles from '../../images/circles.png';
import logo from '../../images/gyne-2.png';

export default function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="relative footer" name="footer">
      <img
        src={circles}
        alt=""
        className="bg-opacity-50 opacity-50 absolute right-0 object-fit lg:block hidden"
      />
      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="pt-16 xl:mt-12">
          <div className="bg-primary-900 py-5 md:px-6 rounded-lg clearfix text-center md:text-left md:flex items-center justify-between">
            <h1 className="text-white font-poppins tracking-wide py-5 px-4 text-xl md:text-3xl font-bold">
              Do you wish to book appointments easily?
            </h1>
            <p>
              <Link
                to="/book-appointment"
                className=" px-5 py-2 bg-white rounded-full text-primary-900 font-semibold hover:bg-primary-700 transition-all duration-300 ease-out shadow-md "
              >
                Register
              </Link>
            </p>
          </div>
          <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-7">
            {/*  */}
            <div className="sm:col-span-2" name="contact-us">
              <div className="mt-">
                <Link
                  className="flex items-center space-x-3"
                  onClick={toggleHome}
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-12 lg:w-20 object-fit"
                  />
                  <span className="text-primary-900 font-poppins font-semibold text-lg">
                    Myobgynae
                  </span>
                </Link>
                <p className="text-gray-600 py-5">
                  Struggles to get to the clinic? Trying to reduce your exposure
                  to COVID-19, as well as other contagious illnesses, and still
                  need to see your doctor? Myobgynae is safe and easy — receive
                  quality care from anywhere.
                </p>
                <p className=" pb-2 text-gray-600">
                  Phone (appointments): <strong>+2340813-5570-186</strong>
                </p>
                <p className="pb-2 text-gray-600">
                  Phone (general inquiries): <strong>+2340903-2983-321</strong>
                </p>
              </div>
            </div>
            {/*  */}
            <div className="sm:col-span-1 ml-4">
              <div>
                <h3 className="font-bold text-lg mb-7 text-primary-900">
                  About
                </h3>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <LinkScroll
                      to="about-us"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClass="active"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      About us
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll
                      to="doctors"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClass="active"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Doctors
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll
                      to="why-us"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClass="active"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Blog
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll
                      to="about-us"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClass="active"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Careers
                    </LinkScroll>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}
            <div className="sm:col-span-2">
              <div>
                <h3 className="font-bold text-lg mb-7 text-primary-900">
                  Company
                </h3>
                <ul className="flex flex-col space-y-3">
                  <li>
                    <Link
                      to="about-us"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-us"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Appointment cancellation policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-us"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Terms &amp; conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-us"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Disclaimers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-us"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Patient survey
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-us"
                      className="text-gray-800 hover:text-primary-900"
                    >
                      Information practices
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mt-10 border-t-2">
            <div className="pt-8 pb-5 mx-auto max-w-3xl">
              <p className="font-medium text-center">
                &copy; Copyright {new Date().getFullYear()} Myobgynae, Inc. All
                rights reserved.
              </p>
              <p className="pt-3 text-sm text-center">
                Use of this website and any information contained herein is
                governed by{' '}
                <a
                  href="https://"
                  className="text-primary-900 underline hover:no-underline pr-2"
                >
                  MIT law.
                </a>
                The content on Myobgynae does not provide medical advice. Always
                consult a medical provider for diagnosis and treatment.
              </p>
              {/* Socials */}
              <ul className="py-6 flex items-center justify-center flex-wrap space-x-6 divide">
                <li>
                  <a
                    href="https://"
                    className="text-lg bg-primary-700 py-2 px-3 text-gray-100 rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear"
                    style={{ borderRadius: '50%' }}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://"
                    className="text-lg bg-primary-700 py-2 px-3 text-white rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear"
                    style={{ borderRadius: '50%' }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://"
                    className="text-lg bg-primary-700 py-2 px-3  text-white rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear"
                    style={{ borderRadius: '50%' }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://"
                    className="text-lg bg-primary-700 py-2 px-3  text-white rounded-[100px] hover:bg-primary-800 transition-all duration-300 ease-linear"
                    style={{ borderRadius: '50%' }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
