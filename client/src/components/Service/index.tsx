// Lib
import { Link } from 'react-router-dom'

export type ServiceProps = {
  link: string
  nameService: string
  img: string
  source:string
  onGetNameService: (nameService: string) => void
}

const ServiceComponent = ({ link, nameService, source, onGetNameService }: ServiceProps) => {
  const handleGetNameService = () => {
    onGetNameService(nameService)
  }
  return (
    <Link to={link} onClick={handleGetNameService}>
      <div className='img-service'>
        <div className='text'>
          <a className='label text-decoration-none'>{nameService}</a>
        </div>
        <img className='icon' src={source} />
      </div>
    </Link>
  )
}

export default ServiceComponent
