import "./chatList.css"
import { useState } from "react"
const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img className="add" src={addMode ? "./plus.png" : './minus.png'} alt=""
                    onClick={() => setAddMode((mode => !mode))} />
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>bLanK</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>bLanK</span>
                    <p>hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>bLanK</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>bLanK</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>bLanK</span>
                    <p>hello</p>
                </div>
            </div>
            
        </div>
    )
}
export default ChatList