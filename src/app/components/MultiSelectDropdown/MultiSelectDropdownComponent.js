import template from './MultiSelectDropdownComponentTemplate.html';

const officesLocation = ['US', 'UK', 'JP', 'FR', 'AU', 'IT'];
const currency = ['USD', 'GBR', 'EUR'];

class MultiSelectDropdownCtrl {
  constructor() { }

  $onInit() {
    this.officeOptions = officesLocation;
    this.currencyOptions = currency;
  };

  selectOption(selectedOption, fieldName) {
    let index = this.vo[fieldName].indexOf(selectedOption);
    index > -1 ? this.vo[fieldName].splice(index, 1) :
      this.vo[fieldName].push(selectedOption);
  }
}

const MultiSelectDropdownComponent = {
  bindings: {
    vo: '=',
    fieldName: '='
  },
  controller: MultiSelectDropdownCtrl,
  template,
  controllerAs: 'config'
}

export default MultiSelectDropdownComponent;