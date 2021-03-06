// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("6.666666666666667em")
                .setCaption("Button")
                .onClickDrop([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"url",
                        "args":[ ],
                        "method":"selectFile",
                        "event":1,
                        "onOK":0
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setDirtyMark(false)
                .setLeft("30.833333333333332em")
                .setTop("18.333333333333332em")
                .setHeight("3.8333333333333335em")
                .setCaption("Image Button")
                .setImageClass("xui-icon-xui")
                .onClickDrop([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_button9",
                        "args":[ ],
                        "method":"fireClickEvent",
                        "event":1
                    },
                    "_xui_ui_button9_onclickdrop"
                ])
                .setCustomStyle({
                    "KEY":{
                        "color":"#FFE4C4"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click the drop button
         * @method onClickDrop [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button9_onclickdrop:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        },
        functions:{ }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});