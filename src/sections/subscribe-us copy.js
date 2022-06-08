/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import illustration from 'assets/images/subscribe-bg.png';

const SubscribeUs2 = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  const handleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Contact"
            description='hello@tal64.com'
            
          />
      
          <SectionHeading
            sx={styles.heading1}
            title="Registered Address:"
          
            description="D/114, Shyam Ashish, Samrat Complex, Bolinj Road, Virar (West), Maharashtra - 401303 | GSTIN: 27AAICT7311E1ZF"
          />
      
         
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs2;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: 'flex',
        alignItems: 'center',
    gridTemplateColumns: ['repeat(1, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['300px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  heading1: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['0', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [3, null, null, null, null, 3, 3],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  
};
