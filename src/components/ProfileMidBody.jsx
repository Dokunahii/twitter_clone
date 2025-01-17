import { useEffect, useState } from 'react'
import { Button, Col, Image, Nav, Row, Spinner } from 'react-bootstrap'
import ProfilePostCard from './ProfilePostCard'
import { jwtDecode } from 'jwt-decode'
import { useSelector } from 'react-redux'
import { fetchPostsByUser } from '../features/posts/postsSlice'

export default function ProfileMidBody() {
    const [posts, setPosts] = useState([])
    const banner = "https://pbs.twimg.com/profile_banners/83072625/1602845571/1500x500"
    const pic = "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg"

    const dispatch = userDispatch()
    const posts = useSelector(store => store.posts.posts)
    const loading = useSelector(store => store.posts.loading)

    const fetchPosts = (userId) => {
        fetch(
            //twiter-api
            ""
        )
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .then((error) => console.error("Error:", error))
    }

    useEffect(() => {
      const token = localStorage.getItem("authToken")
      if (token) {
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.id
        dispatch(fetchPostsByUser(userId))
        fetchPosts(userId)
      }
    }, [dispatch])
    

  return (
    <Col sm={6} className='bg-light' style={{border: "1px"}}>
        <Image src={banner} fluid /> 
        <br />
        <Image
            src={pic}
            roudedcircle
            style={{
                width: 150,
                position:"absolute",
                top: "140px",
                border: "4px solid #F8F9FA",
                marginLeft: 15
            }}
        />

        <Row className='justify-content-end'>
            <Col xs="auto">
                <Button className='rouded-pill mt-2' variant='outline-secondary'>
                    Edit Profile
                </Button>
            </Col>
        </Row>

        <p className='mt-5' style={{ margin: 0, fontWeight: "bold", fontSize: "15px"}}>
            Elliott
        </p>

        <p style={{marginBottom: "2px"}}>@elliott.lim</p>

        <p>I am looking for a software developer job</p>

        <p>Intern</p>

        <p>
            <strong>271</strong> Following <strong>610</strong> Followers
        </p>

        <Nav variant='underline' defaultActiveKey="/home" justify>
            <Nav.Item>
                <Nav.Link eventKey="/home">Tweets</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/link-1">Replies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/link-2">Highlights</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/link-3">Media</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/link-4">Likes</Nav.Link>
            </Nav.Item>
        </Nav>
        {loading && (
            <Spinner animation='border' className='ms-3 mt-3' variant='primary' />
        )}
        {posts.length > 0 && posts.map((post) => {
            <ProfilePostCard key={post.id} content={post.content} postId={post.id}/>
        })}
    </Col>
  )
}
