/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import avatar1 from 'assets/images/team/avatar1.png';
import avatar11 from 'assets/images/team/avatar11.jpeg';
import avatar12 from 'assets/images/team/avatar12.png';
import avatar13 from 'assets/images/team/avatar13.png';
import avatar14 from 'assets/images/team/avatar14.png';

import avatar2 from 'assets/images/team/avatar2.png';
import avatar3 from 'assets/images/team/avatar3.png';
import avatar4 from 'assets/images/team/avatar4.png';
import avatar5 from 'assets/images/team/avatar5.png';
import avatar6 from 'assets/images/team/avatar6.png';
import avatar7 from 'assets/images/team/avatar7.png';
import avatar8 from 'assets/images/team/avatar8.png';
import avatar9 from 'assets/images/team/avatar9.png';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);



const data = [
 
  // {
  //   id: 2,
  //   avatar: avatar2,
  //   name: 'Stack',
  //   designation: 'Stack Finance is a Vanguard for India — designed to automate savings, spending, and investments along with friends and family.',
    
  //   designation2: 'Backed by: Y-Combinator, AngelList India',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
  //     {
  //       name: 'instagram',
  //       link: 'http://instagram.com',
  //     },
    
  //   ],
    
  // },
  // {
  //   id: 3,
  //   avatar: avatar3,
  //   name: 'Nihal Sarin',
  //   designation: '17-year-old grandmaster ranked world top 100 in classical chess. Among the strongest bullet and blitz players in the world.',
  //   designation2:'Backed by: Akshayakalpa',

  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
  //     {
  //       name: 'instagram',
  //       link: 'http://instagram.com',
  //     },
      
  //   ],
  // },
  // {
  //   id: 4,
  //   avatar: avatar4,
  //   name: 'CustomerGlu',
  //   designation: 'A SaaS platform to gamify customer engagement and solve the problem of user churn.',
  //   designation2:'Backed by: Techstars, Better Capital',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
      
  //       {
  //         name: 'instagram',
  //         link: 'http://instagram.com',
  //       },
  //   ],
  // },
  
  // {
  //   id: 5,
  //   avatar: avatar5,
  //   name: 'Barrel Motors',
  //   designation: 'A global D2C aftermarket bike accessories platform with a passionate consumer base now building Electric Bikes.',
  //   designation2:'Backed by: Angels',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
      
  //       {
  //         name: 'instagram',
  //         link: 'http://instagram.com',
  //       },
  //   ],
  // },

 

  // {
  //   id: 6,
  //   avatar: avatar6,
  //   name: 'Threedots',
  //   designation: 'The community for everyone to discuss the markets, interact with experts, and gain financial independence.',
  //   designation2:'Backed by: Kunal Shah, Better Capital',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
      
  //       {
  //         name: 'instagram',
  //         link: 'http://instagram.com',
  //       },
  //   ],
  // },
  // {
  //   id: 7,
  //   avatar: avatar7,
  //   name: 'Chesslang',
  //   designation: 'Chess coaching platform that allows chess coaches to set up an online academy right from their website. Within 2 minutes.',
  //   designation2:'Backed by: Bootstrapped',
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
      
  //       {
  //         name: 'instagram',
  //         link: 'http://instagram.com',
  //       },
  //   ],
  // },
  // {
  //   id: 8,
  //   avatar: avatar8,
  //   name: 'Spektacom',
  //   designation: 'Spektacom is a sportstech startup led by Cricket legend Anil Kumble, India’s most successful bowler. The firm develops products for performance analysis and fan engagement.',
  
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
      
  //       {
  //         name: 'instagram',
  //         link: 'http://instagram.com',
  //       },
  //   ],
  // },

  // {
  //   id: 9,
  //   avatar: avatar9,
  //   name: 'Unposted Letters',
  //   designation: 'Unposted Letters is the official store of Vimal Chandran. It is an extention of a series of doodles by Vimal. The design philosophy - simple, minimal and impactful.',
   
  //   socialLinks: [
  //     {
  //       name: 'twitter',
  //       link: 'http://twitter.com',
  //     },
      
  //       {
  //         name: 'instagram',
  //         link: 'http://instagram.com',
  //       },
  //   ],
  // },

  {
    id: 11,
    avatar: avatar11,
    name: 'FirstCure Health',
    designation: 'Simplifying surgeries by bringing together best doctors, high quality modern procedures at affordable costs and personalized assistance.',

    socialLinks: [
      {
        name: 'twitter',
        link: 'https://www.firstcurehealth.com',
      },
    
     
     
   
      
    ],
 
  },
  
  {
    id: 12,
    avatar: avatar12,
    name: 'SupplyNote',
    designation: `Delivers
    in your Supply Chain
    Cloud based procurement management suite with integrated
    E-Commerce for HoReCa`,

    socialLinks: [
      {
        name: 'twitter',
        link: 'https://www.supplynote.in',
      },
    
     
   
      
    ],
 
  },
  {
    id: 13,
    avatar: avatar13,
    name: 'Asia Tech Journal',
    designation: 'Asia Tech Journal is South-East Asia’s Tech & Innovation Media Platform, where we dive into the enticing world of Technology & Innovation to bring incisive information and insights to empower decision making and intellectual curiosity of the Tech-savvies.',
  
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://asiatechjournal.com',
      },
    
    
     
   
      
    ],
  
  },
  {
    id: 14,
    avatar: avatar14,
    name: 'TATA Tele Buisness Services',
    designation: 'Tata Tele Business Services (TTBS), belonging to the prestigious Tata Group of Companies, is the country’s leading enabler of connectivity and communication solutions for businesses',
  
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://www.tatatelebusiness.com',
      },
    
   
     
   
      
    ],
  
  },
  
 
  
];


const data2 = [ {
  id: 13,
  avatar: avatar13,
  name: 'Asia Tech Journal',
  designation: '',

  socialLinks: [
    {
      name: 'twitter',
      link: 'https://asiatechjournal.com/wp-content/uploads/2022/04/ATJ-Logo.png',
    },
  
  
   
 
    
  ],

},
{
  id: 14,
  avatar: avatar14,
  name: 'Tata Tele Business Services',
  designation: 'Tata Tele Business Services (TTBS), belonging to the prestigious Tata Group of Companies, is the country’s leading enabler of connectivity and communication solutions for businesses',

  socialLinks: [
    {
      name: 'twitter',
      link: 'https://www.tatatelebusiness.com',
    },
  
 
   
 
    
  ],

},
];



const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Meet our 
🏆 Clients"
          description=""
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
         
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [5, null, null, 12, null, 14],
    pb: [1, null, null, 12, null, 14],
  
   
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    
   
   
    pl: [0],
    pr: [0, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
