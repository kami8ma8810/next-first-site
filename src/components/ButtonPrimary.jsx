import * as style from '../styles/components/button.module.scss';


const ButtonPrimary =(props)=>{
	return (
		<div className={style.buttonPrimary}>{props.children}</div>
	)
}
export default ButtonPrimary;