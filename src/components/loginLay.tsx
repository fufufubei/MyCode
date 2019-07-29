import React,{useState,useEffect} from 'react'
import  './loginLay.css';
import { ProgressPlugin } from 'webpack';

export default function(props:Object){
    const [form,setForm]=useState(()=>{
        return{
            tel:'',
            code:'',
            imgCode:''
        }
    });
   
    // const [time,setTime]=useState(60);
    const [sendTxt,setSendTxt]=useState('获取短信');
    // const telChange=  ({ currentTarget: input})  =>{
    //     form[input.name] = input.value;
    //     setForm({ ...form });
    // }
    const inpChange=(e:React.ChangeEvent<HTMLInputElement>,b:String)=>{
        console.log(props.login)
        form[b]=e.currentTarget.value
        setForm({...form})
    }    
    const sendCode = ()=>{
        if(form.tel.length!=11){return alert('请输入正确手机号')};
        if(sendTxt!='获取短信')return;
        let time=6;
        const timer=setInterval(()=>{
            if(time>1){
                time--;
                setSendTxt(`${time}s`);
            }else{
                setSendTxt('获取短信');
                clearInterval(timer);
            }
        },1000)

    }
    const submit= ()=>{
        console.log(form,'submit')
        // props.login=true;
        console.log(props)
        props.upLogin(true,false);
    }
        
    return (
        
        <div className="login-lay">
            <div className="lay-content">
                <div className="main">
                    <div className="inp"><input type="tel" name="tel" value={form.tel} onChange={(e)=>{inpChange(e,'tel')}} placeholder="请输入手机号" maxLength={11}/></div>
                    <div className="um-flex um-between um-ver">
                        <div className="inp um-flex-item"><input type='tel' name='code' onChange={(e)=>{inpChange(e,'code')}} value={form.code} placeholder="请输入短信验证码" maxLength={4} /> </div>
                        <div className="send-code" onClick={sendCode}>{sendTxt}</div>
                    </div>
                    <div className="login-submit" onClick={submit}>确定</div>
                </div>
            </div>
        </div>
    )
    
}