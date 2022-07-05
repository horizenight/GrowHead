/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import LogoTransparent from 'components/icons/GrowtheadTransparent.png'


export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg/> */}
  
      <img src = {LogoTransparent} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      height: 'auto',
      width: [128, null, 200],
    },
  },
};
