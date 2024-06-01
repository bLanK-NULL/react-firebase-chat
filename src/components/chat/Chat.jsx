import { useState, memo } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { useRef } from 'react'
const Chat = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const textarea = useRef(null);
    function handleEmoji(e) {
        setValue((prev) => prev + e.emoji)
        setOpen(false)
        textarea.current.focus();
    }
    return (
        <div className="chat">
            <header className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>bLanK</span>
                        <p>user description................</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />

                </div>
            </header>

            <main className="center">

                {
                    new Array(5).fill().map((x, i) => {
                        return (
                            <div className={i % 2 == 0 ? "message own" : "message"}>
                                <img src="./avatar.png" alt="" />
                                <div className="texts">
                                    <img src="https://bing.img.run/1366x768.php" alt="" />
                                    <div className='content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicingelit.
                                        Natusquis quae qui! Sint asperiores vero nobis deserunt aperiam iustorepellendus,optioimpedit eius,
                                        reprehenderit dolorum nihilmagnam alias, oditquam.
                                    </div>
                                    <div className='time'>1 min ago</div>
                                </div>
                                <div className="block"></div>
                            </div>
                        )
                    })
                }
            </main>

            <footer className="bottom">
                <div className="tools">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                    <img src="./emoji.png" alt=""
                        onClick={() => setOpen(!open)} />
                    <EmojiPicker
                        className='emojiBoard'
                        open={open}
                        onEmojiClick={handleEmoji}
                        width={'80%'}
                        height={300}
                        searchDisabled={true}
                        lazyLoadEmojis={true}
                        emojiStyle='native'
                    ></EmojiPicker>
                </div>
                <div className='content'>
                    <textarea name="" id="" placeholder='Type a message...'
                        ref={textarea}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}></textarea>
                </div>


            </footer>
        </div>
    )
}

export default Chat