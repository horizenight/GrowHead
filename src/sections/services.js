/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon11 from 'assets/images/icons/megaphone.png';
//import icon12 from 'assets/images/icons/video.png';
import icon12 from 'assets/images/icons/development.png';
import icon13 from 'assets/images/icons/performance.png';
import icon14 from 'assets/images/icons/techbuisnees.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';



const data = [
  {
    id: 1,
    icon: icon11,
    title: 'AMPLIFYING MEDIA VISIBILITY BY 100X',
    description: `Increasing media visibility through Company/Proffesional profiling opportunities
    Increasing visibility by participating in Industry and feature stories
    RBM with Media
    
   
    `,
    description2:` Strategic counsel, advice & development of the PR Campaign
    Engagement with relevant stakeholders – Media and influencers
    Key messages development
    Drafting and creating media kit – press releases, backgrounders,pitch notes etc
    Crisis planning & management`

  },
  {
    id: 3,
    icon: icon12,
    title: 'Strategic Content development( Text, Audio, Video & Graphics )',
    description: `We develop SEO aligned Blog Posts ,Social Media Posts, Infographics, Carousels, Video Clips, audio clips etc.`,
    description2: `
    The goal will either be to build a connection with an audience or to encourage some kind of marketing or sales outcome.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Email, SMS & Whatsapp marketing',
    description: `It’s important to get your message in front of customers, prospects and communities in real-time. We Implement a system to develop subject lines that make your prospect reply. We arrive at the framework by going through a period of experimentation and then once we get it working, we scale it to drive concrete business value for you.`,
  },
  {
    id: 1,
    icon: icon13,
    title: 'Performance marketing',
    description: `Unlike traditional and organic marketing, our performance marketing campaigns are specifically used to drive actions, track and measure those actions, all while attributing the ROI of each asset, campaign or activity. Our content with our performance marketing skills create ads that actually work and have higher conversions.

    `,
  },
  {
    id: 3,
    icon: icon14,
    title: 'Tech-driven Business Growth',
    description: `We Develop More Than Just A Good Looking Website or APP
    Developing website is much more than design and content. It involves carefully considering every aspect – from choosing the right development platform to considering the various tech integrations - to improve your CRO.`,
  },
  // {
  //   id: 4,
  //   icon: icon3,
  //   title: 'Cold Emailing',
  //   description: `An underrated growth engine, especially for B2B startups. Fuel the 0-1 stage of your startup growth by implementing our unique framework with 90%+ positive reply rate. Implement a system to develop subject lines that make your prospect reply. We arrive at the framework by going through a period of experimentation and then once we get it working, we scale it to drive concrete business value for you.`,
  // },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="ROI focused approach to build your business"
          description="Our mission is to enable Businessmen to inspire the change they set out to be, by addressing their every communication, media, image building and marketing needs. 🚀
          "
          description1="We blend the complexities of your business with our art of communication to reach out to your audience in a language they understand.
          "
        />

    
        <Container sx={styles.contentWrapper1}>

        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
        </Container>
       
        
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  heading1: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },

contentWrapper1:{
  "& :hover" :{
    boxShadow: ['0px' ,'0px' ,'5px' ,'5px' ,'#007aff'],
   
    transform: 'scale(1.02)',
    transition: '1s ',
  }
  

},

 

  contentWrapper: {
    gap: 30,
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
   
    paddingTop:'0',
    borderRadius:'100px',
    
    
    "& :nth-child(even)": {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
      backgroundColor:'white'

      
    },

    
  },

 
};
