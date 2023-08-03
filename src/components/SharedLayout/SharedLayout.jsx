
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/Container/Container';
import { Div, FilterInput, Header, LanguageSwitcher, Title } from './SharedLayout_css';

// import { useAuth } from 'redux/Auth/useAuth';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';

export function SharedLayout() {

    // const {isLoggedIn} = useAuth();

    return (
        <Header>
                <Container>
                    <Div>
                    <Title>
                    Event Planner
                    </Title>
                    <LanguageSwitcher>UK</LanguageSwitcher>

                    </Div>
                    
                    <FilterInput></FilterInput>                  
                    
                </Container>

        </Header>);
}