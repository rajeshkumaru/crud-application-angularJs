const defaultData = [
    {
        id: Math.random().toString(36).substr(2, 9),
        name: "Rajesh",
        currency: ["USD"],
        office: ["US"],
        bidded: false,
        gauranteed: true
    }
];

class DataService {
    constructor($window) {
        this.windowServie = $window;
        /**
         * While loading first time, will set dummy data to local storage
         */
        if (this.getDataFromLocalStorage() == null || !this.getDataFromLocalStorage().length) {
            this.setDataToLocalStorage(defaultData);
        }
        this.sellersData = this.getDataFromLocalStorage();
    }

    setDataToLocalStorage(data) {
        this.windowServie.localStorage.setItem("sellersData", JSON.stringify(data));
    };

    getDataFromLocalStorage() {
        return JSON.parse(this.windowServie.localStorage.getItem("sellersData"));
    };

    saveDetails(vo) {
        if (vo) {
            var index = this.sellersData.findIndex((obj) => obj.id === vo.id);
            if (index > -1) {
                this.sellersData.splice(index, 1, vo);
            } else {
                this.sellersData.push(vo);
            }
        }

        /**
         * First removing data from local storage to update with new Data
         */
        this.windowServie.localStorage.removeItem("sellersData");
        this.setDataToLocalStorage(this.sellersData);
    }

    getSellerData() {
        return this.sellersData;
    }
}

export default DataService;