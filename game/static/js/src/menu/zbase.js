class AcGameMenu {
    constructor(root) {  // root为根元素AcGame，因为可能会用到里面的东西
        this.root = root;
        // 创建menu的对象，内容为html
        this.$menu = $(` 
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);  // 将menu对象(上面的html代码)加到id为12345678的标签中
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');  // find函数从整个html对象中找某个标签的html, $表示html对象
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.start();
    }
    
    start() {  // 对象被创建出来之后自动调用start函数
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function() {  // 监听div被点击，function为匿名函数
            outer.hide();  // 关闭当前menu对象
            outer.root.playground.show();  // 显示playground对象
        });
        this.$multi_mode.click(function() {  // 监听div被点击，function为匿名函数
            console.log("click multi mode");
        });
        this.$settings.click(function() {  // 监听div被点击，function为匿名函数
             console.log("click settings");
        });
    }

    show () {  // 显示菜单界面：点击单人模式关闭菜单界面打开游戏界面
        this.$menu.show();
    }

    hide() {  // 关闭菜单界面：返回菜单界面先关闭游戏界面再打开菜单界面
        this.$menu.hide();
    }
}
