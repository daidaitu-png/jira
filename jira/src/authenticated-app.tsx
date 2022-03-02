import styled from "@emotion/styled"
import { Row } from "components/lib"
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg'
import { Button, Dropdown, Menu } from "antd"

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth()
  return <Container>
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown overlay={<Menu>
          <Menu.Item key={'logout'}>
            <Button type="link" onClick={logout}>logout</Button>
          </Menu.Item>
        </Menu>}>
          <Button type="link" onClick={e => e.preventDefault()}>Hi, {user?.name}</Button>
        </Dropdown>
        {/* <button onClick={logout}> logout </button> */}
      </HeaderRight>
    </Header>
    <Main>
      <ProjectListScreen />
    </Main>
  </Container>
}

const PageHeader = styled.header`
  height: 6rem;
`

const Main = styled.main`
  height: calc(100vh-6rem);
  padding: 3.2rem;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const Header = styled(Row)`
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
  z-index: 1;
  padding: 3.2rem;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  /* justify-content: space-between; */
`

const HeaderLeft = styled(Row)`
  /* display: flex;
  align-items: center; */
`

const HeaderRight = styled.div`
  
`

const HeaderItem = styled.h3`
  margin-right: 3rem;
`

