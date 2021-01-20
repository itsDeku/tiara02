import React from 'react'

class Footer extends React.Component {
    constructur(){
    super()
    }
    function handelClick(e){
        for(i=0;i<5,i++){
            let footerElem[i] = document.getElementByClassName('footerElem')[i];
        }
        if(e.name=='active'){
        
        }
    
    
    render() {
        return (
            <footer className="footer bottom-fixed">
                <div className="monetize footerElem" onClick={this.handelClick}>
                    <span className="iconify monetize-logo" data-inline="false" data-icon="ic:baseline-monetization-on"></span>
                    <div className="seprator"><span className="iconify" data-inline="false" data-icon="ant-design:line-outlined" ></span></div>
                </div>
                <div className="favorite footerElem">
                    <span className="iconify favorite-logo" data-inline="false" data-icon="carbon:favorite-filled"></span>
                    <div className="seprator"><span className="iconify" data-inline="false" data-icon="ant-design:line-outlined" ></span></div>
                </div>
                <div className="add-post-2 footerElem">
                    <span className="iconify add-post-2-logo" data-inline="false" data-icon="ic:baseline-add"></span>
                    <div className="seprator"><span className="iconify" data-inline="false" data-icon="ant-design:line-outlined" ></span></div>

                </div>
                <div className="chats footerElem">
                    <span className="iconify chats-logo" data-inline="false" data-icon="clarity:chat-bubble-solid"></span>
                    <div className="seprator"><span className="iconify" data-inline="false" data-icon="ant-design:line-outlined" ></span></div>
                </div>
                <div className="account footerElem">
                    <span className="iconify account-logo" data-inline="false" data-icon="ic:sharp-account-circle"></span>
                </div>
            </footer>
        )
    }
}

export default Footer;
