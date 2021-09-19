import React from 'react';
import './index.less';
const svg = require('./logo.svg').default;

function Header() {
  const str = ['个人买家', '商家', '合作伙伴', '常见问题'];
  return (
    <div className="header-wrap-main">
      <div className="header-wrap">
        <span className="header-btns-menus">菜单</span>
        <div className="logo">
          <img src={svg} />
        </div>
        <div className="header-center-logo">
          <img src={svg} />
        </div>
        <div className="header-tips">
          <ul>
            {str.map((item) => (
              <li>
                <a>{item}</a>
                <span className="tips">
                  <span className="tips-one"></span>
                  <span className="tips-two"></span>
                </span>
                <span className="bor"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-btns">
          <button>登录</button>
          <button className="register">注册</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
