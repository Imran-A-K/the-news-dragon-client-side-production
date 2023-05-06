import React from 'react'
import { Button } from 'react-bootstrap'
import { FaGoogle,FaGithub,FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className='mt-4'>Login with</h4>
      <Button variant="outline-primary mb-2"><FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub>Login with Github</Button>
      <div>
        <h4 className='mt-4'>Find us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  )
}

export default RightNav