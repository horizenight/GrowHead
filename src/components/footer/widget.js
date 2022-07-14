/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i}>
           
            <a href={path} key={i} label={label} variant="footer" target="_blank">
            {icon && <Image src={icon} alt={label} />}
            </a>
         
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      display:'flex',
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,

      li: {
        display: 'block',
        flex: '0 1 auto',
        alignItems: 'center',
        img: {
          mr: '15px',
          mb:'10px'
          
        },
      },
      a: {
        color: rgba('#02073E', 0.8),
      },
    },
  },
};
