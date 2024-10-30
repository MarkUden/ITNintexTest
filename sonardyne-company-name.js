import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class CompanyName extends LitElement {
  
  static properties = {
    company: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Company Name',
      fallbackDisableSubmit: false,
      version: '1.3',
      properties: {
        who: {
          type: 'string',
          title: 'Who',
          description: 'Enter a company name'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.who = 'Company Name';
  }

  render() {
    return html`<p>Hello ${this.who}<p/>`;
  }
}

// registering the web component
const elementName = 'sonardyne-company-name';
customElements.define(elementName, CompanyName);
