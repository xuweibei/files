import superagent from 'superagent';

class Crowller {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  async getRawHtml() {
    const res = await superagent.get(this.url);
    console.log(res.text);
  }

  constructor() {
    this.getRawHtml();
  }
}

const crowller = new Crowller();
