import template from './SellerDetailsComponentTemplate.html';

class SellerDetailCtrl {
    constructor(DataService) {
        this.dataService = DataService;
        this.currencyField = 'currency';
    }

    $onInit() {
        
        this.officeField = 'office';
        this.vo = {
            'currency': [],
            'office': []
        }
    };

    resetFormAndVO() {
        this.vo = {};
        this.vo.gauranteed = true;
        this.vo.currency = [];
        this.vo.office = [];
        this.vo.email='';
        this.showNameValidationError = this.showCurrencyValidationError
            = this.showOfficeValidationError = false;
    };

    doSomething() {
        return 'Do Something';
    }
    
    cancel() {
        this.resetFormAndVO();
    }

    saveRecord() {
        if (!this.vo.name || !this.vo.currency.length || !this.vo.office.length) {
            if (!this.vo.name) {
                this.showNameValidationError = true;
            }
            this.showCurrencyValidationError = this.vo.currency.length === 0;
            this.showOfficeValidationError = this.vo.office.length === 0;
            return;
        }
        /**
         * Inserting unique id to make seller record unique
         *  Will help to delete or edit record based on ID
         */
        if (this.vo && !this.vo.id) {
            this.vo.id = Math.random().toString(36).substr(2, 9);
        }
        this.dataService.saveDetails(this.vo);
        this.resetFormAndVO();
    }

}

const SellerDetailsComponent = {
    bindings: {},
    controller: SellerDetailCtrl,
    template,
    controllerAs: 'sellerDetails'
}

export default SellerDetailsComponent;