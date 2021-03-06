import angular from 'angular';

// Component files
import SellerDetailsComponent from './components/SellerDetails/SellerDetailsComponent';
import SellerListComponent from './components/SellerList/SellerListComponent';
import DataService from './services/DataService'
import MultiSelectDropdownComponent from './components/MultiSelectDropdown/MultiSelectDropdownComponent';

// Style file
import '../style/styleSheet.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .component('sellerDetailsComponent', SellerDetailsComponent)
  .component('sellerListComponent', SellerListComponent)
  .component('multiSelectDropdownComponent', MultiSelectDropdownComponent)
  .service('DataService', DataService);

export default MODULE_NAME;