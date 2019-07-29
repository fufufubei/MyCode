
import React ,{useEffect,useState}from 'react';

// import styles from './login.css';
import './login.css';
import LoginLay from '../components/loginLay'

export default function () {
    const [showLogin,setShowLogin]=useState(false);
    const [isLogin,setIsLogin] = useState(false);
   
    function LoginDom() {
        if (isLogin) {
            return (
                <div>
                    <div className='head um-flex um-ver'>
                        <div className='photo'><img /></div>
                        <div className='txt'>张张张娜</div>
                    </div>
    
                    <div className='line-box um-flex um-between um-ver'>
                        <i className="icon"></i>
                        <div className='um-flex-item um-flex um-ver um-between'>
                            <div className='label'>账户余额 &yen;200.00</div>
                            <div className='tip'>充值立享优惠</div>
                        </div>
                        <div className='recharge'>立即充值</div>
                    </div>
                    <div className="line-box um-flex um-between um-ver">
                        <i className="icon"></i>
                        <div className='um-flex-item label'>分享师</div>
                        <i className="icon icon-arrow"></i>
                    </div>
                    <div className="line-box um-flex um-between um-ver">
                        <i className="icon"></i>
                        <div className='um-flex-item label'>我的地址</div>
                        <i className="icon icon-arrow"></i>
                    </div>
                    <div className="line-box um-flex um-between um-ver">
                        <i className="icon"></i>
                        <div className='um-flex-item um-flex label'>客服电话 ： 0371-66666666 <div className="tip">（服务时间：09:00-22:00）</div></div>
                    </div>
                    <div className="login-out" onClick={()=>{upLogin(false,false)}}>退出账号</div>
                </div>
            )
        }
        return (
            <div>
                <div className='head um-flex um-ver'>
                    <div className='photo'><img /></div>
                    <div className='txt' onClick={()=>{setShowLogin(true)}}>登录\注册</div>
                </div>
                <div className="line-box um-flex um-between um-ver">
                    <i className="icon"></i>
                    <div className='um-flex-item um-flex label'>客服电话 ： 0371-66666666 <div className="tip">（服务时间：09:00-22:00）</div></div>
                </div>
            </div>
        )
    }
    const upLogin=(loginState:Boolean,show:Boolean)=>{
        setIsLogin(loginState)
        setShowLogin(show)
    }
    
    return (
        <div className="login">
            <LoginDom></LoginDom>
            {
                showLogin?<LoginLay login={isLogin} upLogin={upLogin} />:null
            }
        </div>
    );
}
