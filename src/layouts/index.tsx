import React,{Component,useState,useEffect } from 'react';
import styles from './index.css';
import 'amfe-flexible';

const BasicLayout: React.FC = props => {
    const [count,setCount] = useState(5);
    useEffect(()=>{
        console.log('不传第二个参数-每次都会触发')
    })
    useEffect(()=>{
        console.log('第二个参数为空数组-只有在第一次数组初始化的时候触发')
    },[])
    useEffect(()=>{
        console.log('第二个参数数组有值-当数组内值发生变化的时候触发')
    },[count])
   
  return (
    <div className={styles.page}>
      {props.children}
      <div className="footer-nav um-flex">
          <div className="nav um-flex-item">
              <i className="icon"></i>
              <div className="txt">首页{count}</div>
          </div>
          <div className="nav um-flex-item">
              <i className="icon"></i>
              <div className="txt">发现</div>
          </div>
          <div className="nav um-flex-item">
              <i className="icon"></i>
              <div className="txt">订单</div>
          </div>
          <div className="nav um-flex-item">
              <i className="icon"></i>
              <div className="txt" onClick={()=>{setCount(count+1)}}>我的</div>
          </div>
      </div>
    </div>
  );
};
// class BasicLayout extends Component{
//     constructor(props){
//         this.state={

//         }
//     }
//     render(){

//     }

// }

export default BasicLayout;
