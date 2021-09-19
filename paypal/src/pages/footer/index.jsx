import React from 'react';
import './index.less';

function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer-main">
        <div className="footer-help">
          <ul>
            <li>
              <a>帮助</a>
            </li>
            <li>
              <a>联系我们</a>
            </li>
            <li>
              <a>费用</a>
            </li>
            <li>
              <a>安全</a>
            </li>
            <li>
              <a>购物</a>
            </li>
            <li>
              <a>意见反馈</a>
            </li>
          </ul>
          <div className="footer-help-laugn">
            <span>English</span>
            <img src={require('../../images/icon.png').default} />
          </div>
        </div>
        <div className="footer-second">
          <ul className="left">
            <li>
              <a>关于PayPal</a>
            </li>
            <li>
              <a>新闻中心</a>
            </li>
            <li>
              <a>工作机会</a>
            </li>
            <li>
              <a>网站地图</a>
            </li>
            <li>
              <a>开发者</a>
            </li>
            <li>
              <a>合作伙伴</a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a>© 1999–2021</a>
            </li>
            <li>
              <a>无障碍访问</a>
            </li>
            <li>
              <a>隐私保护</a>
            </li>
            <li>
              <a>法律协议</a>
            </li>
          </ul>
        </div>
        <p className="footer-thrid">
          消费者提示--PayPal Pte.
          Ltd.系PayPal储值工具的持有者，不需要经过新加坡金融管理局的批准。建议用户仔细阅读
          <a href="https://www.paypal.com/c2/webapps/mpp/ua/legalhub-full?locale.x=zh_C2">
            条款和条件
          </a>
          。
          <br />
          <br />
          当您访问我们的网站、服务、工具或消息，或与其互动时，我们或我们的授权服务提供商可能会使用cookie、网络信标和其他类似技术来存储您的信息，以达到为您提供更好、更快、更安全的体验以及广告营销的目的。点击此处了解更多信息。
        </p>
      </div>
    </div>
  );
}
export default Footer;
