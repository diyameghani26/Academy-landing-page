import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { motion } from "motion/react";
import { useState, useEffect } from "react";


export default function Footer() {


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
      },
    },
  };


  const [showTop, setShowTop] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 400);

    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, []);



  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };



  return (


    <motion.footer

      initial={{
        opacity: 0,
        y: 80
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      viewport={{
      once: false,
  amount: 0.3,
      }}

      transition={{
        duration: 0.8
      }}


      className="bg-[#F7F9FC] pt-16 lg:pt-20 relative"

    >


      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">


        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-50 pb-14"

        >


          {/* Logo Section */}

          <div>


            <motion.div

              whileHover={{
                scale: 1.04,

              }}

              className="flex items-center"

            >


              <img

                src="./logo.png"

                alt="Bright Future Academy"

                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain shrink-0 lg:-mt-5"

              />


              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 leading-tight lg:-mt-7">

                Bright Future Academy

              </h2>


            </motion.div>



            <p className="mt-5 max-w-md text-gray-600 leading-7">

              Empowering the next generation with world-class education,
              personalized mentorship, and a commitment to academic excellence.

            </p>



            <div className="flex gap-4 mt-7">

              {
                [FaFacebookF, FaInstagram, FaXTwitter].map((Icon, index) => (


                  <a

                    key={index}

                    href="#"

                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all"

                  >


                    <Icon size={16} />


                  </a>


                ))

              }


            </div>


          </div>





          {/* Quick Links */}

          <motion.div variants={itemVariants}>


            <h3 className="text-lg font-semibold mb-6">

              Quick Links

            </h3>



            <ul className="space-y-4 text-gray-600">


              {
                ["Home", "Courses", "Results", "About Us", "Contact"].map(item => (


                  <li key={item}>


                    <motion.a

                      whileHover={{
                        x: 8
                      }}

                      href="#"

                      className="hover:text-blue-600 transition"

                    >

                      {item}

                    </motion.a>


                  </li>


                ))

              }


            </ul>


          </motion.div>






          {/* Contact */}


          <motion.div variants={itemVariants}>


            <h3 className="text-lg font-semibold mb-6">

              Contact Us

            </h3>



            <div className="space-y-5 text-gray-600">


              <div className="flex gap-3">

                <MapPin className="text-blue-600" />

                <p>
                  123 Education Hub,
                  <br />
                  Knowledge Square,
                  <br />
                  Metro City - 400001
                </p>

              </div>



              <div className="flex gap-3">

                <Phone className="text-blue-600" />

                <p>
                  +91 98765 43210
                </p>

              </div>



              <div className="flex gap-3">

                <Mail className="text-blue-600" />

                <p>
                  info@brightfuture.com
                </p>

              </div>



            </div>


          </motion.div>


        </motion.div>





        {/* Bottom */}


        <motion.div

          initial={{
            opacity: 0,
            x: 80
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.8,
            delay: 0.3
          }}


          className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600"

        >


          <p>

            © 2024 Bright Future Academy. All rights reserved.

          </p>



          <div className="flex gap-6">


            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>


            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>


          </div>



        </motion.div>



      </div>





      {/* Scroll Top Button */}


      {

        showTop && (

          <motion.button


            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            whileHover={{
              scale: 1.1
            }}


            onClick={scrollTop}


            className="
fixed
bottom-6
right-6
w-12
h-12
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
shadow-lg
z-50
"


          >


            <ArrowUp size={22} />


          </motion.button>


        )

      }



    </motion.footer>



  );

}