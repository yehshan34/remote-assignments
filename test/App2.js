function Nav() {
    return (
        <nav>
            <div className="nav_sitename">
                Bite Me Now!
            </div>
            <div id="mobile_menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul class="nav_list">
                <li className="active">來抽獎</li>
                <li>點餐囉</li>
                <li>查訂單</li>
                <li>Q & A</li>
            </ul>
        </nav>
    )
}

class Banner extends React.Component {
    ChangeBanner() {
        const welcomeMessage = document.querySelector("#welcome_banner h1");
        welcomeMessage.textContent = "開啟美好の時光！";
    };

    render() {
        return (
            <section id="goodtime_banner" onClick={this.ChangeBanner}>
                <h1>咬我一口の廚房</h1>
            </section>
        )
    }
}

function Content() {
    return (
        <div className="wrapper">
           <section className="section">
            <h2 id="section_title">
                給您最健康的飲食選擇
            </h2>
            <div className="section_contents">
                <div className="content">
                    <img src="f-001.png" />
                    <p>現代人生活忙碌，常以外食為主，導致慢性病及肥胖率大增。</p>
                </div>
                <div className="content">
                    <img src="f-002.png" />
                    <p>我們定期走訪農田，選用最天然、營養的食材，給您最好的。</p>
                </div>
                <div className="content">
                    <img src="f-002.png" />
                    <p>以最簡單的烹調方式處理，最大化忠實呈現食材原本的鮮味。</p>
                </div>
                <div className="content">
                    <img src="f-001.png" />
                    <p>讓大家體驗不需要過多調味，就能擁有千變萬化的食物口感。</p>
                </div>
            </div>
            </section>
        </div>
    )
}

class Button extends React.Component {
    OpenHiddenContent() {
        const button = document.querySelector(".button");
        const hidden_contents = document.querySelector("#hidden_contents");
        hidden_contents.style.display = "flex";
    }

    render() {
        return (
            <div id="button">
                <input type="button" value="Call to Action" onClick={this.OpenHiddenContent} />
            </div>
        )
    }
}

function ContentHidden() {
    return (
        <div id="hidden_contents" style={{display:'none'}}>
            <div className="content">
                <img src="f-001.png" />
                <p>秘密菜單：（一）</p>
            </div>
            <div className="content">
                <img src="f-002.png" />
                <p>秘密菜單：（二）</p>
            </div>
            <div className="content">
                <img src="f-002.png" />
                <p>秘密菜單：（三）</p>
            </div>
            <div className="content">
                <img src="f-001.png" />
                <p>秘密菜單：（四）</p>
            </div>
        </div>
    )
}

class App2 extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Banner />
                <Content />
                <Button />
                <ContentHidden />
            </div>
        )
    }
}