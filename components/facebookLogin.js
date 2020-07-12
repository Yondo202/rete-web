import React, { Component } from 'react'
import FacebookLoginBtn from 'react-facebook-login'
import { GiIfrit } from 'react-icons/gi'
import Link from 'next/link'
import { MdPhotoSizeSelectLarge,MdContentCopy } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';

export class facebookLogin extends Component {


    state = {
        auth: false,
        name: '',
        picture: ''
      }

      componentClicked = () => {
          console.log('button clicked')
      }
      responseFacebook = (res) => {
          console.log(res,"this is response")
          console.log(res.name, 'this is name')
          console.log(res.status, 'this is status')
          if(res.status !== "unknown")
                this.setState({
                    auth: true,
                    name: res.name,
                    picture: res.picture.data.url
                });
      }

    render() {
        let facebookData;
        this.state.auth ? 
            facebookData = (
                // <div className="Profile">
                //    <img src={this.state.picture} alt={this.state.name} />
                //    <span>{this.state.name}</span>
                //    <Link href="/postshare">
                //         <button type="button">Пост шэйрлэх</button>
                //    </Link>
                // </div>
                <div className="userCard" >
                <h5>Сурталчилах</h5>
                <img style={{borderRadius:"50%"}} src={this.state.picture} alt={this.state.name} /><br/>
                <h6 >{this.state.name}</h6><br/>
                    <Link href="/postshare">
                        <button type="button" className="button">Пост шэйрлэх</button>
                    </Link>
              </div>
            ) :
            facebookData = (

                <div className="userCard" >
                    <h5>Сурталчилах</h5>
                    <FaFacebook className="mysvg" /><br />
                    <FacebookLoginBtn
                    appId="321477018868791"
                    // autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    textButton=" Фэйсбоокээр нэвтрэх"
                    size="small"
                    cssClass="my-facebook-button-class"
                    />
                  </div>
               
            )

        return (
            <>
                {facebookData}
            </>
        )
    }
}

export default facebookLogin
