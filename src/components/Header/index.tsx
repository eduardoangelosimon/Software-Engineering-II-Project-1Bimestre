import { Container, NavigationBar, NavigationButton} from "./styles";

export function Header(){
  
  return(
    <>
      <Container>
        <NavigationBar>
          <NavigationButton>Login</NavigationButton>
          <NavigationButton>Sign Up</NavigationButton>
        </NavigationBar>
      </Container>
    </>
  )
}