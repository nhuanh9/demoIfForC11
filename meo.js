class Meo {
    ten;
    canNang;
    constructor(ten, canNang) {
        this.ten = ten;
        this.canNang = canNang;
    }

    getTen() {
        return this.ten;
    }

    setTen(value) {
        this.ten = value;
    }

    getCanNang() {
        return this.canNang;
    }

    setCanNang(value) {
        this.canNang = value;
    }

    can(chuot) {
        this.canNang++;
        chuot.setCanNang(chuot.getCanNang()-1);
    }
}
