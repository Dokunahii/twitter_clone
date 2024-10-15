import { Button } from 'bootstrap'
import { useEffect } from 'react'
import { Container, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import ProfileSideBar from '../components/ProfileSideBar'
import ProfileMidBody from '../components/ProfileMidBody'

export default function ProfilePage() {
    const [authToken, setauthToken] = useLocalStorage("authToken", "")
    const navigate = useNavigate()

    useEffect(() => {
      if (!authToken) {
        navigate("/login")
      }
    }, [authToken, navigate])
    
    const handleLogout = () => {
        setauthToken("")
    }

  return (
    <>
        <Navbar bg='light'>
            <Container>
                <Navbar.Brand href='/'>
                    <i
                        className='bi bi-twitter'
                        style={{ fontSize: 30, color: "dodgerblue"}}
                    ></i>
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    <Button variant="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container className='mt-3'>
            <Row>
                <ProfileSideBar handleLogout={handleLogout} />
                <ProfileMidBody />
            </Row>
        </Container>
    </>
  )
}
