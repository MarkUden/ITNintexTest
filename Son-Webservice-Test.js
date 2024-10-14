import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class SonWebserviceTest extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Son Webservice Test',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        who: {
          type: 'string',
          title: 'Who',
          description: 'Sonardyne'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.who = 'World';
  }

  render() {
    let myObject = await fetch("https://dummyjson.com/carts");
  let myText = await myObject.text();
    return html`<p>Hello ${myText}<p/>`;
  }
}

// registering the web component
const elementName = 'son-webservice-test';
customElements.define(elementName, SonWebserviceTest);
