import { Header, Wrapper } from './style';
import AuthBar from '../AuthBar'
import HeaderLogo from './HeaderLogo'
import HeaderMenuLinks from './HeaderMenuLinks'


const Index = () => {

    return (
        <Header className="header">
            <Wrapper>
                
                <HeaderLogo/> 
                
                
                    <HeaderMenuLinks/>
               
                <AuthBar/>
            </Wrapper>
            
        </Header>
    )
}

export default Index;