import Image from 'next/image';
import style from '../styles/Header.module.css'
import { MdShoppingCart } from 'react-icons/md'
export default function SelectBox() {
    return (
        <div className={style.selectbox}>
            {/* <select id="lang" name="lang">
                <option value='eng'>
                    <div>
                        <Image src='/images/en.png' layout="responsive" width={150} height={150} />
                    </div>
                </option>
                <option value='aze'>
                    <div>
                        <Image src='/images/en.png' layout='responsive' width={150} height={150} />
                    </div>
                </option>
                <option value='deu'>
                    <div>
                        <Image src='/images/en.png' layout='responsive' width={150} height={150} />
                    </div>
                </option>
            </select> */}
            selectbox
            <button className={style.signUp}>Sign Up</button>
            <button className={style.basket}>
                <span className={style.shoppingCard}><MdShoppingCart size='20px' /></span>
                <span className={style.basketNumber}>8</span>
            </button>
        </div>
    )
}