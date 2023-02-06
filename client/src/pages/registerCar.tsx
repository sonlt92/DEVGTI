// Components
import CarRegister from '@components/CarRegister'
import Header from '@components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Types
import { ICar } from 'types/car'

const RegisTerCar = () => {
  const navigate = useNavigate()

  const handleOnSubmitForm = async (value: ICar) => {
    console.log('value', value)
    const existedUserSession = JSON.parse(localStorage.getItem('userSession') || 'null')

    await axios
      .post('https://35.73.207.4:4000/api/car/add', {
        // .post('https://sandy-halved-pleasure.glitch.me/users', {
        ...value,
        userId: existedUserSession.liffId,
      })
      .then((res) => localStorage.setItem('car', JSON.stringify(res.data)))
    navigate('/confirm-information')
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <CarRegister onSubmit={handleOnSubmitForm} />
      </div>
    </>
  )
}

export default RegisTerCar
