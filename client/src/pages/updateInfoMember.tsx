// Components
import Header from '@components/Header'
import RegisTerMember from '@components/MemberRegister'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Types
import { IMember } from 'types/member'
import { useLocation } from 'react-router-dom'

const UpdateInfoMember = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Get liffId and avatarUrl
  const liffId = location.state.lineId
  const avatar = location.state.avatar

  const handleOnSubmitForm = async (value: IMember) => {
    const member = { ...value, liffId: liffId, avatar: avatar }

    // mình có 1 obj member như ri
    // giờ làm sao đẩy nó vào db vs api

    await axios
      .post('https://35.73.207.4:4000/api/member/add', member)
      // .post('http://localhost:4000/members/add', member)
      .then((res) => localStorage.setItem('userSession', JSON.stringify(res.data)))
    navigate('/register-car')
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <RegisTerMember onSubmit={handleOnSubmitForm} />
      </div>
    </>
  )
}

export default UpdateInfoMember
