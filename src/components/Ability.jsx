import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Heading, Subhead } from 'rebass'

const Ability = () => {
    return(
    <section id='profile'>
        <Heading
            fontSize={[5,6,7]}
            color='primary'>
                <FormattedMessage id="ability" />
        </Heading>
        <Subhead mt={2} fontSize={[1, 2]}>
            <FormattedMessage id="isable" />
        </Subhead>
        <br/>
        <Heading
            fontSize={[4,5,6]}
            color='primary'>
                <FormattedMessage id="lang" />
        </Heading>
        <br/>
        <div className="ui green image label">
            <i className="icon node js"></i> Node.js
            <a className="detail"><FormattedMessage id="commonly" /></a>
        </div>
        <div className="ui yellow image label">
            <i className="icon js"></i> Javascript
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui blue image label">
            <i className="icon html5"></i>HTML5
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui purple image label">
            <i className="icon sql"></i>SQL
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui orange image label">
            <i className="icon css3"></i>CSS
            <a className="detail"><FormattedMessage id="uses" /></a>
        </div>
        <div className="ui blue image label">
            <i className="icon python"></i>Python
            <a className="detail"><FormattedMessage id="able" /></a>
        </div>
        <div className="ui blue image label">
            C
            <a className="detail"><FormattedMessage id="able" /></a>
        </div>
        <div className="ui red image label">
            C++
            <a className="detail"><FormattedMessage id="learning" /></a>
        </div>
        <div className="ui green image label">
            Go
            <a className="detail"><FormattedMessage id="learning" /></a>
        </div>
        <br/><br/>
        <Heading
            fontSize={[4,5,6]}
            color='primary'>
                <FormattedMessage id="library" />
        </Heading>
        <br/>
        <Heading
            fontSize={[3,4,5]}
            color='primary'>
                UX
        </Heading>
        <div class="ui bulleted list">
            <div class="item">React</div>
            <div class="item">react-router</div>
            <div class="item">ejs</div>
            <div class="item">jquery</div>
            <div class="item">bootstrap</div>
            <div class="item">semantic-ui</div>
            <div class="item">rebass</div>
            <div class="item">antd</div>
        </div>
        <br/>
        <Heading
            fontSize={[3,4,5]}
            color='primary'>
                Strorage
        </Heading>
        <div class="ui bulleted list">
            <div class="item">knex</div>
            <div class="item">mysql</div>
        </div>
        <br/>
        <Heading
            fontSize={[3,4,5]}
            color='primary'>
                Internet
        </Heading>
        <div class="ui bulleted list">
            <div class="item">request</div>
            <div class="item">axios</div>
            <div class="item">node-fetch</div>
        </div>
    </section>
    )
}

export default Ability