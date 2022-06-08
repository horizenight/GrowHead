/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';



const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Growth Marketing Stack - Mobile, Website',
    description: `Develop and implement a growth marketing stack across your assets. We will help you find the channels that work for your product and custom design the stack and implement it for you. The analytics built on top of it will show you how we are moving towards the targets.

    `,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Content Development',
    description: `Content — apart from code, talent, and capital — is the modern lever that powers your business. It does so via ads, blog posts, social media posts, your product itself. We create your content strategy and develop the actual content - written text, visuals, videos, etc. We are a talented team of creatives, YouTubers with silver play buttons, passionate writers with published content. We develop Blog Posts (SEO aligned), Social Media Posts, Infographics, Carousels, Video Clips, Gifs, etc. Use content to build a compounding growth loop that drives concrete business value.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Cold Emailing',
    description: `An underrated growth engine, especially for B2B startups. Fuel the 0-1 stage of your startup growth by implementing our unique framework with 90%+ positive reply rate. Implement a system to develop subject lines that make your prospect reply. We arrive at the framework by going through a period of experimentation and then once we get it working, we scale it to drive concrete business value for you.`,
  },
  {
    id: 1,
    icon: icon1,
    title: 'Growth Marketing Stack - Mobile, Website',
    description: `Develop and implement a growth marketing stack across your assets. We will help you find the channels that work for your product and custom design the stack and implement it for you. The analytics built on top of it will show you how we are moving towards the targets.

    `,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Content Development',
    description: `Content — apart from code, talent, and capital — is the modern lever that powers your business. It does so via ads, blog posts, social media posts, your product itself. We create your content strategy and develop the actual content - written text, visuals, videos, etc. We are a talented team of creatives, YouTubers with silver play buttons, passionate writers with published content. We develop Blog Posts (SEO aligned), Social Media Posts, Infographics, Carousels, Video Clips, Gifs, etc. Use content to build a compounding growth loop that drives concrete business value.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Cold Emailing',
    description: `An underrated growth engine, especially for B2B startups. Fuel the 0-1 stage of your startup growth by implementing our unique framework with 90%+ positive reply rate. Implement a system to develop subject lines that make your prospect reply. We arrive at the framework by going through a period of experimentation and then once we get it working, we scale it to drive concrete business value for you.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your startup with our Service"
          description="We take ownership of your growth engine. We obsess over it as if we are building and operating the Space Shuttle(with lives at stake) 🚀
          "
          description1="We provide strategy to build and run the growth engine(s). We execute it on your behalf. We typically partner with young startups making their 0-1 journey.
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
