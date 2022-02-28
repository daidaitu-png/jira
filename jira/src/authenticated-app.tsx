import styled from "@emotion/styled"
import { Row } from "components/lib"
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"

export const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return <Container>
    <Header between={true}>
      <HeaderLeft gap={true}>
        <h3>Logo</h3>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={logout}> logout </button>
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
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const Header = styled(Row)`
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

