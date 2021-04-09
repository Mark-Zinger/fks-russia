import { GetStaticProps } from 'next';
import PageContainer from '../layout/PageContainer';
import MainSlider from '../layout/MainSlider'


interface IndexProps {
    test: string,
    // router:any
}

const Index = ({
  test,
//   router
}:IndexProps) => {

    return (
        <PageContainer className="index_page">
            <MainSlider/>
           
        </PageContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const test = 'МИР!';

    return {
        props: {
            test
        },
        // revalidate: 1
    }
}

export default Index
