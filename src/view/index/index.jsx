
import React from 'react'
import {connect} from "react-redux"
import "../../assets/css/index.css"
import Componet from "../two/index"
 class index extends React.Component {
     constructor(props){
        super(props)
        this.state={
            name:'何运正',
            arr:[]
        }
     }
     
     componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        var imgList=Array.from(this.refs.box.childNodes)
        var arr=[]
        imgList.forEach((item,index)=>{
            if(item.offsetTop<clientHeight+scrollTop){
                item.setAttribute('src',item.getAttribute('data-src'))
  
            }
           arr.push(item.getAttribute('src'))
        })
        this.setState({
            arr:arr
        })
     }
    //  shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.arr.length>0){
    //         return false
    //     }
    //   }
     handleScroll(e){
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        var imgList=Array.from(this.refs.box.childNodes)
        imgList.forEach((item,index)=>{
            if(item.offsetTop+item.offsetHeight/2<clientHeight+scrollTop){
                item.setAttribute('src',item.getAttribute('data-src'))
  
            }
        })
     }
    render() {
        return (
            <div className='box' ref='box'>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190909102825_rhdny.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/下午 趴在桌子的女孩4k动漫壁纸3840x2160_彼岸图网.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190909102825_rhdny.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/下午 趴在桌子的女孩4k动漫壁纸3840x2160_彼岸图网.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190909102825_rhdny.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/下午 趴在桌子的女孩4k动漫壁纸3840x2160_彼岸图网.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190909102825_rhdny.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/下午 趴在桌子的女孩4k动漫壁纸3840x2160_彼岸图网.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190909102825_rhdny.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/下午 趴在桌子的女孩4k动漫壁纸3840x2160_彼岸图网.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190909102825_rhdny.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/下午 趴在桌子的女孩4k动漫壁纸3840x2160_彼岸图网.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <img className='img' src={require('../../assets/img/loading.gif')} data-src={require('../../assets/img/20190801162753_yrkbs.jpg')} alt=""/>
                <Componet></Componet>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        state
    }
       
}
export default connect(mapStateToProps)(index)




