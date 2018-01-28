import React, { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import Layout from '../components/layout'
// import RecipePublisher from '../components/recipePublisher'
const API_KEY = '68aaaf4f13ecd54e10a7fbd76b2bdb45';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export default class App extends Component {
    static async getInitialProps(){
        const res = await fetch(URL)
        const json = await res.json()
        // Return properties
        return { movies: json.results }
    }

    render(){
        return(
            <Layout>
                <div className="container">
                    <div className="wrapper">
                    	<ul>
                    		{this.props.movies.map((item, index) => {
                    			const imageURL = 'http://image.tmdb.org/t/p/w500' + item.poster_path;
                    			return (
                    				<li key={index}>
                    					<img src={imageURL} alt={item.original_title} />
                    					<div className='info'>
											<p>Genre</p>
											<div className='button'></div>
                    					</div>
                    				</li>
                    			)
                    		})}
                    	</ul>
                    </div>
                    <style jsx>{`
                        html {
						  -webkit-font-smoothing: antialiased;
						}

						body, ul, li {
						  margin: 0;
						  padding: 0;
						}

						ul {
						  list-style: none;
						}

						body, ul, .info, .button {
						  display: flex;
						  flex-direction: row;
						}

						body {
						  align-items: center;
						  justify-content: center;
						  width: 100%;
						  height: 90vh;
						  background: #f0f0f0;
						  font: 400 1em 'Roboto', sans-serif;
						}

						.container {
							margin-top: 50px;
						}

						img {
						  transition: all 0.5s;
						  width: 300px;
						  -webkit-backface-visibility: hidden;
						  backface-visibility: hidden;
						}

						.info {
						  position: absolute;
						  left: 0;
						  right: 0;
						  margin: auto;
						  align-items: flex-end;
						  justify-content: space-between;
						  transition: all 0.6s;
						  box-shadow: 0 1.5em 6em rgba(0, 0, 0, 0.15);
						  z-index: -1;
						  background: white;
						  height: 5em;
						  bottom: 5em;
						}
						.info p {
						  margin: 1.1em 1.25em;
						  color: lightslategray;
						  font-weight: 400;
						}

						li {
						  transition: all 0.5s;
						  position: relative;
						  margin: 0 3em;
						}
						li:hover {
						  transform: scale(1.1);
						}
						li:hover img {
						  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
						  transform: scale(1.1);
						}
						li:hover .info {
						  bottom: -4.75em;
						}

						.button {
						  transition: all 0.5s;
						  align-items: center;
						  justify-content: center;
						  height: 3.75em;
						  width: 6em;
						  background: tomato;
						  color: white;
						}
						.button::before {
						  transition: all 0.5s;
						  content: "Watch";
						  transform: translatex(0.9em);
						}
						.button::after {
						  transition: all 0.5s;
						  content: "Now";
						  opacity: 0;
						  transform: translatex(1.5em);
						}
						.button:hover {
						  cursor: pointer;
						  background: lightslategray;
						}
						.button:hover::before {
						  transform: translatex(-1.5em);
						  opacity: 0;
						}
						.button:hover:after {
						  transform: translatex(-1.5em);
						  display: inline;
						  opacity: 1;
						}

                    `}</style>
                    <style global jsx>{`
                        @import url('https://fonts.googleapis.com/css?family=Roboto');
                        html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}
                        body {
                            font-family: 'Roboto', sans-serif;
                            -webkit-font-smoothing: antialiased;
                        }
                    `}</style>
                </div>
            </Layout>
        )
    }
}
