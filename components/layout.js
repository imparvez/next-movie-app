import Link from 'next/link'
import Head from 'next/head'

export default ({children, title = 'This is the default title'}) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='stylesheet' href="/static/styles/normalize.min.css"/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
        </Head>
        
        { children }

        <footer>
            <p>Hand crafted with love by the engineer at Work-from-home and thats me!</p>
            <a href='github.com/imparvez'>
                <span><i className="fa fa-github" aria-hidden="true"></i></span>
            </a>
        </footer>
        <style jsx>{`
            footer {
                padding: 72px 24px;
                box-sizing: border-box;
                background-color: rgb(33, 33, 33);
                text-align: center;
                margin-top: 150px;
            }

            footer p {
                margin: 0px auto;
                padding: 0px;
                color: rgba(255, 255, 255, 0.54);
                max-width: 445px;
            }

            footer a {
                border: 10px;
                box-sizing: border-box;
                display: inline-block;
                font-family: Roboto, sans-serif;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                cursor: pointer;
                text-decoration: none;
                margin: 0px;
                padding: 12px;
                outline: none;
                font-size: 0px;
                font-weight: inherit;
                position: relative;
                vertical-align: middle;
                overflow: visible;
                transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                width: 48px;
                height: 48px;
                background: none;
            }

            footer a span {
                color: rgba(255, 255, 255, 0.87);
                position: relative;
                font-size: 24px;
                display: inline-block;
                user-select: none;
                transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            }
        `}</style>
    </div>
)