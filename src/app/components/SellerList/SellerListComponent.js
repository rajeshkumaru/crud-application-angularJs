import template from './SellerListComponentTemplate.html';

class SellerListCtrl {

    constructor(DataService, $window) {
        this.dataService = DataService;
        this.windowService = $window;
    }

    $onInit() {
        this.lists = this.dataService.getSellerData();
    };

    /**
     * While edit, just passing current record to the Parent component
     * for auto populating data into seller form
     */
    editRecord(vo) {
        this.vo = angular.copy(vo);
    }

    deleteRecord(vo) {
        if (this.windowService.confirm("Are You Sure You Want To Delete This Record.. ?")) {
            this.lists = this.lists.filter((item) => item.id !== vo.id);
            this.dataService.sellersData = this.lists;
            this.dataService.saveDetails();
        } else {
            return;
        }
    }
}

const SellerListComponent = {
    bindings: { vo: '=' },
    controller: SellerListCtrl,
    template,
    controllerAs: 'sellerList'
}

export default SellerListComponent;