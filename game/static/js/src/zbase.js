class AcGame {
    constructor(id) {
        // console.log("new ac app");
        this.id = id;
        this.$ac_game = $('#' + id);  // 将整个游戏对象div取出来，别的对象通过jquery加到div实例中
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);
        this.start();
    }

    start() {  // start函数就是构造函数的延伸，初始化赋一些值
    }
}
