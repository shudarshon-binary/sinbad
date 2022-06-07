import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper } from 'components/containers'
import { Button } from 'components/elements'

type HeaderProps = {
    font_family?: string
}

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--color-sand-1);
    justify-content: center;
`
const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-sand-1);
    border-radius: 5px;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
`

const HeaderTitle = styled.div<HeaderProps>`
    font-size: 34px;
    line-height: 58px;
    color: var(--color-black-1);
    font-family: ${(props) => props.font_family || 'Maven Pro'};
`
/* stylelint-disable */

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    line-height: 30px;
    text-transform: uppercase;
    color: var(--color-black-2);
    font-weight: 900;
    text-align: left;
    font-family: 'Maven Pro Bold';
    padding-right: 30px;
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    color: white;
`

const Header = () => {
    return (
        <Container>
            <ContainerWrapper>
                <HeaderContainer>
                    <StyledHeader>
                        <HeaderTitle font_family="Maven Pro Bold">Sinbad</HeaderTitle>
                        <HeaderTitle>Software</HeaderTitle>
                    </StyledHeader>
                    <NavWrapper>
                        <StyledHeaderLink to="/">Home </StyledHeaderLink>
                        <StyledHeaderLink to="/careers"> Careers </StyledHeaderLink>
                        <StyledHeaderLink to="/open-positions"> Open Positions </StyledHeaderLink>
                        <Button label="Contact Us" onClick={() => alert('')} />
                    </NavWrapper>
                </HeaderContainer>
            </ContainerWrapper>
        </Container>
    )
}

export default Header
