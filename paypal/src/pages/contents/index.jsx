import React from 'react';
import './index.less';

function Content() {
  return (
    <div className="content-wrap">
      <div className="content-main">
        <h3 className="content-title">PayPal--安全快捷的收付款工具</h3>
        <div className="content-person">
          <div className="content-choose">
            <input type="radio" />
            <span>个人账户</span>
          </div>
          <div className="content-person-wrap">
            <p className="content-person-title">
              加入全球超过 2 亿用户，足不出户淘遍全球。
            </p>
            <ul className="content-person-tips">
              <li>买家保护和退货运费赔付，助您自信全球购</li>
              <li>一个账号全球收付款</li>
            </ul>
            <p className="content-person-end">
              温馨提示：为确保您的交易安全注册需要验证您的身份信息。中国公民必须使用身份证，并使用证件上的中文姓名，勿使用拼音。非中国公民请使用护照及护照上的相关信息。
            </p>
          </div>
        </div>
        <div className="enterprise">
          <div className="content-choose">
            <input type="radio" />
            <span>企业账户</span>
          </div>
          <div className="content-enterprise-wrap">
            <p className="content-person-title">
              拥有营业执照的商户使用。一个账户全球收款。支持25种货币收款，享受PayPal卖家保障。注册时需提供：
            </p>
            <ul>
              <li>企业所有者信息（需与营业执照上的法定代表人信息一致）</li>
              <li>营业执照扫描件</li>
              <li>法定代表人身份证明</li>
            </ul>
            <p className="content-person-end">
              注意：如果您的商用名和企业注册名不一样，我们提供商用名字段供您使用和修改，企业注册名提交后不可修改，请悉知。
            </p>
          </div>
        </div>
        <div className="content-footer-btns">
          <span>下一步</span>
        </div>
      </div>
    </div>
  );
}

export default Content;
