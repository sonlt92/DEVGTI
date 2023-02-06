// Lib
import { Link } from 'react-router-dom'

// Components
import Button from '@components/Button'

// Enums
import { SIZES, VARIANTS } from '@enums'

// Helpers
import { clearLocalStorage } from '@helpers/clearLocalStorage'

const RegisterSuccess = () => {
  const handleClearLocalStorage = () => {
    clearLocalStorage('service')
  }

  return (
    <>
      <h2 className='fw-bold mb-5'>登録完了</h2>
      <h6 className='mb-5 fs-6 fw-bolder'>登録完了しました！</h6>
      <p className='mb-5 me-5'>
        ご協力ありがとうございます！ GITEC LINE APPの各種機能が利用可能になりました。
        登録情報は下記にてご確認をいただけます。
      </p>
      <Link to={'/mypage'}>
        <Button
          onClick={handleClearLocalStorage}
          size={SIZES.LARGE}
          variant={VARIANTS.MAIN}
          children='マイページ'
        />
      </Link>
    </>
  )
}

export default RegisterSuccess
