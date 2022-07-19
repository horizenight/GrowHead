import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import SubscribeUs2 from 'sections/subscribe-us copy';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Growthead"
          description="ROI focused approach to build your business !"
        />
        <Banner />
        <Services />
        <SubscribeUs heading="Like our service?" />
        {/* <Testimonials /> */}
        <OurTeam />
        {/* <OtherServices /> */}
        {/* <WhyUs /> */}
        {/* <Blog /> */}
        <SubscribeUs2 />
        
      </Layout>
    </ThemeProvider>
  );
}
