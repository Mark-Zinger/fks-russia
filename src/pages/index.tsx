import { GetStaticProps } from 'next';

interface IndexProps {
    test: string,
    router:any
}

const Index = ({
  test,
  router
}:IndexProps) => {


    return (
       <h1>Привет {test}</h1>
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
