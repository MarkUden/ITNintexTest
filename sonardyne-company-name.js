import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class CompanyName extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Company Name',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        who: {
          type: 'string',
          title: 'Name',
          description: 'Name of Company'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.title = 'Sonardyne';
  }

  render() {
    return html`<p>Hello ${this.title}<p/>`;
  }
}

// registering the web component
const elementName = 'sonardyne-company-name';
customElements.define(elementName, CompanyName);
