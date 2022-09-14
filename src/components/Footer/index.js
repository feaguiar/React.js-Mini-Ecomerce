import './style.css'
import LogoCubos from '../../assets/logo.svg'
import Face from '../../assets/facebook.svg'
import Insta from '../../assets/instagram.svg'

function Footer() {
    return (
        <footer>
            <div className='left-footer'>
                <div className='container-address'>
                    <strong>Endereço:</strong>
                    <span>Rua Cubos ,  10</span>
                    <span>Jardim Academy</span>
                    <span>Salvador - Bahia - CEP 41820-021</span>
                </div>

                <div className='container-social'>
                    <img src={Face} alt='facebook' />
                    <img src={Insta} alt='instagram' />
                </div>
            </div>

            <div className='vertical-line'></div>

            <div className='right-footer'>
                <img className='logoCubos' src={LogoCubos} alt='logo' />
            </div>
        </footer>
    )
}

export default Footer;