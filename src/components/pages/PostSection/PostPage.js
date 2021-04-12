import React, { Component, useState } from 'react';
import "./PostPage.css";
import k from '../../../images/mls_logo_small.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from "react-router-dom";

class PostPage extends Component {
    render() {
     
        return (
            <div class="grid-containerP">
                        <div class="grid-logoP">
                        <img src={k} className ="logoP" ></img>
                           <a href ="https://www.facebook.com/"><FacebookIcon className ="image"></FacebookIcon></a>
                           <a href ="https://www.instagram.com"><InstagramIcon className ="image1"></InstagramIcon></a>
                           <a href ="https://web.wechat.com" className ="image2" ><i class="fab fa-weixin" ></i></a>    
                        </div>
                        <div class="grid-itemP">
                
                        </div>
                        <div class="grid-itemP">
                        <Link
                                to="/login"
                            >
                                <button type="button" class="topssignUp">Log In</button>
                            </Link>
                            <Link
                                to="/signup"
                            >
                                <button type="button" class="toplogIn">Sign Up</button>
                            </Link>
                        </div>
                <div class="grid-item1P">
                    <form>
                    <br/>  <br/>  <br/>
                    <input class="search" type="text" placeholder="Search" name="email"/>
                    <br/>
                    <Link
                                to="/signup"
                            >
                                <button type="button" class="btn_post">Immigration</button>
                            </Link>
                    <br/>
                    <Link
                                to="/signup"
                            >
                                <button type="button" class="btn_post">Tenant Law</button>
                            </Link>
                    <br/>
                    <Link
                                to="/signup"
                            >
                                <button type="button" class="btn_post">Labor Law</button>
                            </Link>
                    <br/>
                    <Link
                                to="/signup"
                            >
                                <button type="button" class="btn_post">Traffic Law</button>
                            </Link>
                    </form>
               
                </div>
                <div class="grid-item">
                    <h1>Community</h1>
                    <h3 className ="immigrationH3">Immigration</h3>
                    <iframe src = "./team" 
                            width = "450" 
                            height ="900" 
                            className = "iframPost" 
                            display ="initial" 
                            position ="relative"
                            scrolling= "yes"/>
                </div>
                <div class="grid-item">
                   
                </div>
            </div>
        );
    }
}
export default PostPage;
