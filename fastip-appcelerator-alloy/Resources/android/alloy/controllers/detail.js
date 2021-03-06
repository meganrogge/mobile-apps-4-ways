function Controller() {
    function __alloyId3() {
        $.__views.detail.removeEventListener("open", __alloyId3);
        if ($.__views.detail.activity) $.__views.detail.activity.onCreateOptionsMenu = function(e) {
            var __alloyId2 = {
                title: "Done",
                icon: Ti.Android.R.drawable.ic_menu_save,
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
                id: "__alloyId1"
            };
            $.__views.__alloyId1 = e.menu.add(_.pick(__alloyId2, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId1.applyProperties(_.omit(__alloyId2, Alloy.Android.menuItemCreateArgs));
            clickedDone ? $.__views.__alloyId1.addEventListener("click", clickedDone) : __defers["$.__views.__alloyId1!click!clickedDone"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function clickedDone() {
        clickedSave();
    }
    function clickedSave() {
        var tipPct = parseFloat($.tipPctTextField.value);
        if (tipPct > 0) {
            Ti.App.Properties.setDouble("tipPct", tipPct / 100);
            Ti.API.log("info", "Settings saved");
            $.trigger("closeDetail", null);
        } else Ti.UI.createAlertDialog({
            message: "Enter a tip percentage greater than zero",
            ok: "Try Again",
            title: "Invalid Percentage"
        }).show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: false,
        title: "Settings",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.detail.addEventListener("open", __alloyId3);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Set tip percentage",
        top: "35",
        id: "__alloyId5"
    });
    $.__views.detail.add($.__views.__alloyId5);
    $.__views.tipPctTextField = Ti.UI.createTextField({
        color: "#000",
        id: "tipPctTextField",
        top: "72",
        width: "60",
        height: "35",
        textAlign: "right",
        hintText: "Tip %",
        keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        returnKeyType: Ti.UI.RETURNKEY_DONE
    });
    $.__views.detail.add($.__views.tipPctTextField);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "%",
        top: "72",
        left: "195",
        id: "__alloyId6"
    });
    $.__views.detail.add($.__views.__alloyId6);
    $.__views.saveButton = Ti.UI.createButton({
        width: "130",
        height: Ti.UI.SIZE,
        borderRadius: 15,
        backgroundColor: "#3883B5",
        color: "#fff",
        id: "saveButton",
        title: "Save Settings",
        top: "120"
    });
    $.__views.detail.add($.__views.saveButton);
    clickedSave ? $.__views.saveButton.addEventListener("click", clickedSave) : __defers["$.__views.saveButton!click!clickedSave"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var tipPct = Ti.App.Properties.getDouble("tipPct", .15);
    $.tipPctTextField.value = (100 * tipPct).toFixed(1);
    __defers["$.__views.__alloyId1!click!clickedDone"] && $.__views.__alloyId1.addEventListener("click", clickedDone);
    __defers["$.__views.doneButton!click!clickedDone"] && $.__views.doneButton.addEventListener("click", clickedDone);
    __defers["$.__views.saveButton!click!clickedSave"] && $.__views.saveButton.addEventListener("click", clickedSave);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;