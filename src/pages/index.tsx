import { GetServerSideProps } from 'next';
import PageContainer from '../layout/PageContainer';
import MainSlider from '../layout/MainSlider';
import { absoluteUrl } from '../../middleware/utils';



interface IndexProps {
  mainSlider: [],
    // router:any
}

const Index = ({mainSlider}:IndexProps) => {
    return (
        <PageContainer className="index_page">
            <MainSlider slides={mainSlider}/>
           
        </PageContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {

  const { origin } = absoluteUrl(req);
  
  const mainSlider = await fetch(origin+'/api/tournaments/main-slider')
    .then(async data => await data.json())

  return {
      props: {
        mainSlider
      },
      // revalidate: 1
  }
}

export default Index
