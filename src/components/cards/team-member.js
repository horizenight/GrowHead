/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaDribbble ,FaInstagram,FaFirefoxBrowser} from 'react-icons/fa';

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        <Image src={member?.avatar} alt={member?.name} />
      </Flex>
      <Box sx={styles.about}>
        <Heading as="h3">{member?.name}</Heading>
        <Box >

        <Text as="p">{member?.designation}</Text>
        <Text as="p">{member?.designation2}</Text>
        </Box>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaFirefoxBrowser size="18px" color="black" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="18px" color="#161614" />
              )}
              {social?.name === 'dribbble' && (
                <FaDribbble
                  size="18px"
                  color="#B2215A"
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
              {social?.name === 'instagram' && (
                <FaInstagram
                  size="18px"
                  color="#B2215A"
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    padding:'1rem',
    borderRadius:'10px',
    width:  '300px',
    height: '300px',
    objectFit:'cover',
    "& :nth-child(even)":{
     
      backgroundColor:'white',
      padding:'1rem',
      
    },


    
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
